import React, { useMemo, useState } from 'react'
import { useAccount, useBalance, useReadContract, useWriteContract } from 'wagmi'
import FormLine from '../form/form-line'

import abi from './abi/BoboToken.json'
import { Button } from '@chakra-ui/react'
import { ChainContract } from 'viem'

const BotBalance = ({ title, enableMint }: { title?: string, enableMint: boolean }): React.JSX.Element => {
    const { address, chain } = useAccount()
    const [loading, setLoading] = useState(false)
    // const { data } = useBalance({ address })
    const boboContract = chain?.contracts?.boboErc20 as ChainContract
    if (chain?.id !== 1337) {
        return <></>
    }

    const { writeContractAsync } = useWriteContract()
    const contractFunc = useReadContract({
        abi: abi.abi,
        address: boboContract?.address,
        functionName: 'balanceOf',
        account: address,
        args: [
            address
        ]
    })

    const renderResult = (): string => {
        console.log(contractFunc.data);

        if (contractFunc.isSuccess) {
            return String(contractFunc.data) + ' BOT'
        }
        return "0"
    }

    const doFreeMint = async () => {
        setLoading(true)
        try {
            console.log('mint', boboContract.address, address);

            const result = await writeContractAsync({
                abi: abi.abi,
                address: boboContract?.address,
                functionName: 'mint',
                account: address,
            })
            console.log('mint result = ', result);
            await contractFunc.refetch()
        } finally {
            setLoading(false)
        }

    }

    return <div className='flex flex-row items-center'>
        <FormLine label={title ?? "Bobo Erc20 Balance"} value={renderResult()} />
        {enableMint ? <Button className='p-6' isLoading={loading} onClick={doFreeMint}>Mint For Free</Button> : null}
    </div>
}

export default BotBalance
