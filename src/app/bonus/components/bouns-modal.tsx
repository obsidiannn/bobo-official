'use client'

import FormLine from "@/components/form/form-line";
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react";
import bounsAbi from '@/components/contract/abi/BoboErc4646Bonus.json'
import { useReadContract } from "wagmi";

interface OpenProps {
    id: 'none' | 'withdraw' | 'mint' | 'redeem'
    title: string
    subTitle: string
    previewUnit: string
}

interface BounsModalProps {
    address: string
    account: string
    onClose: (val: boolean, id: 'none' | 'withdraw' | 'mint' | 'redeem', amount: number) => void
}

export interface BounsModalType {
    open: (param: OpenProps) => void
}

interface AmountProp {
    amount: number
    previewAmount: number
    loading: boolean
}

const defaultAmount: AmountProp = { amount: 0, previewAmount: 0, loading: false }

const BounsModal = forwardRef((props: BounsModalProps, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [basicProp, setBasicProp] = useState<OpenProps | null>(null)
    const [amount, setAmount] = useState<AmountProp>(defaultAmount)

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const previewMint = useReadContract({
        address: props.address as `0x${string}`,
        abi: bounsAbi.abi,
        account: props.account as `0x${string}`,
        functionName: 'previewMint',
        args: [amount.amount],
    })

    const previewWithdraw = useReadContract({
        address: props.address as `0x${string}`,
        abi: bounsAbi.abi,
        account: props.account as `0x${string}`,
        functionName: 'previewWithdraw',
        args: [amount.amount],
    })

    const previewRedeem = useReadContract({
        address: props.address as `0x${string}`,
        abi: bounsAbi.abi,
        account: props.account as `0x${string}`,
        functionName: 'previewRedeem',
        args: [amount.amount],
    })


    const contractFunc = useReadContract({
        address: props.address as `0x${string}`,
        abi: bounsAbi.abi,
        account: props.account as `0x${string}`,
        functionName: 'balanceOf',
        args: [props.account],
    })


    const previewData = useMemo(() => {
        if (basicProp) {
            if (basicProp.id === 'mint') {
                if (previewMint.isSuccess) {
                    return Number(previewMint.data)
                }
            }

            if (basicProp.id === 'withdraw') {
                if (Number(contractFunc.data) > 0) {
                    if (previewWithdraw.isSuccess) {
                        return Number(previewWithdraw.data)
                    }
                }
            }

            if (basicProp.id === 'redeem') {
                if (Number(contractFunc.data) > 0) {
                    if (previewRedeem.isSuccess) {
                        return Number(previewRedeem.data)
                    }
                }
            }
        }
        return 0
    }, [amount.previewAmount, previewMint.isFetching, basicProp?.id])

    const doClose = (val: boolean) => {
        if (val) {
            props.onClose(true, basicProp?.id ?? 'none', amount.amount)
        } else {
            props.onClose(false, 'none', 0)
        }
        onClose()
    }

    const doPreview = async () => {
        if (basicProp) {
            setAmount({ ...amount, loading: true })
            try {
                if (basicProp.id === 'mint') {
                    const result = await previewMint.refetch()
                    console.log(result);
                }
                if (basicProp.id === 'withdraw') {
                    const result = await previewWithdraw.refetch()
                    console.log(result);
                }
                if (basicProp.id === 'redeem') {
                    const result = await previewRedeem.refetch()
                    console.log(result);
                }
                setAmount({ ...amount, loading: false })
            } finally {
                setAmount({ ...amount, loading: false })
            }
        }
    }

    useImperativeHandle(ref, () => {
        return {
            open: (param: OpenProps) => {
                setBasicProp(param)
                onOpen()
            }
        }
    })

    return (
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={() => {
                doClose(false)
            }}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{basicProp?.title ?? ''}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <div>
                        <FormLine label={basicProp?.subTitle ?? ''} value={<Input value={amount.amount + ''} onChange={e => {
                            setAmount({ ...amount, amount: Number(e.target.value) })
                        }} />} />
                        <div className="mt-4" />
                        <FormLine label="试算结果" className="mt-10"
                            value={(
                                <div className="flex flex-row items-center">
                                    <Text className="mr-4">{previewData} {basicProp?.previewUnit}</Text>
                                    <Button isLoading={amount.loading} onClick={doPreview}>试算</Button>
                                </div>
                            )} />
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => doClose(true)}>
                        Save
                    </Button>
                    <Button onClick={() => doClose(false)}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
})

export default BounsModal