import React, { useMemo } from 'react'
import { useAccount, useBalance, useReadContract } from 'wagmi'
import FormLine from '../form/form-line'

import abi from './abi/BoboErc4646Bonus.json'
import { ChainContract } from 'viem'

const BonusPool = ({ title }: { title?: string }): React.JSX.Element => {
    const { address, chain } = useAccount()
    // const { data } = useBalance({ address })
    const bounsContract = chain?.contracts?.boboBonus as ChainContract
    if (chain?.id !== 1337) {
        return <></>
    }
    const contractFunc = useReadContract({
        abi: abi.abi,
        address: bounsContract?.address,
        functionName: 'totalAssets',
        account: address,
    })

    const renderResult = (): string => {
        console.log(contractFunc);

        if (contractFunc.isSuccess) {
            return String(contractFunc.data) + ' BOT'
        }
        return "0"
    }


    return <div>
        <FormLine label={title ?? "Bobo Bouns Contract current asset "} value={renderResult()} />
    </div>
}

export default BonusPool
