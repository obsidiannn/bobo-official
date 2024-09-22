'use client'
import { Box, Button, Divider, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { useAccount, useReadContract, useWriteContract } from 'wagmi'

import styles from './page.module.css'
import FormLine from '@/components/form/form-line'
import Balance from '@/components/account/balance'
import BotBalance from '@/components/contract/bot-balance'
import BonusBalance from '@/components/contract/bonus-balance'
import BonusPool from '@/components/contract/bonus-pool'
import { useRef, useState } from 'react'
import BounsModal, { BounsModalType } from './components/bouns-modal'

import bounsAbi from '@/components/contract/abi/BoboErc4646Bonus.json'
import boboTokenAbi from '@/components/contract/abi/BoboToken.json'
import { ChainContract } from 'viem'

// interface FormStateProp {
//     id: 'none' | 'withdraw' | 'mint' | 'redeem'
// }

const BounsPage = () => {
    // const [shown, setShown] = useState(false)
    const { isConnected, address, chain } = useAccount()
    const bounsRef = useRef<BounsModalType>(null)

    const { writeContractAsync } = useWriteContract()

    const amountRef = useRef(0)

    const renderMint = () => {
        bounsRef.current?.open({
            title: '存款',
            subTitle: '拟购买股份数量',
            id: 'mint',
            previewUnit: 'BOT'
        })
    }

    const renderWithdraw = () => {
        bounsRef.current?.open({
            title: '取现',
            subTitle: '拟提取BOT数量',
            id: 'withdraw',
            previewUnit: 'Bouns'
        })
    }

    const renderRedeem = () => {
        bounsRef.current?.open({
            title: '赎回',
            subTitle: '拟赎回的股份数量',
            id: 'redeem',
            previewUnit: 'BOT'
        })
    }

    const doRequest = async (id: 'none' | 'withdraw' | 'mint' | 'redeem', amount: number) => {
        const boboContract = chain?.contracts?.boboErc20 as ChainContract
        const bounsContract = chain?.contracts?.boboBonus as ChainContract
        const boboAddr = boboContract.address ?? null
        const bounsAddr = bounsContract.address ?? null

        if (id === 'mint') {
            if (boboAddr && bounsAddr) {
                await writeContractAsync({
                    abi: boboTokenAbi.abi,
                    address: boboAddr,
                    functionName: 'approve',
                    account: address,
                    args: [bounsAddr, amount]
                })
                const result = await writeContractAsync({
                    abi: bounsAbi.abi,
                    address: bounsAddr,
                    functionName: 'deposit',
                    account: address,
                    args: [BigInt(amount), address]
                })
            }

        }
        if (id === 'withdraw') {
            if (bounsAddr) {
                const result = await writeContractAsync({
                    abi: bounsAbi.abi,
                    address: bounsAddr,
                    functionName: 'withdraw',
                    account: address,
                    args: [amount, address, address]
                })
            }
        }
        if (id === 'redeem') {
            if (bounsAddr) {
                const result = await writeContractAsync({
                    abi: bounsAbi.abi,
                    address: bounsAddr,
                    functionName: 'mint',
                    account: address,
                    args: [amount, address, address]
                })
            }
        }
    }




    return (
        <>
            <Box className={styles.container}>
                <Heading as="h2" fontSize="2rem" mb={10} className="text-center">
                    质押合约
                </Heading>
                <Flex className="flex-col items-start gap-4 w-4/5 m-auto">
                    {isConnected && (
                        <>
                            <FormLine label="当前钱包地址" value={address} />
                            <FormLine label="当前网络" value={`${chain?.name} , Id: ${chain?.id}`} />
                            <Balance />
                            <BotBalance title={"当前持有Bobo币"} enableMint={false} />
                            <BonusBalance title='当前持有股份' />
                            <BonusPool title='当前总质押数量' />
                            <div className='flex flex-col border-t w-full'>
                                <FormLine label="操作" className='mt-4' />
                                <div className='flex flex-row mt-4'>
                                    <Button className='mr-4' onClick={renderMint}> 存款 </Button>
                                    <Button className='mr-4' onClick={renderWithdraw}> 取现 </Button>
                                    <Button className='mr-4' onClick={renderRedeem}> 赎回 </Button>
                                </div>
                            </div>
                        </>
                    )}
                    <BounsModal ref={bounsRef}
                        address={((chain?.contracts?.boboBonus) as ChainContract).address}
                        account={address ?? ''}
                        onClose={async (flag, id, amount) => {
                            if (flag) {
                                await doRequest(id, amount)
                            }
                        }} />
                </Flex>

            </Box>
        </>
    )
}

export default BounsPage