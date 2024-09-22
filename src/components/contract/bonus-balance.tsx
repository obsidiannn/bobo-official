import React, { useMemo } from 'react'
import { useAccount, useBalance, useReadContract } from 'wagmi'
import FormLine from '../form/form-line'

import abi from './abi/BoboErc4646Bonus.json'
import { ChainContract } from 'viem'

const BonusBalance = ({ title }: { title?: string }): React.JSX.Element => {
    const { address, chain } = useAccount()
    // const { data } = useBalance({ address })
    const boboBouns = chain?.contracts?.boboBonus as ChainContract
    if (chain?.id !== 1337) {
        return <></>
    }
    const contractFunc = useReadContract({
        abi: abi.abi,
        address: boboBouns.address,
        functionName: 'balanceOf',
        account: address,
        args: [
            address
        ]
    })

    const renderResult = (): string => {
        console.log(contractFunc);

        if (contractFunc.isSuccess) {
            return String(contractFunc.data) + ' Bouns'
        }
        return "0"
    }


    return <FormLine label={title ?? "Bobo Bouns Contract Balance"} value={renderResult()} />
}

export default BonusBalance
