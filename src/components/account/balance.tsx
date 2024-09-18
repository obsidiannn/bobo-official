import React from 'react'
import { useAccount, useBalance } from 'wagmi'
import FormLine from '../form/form-line'

const Balance = (): React.JSX.Element => {
    const { address, chain } = useAccount()
    const { data } = useBalance({ address })
    
    const displayBalance = data?.formatted ? `${data?.formatted} ${chain?.nativeCurrency.symbol}` : `0 ${chain?.nativeCurrency.symbol}`
    return <FormLine label="Balance" value={displayBalance} />
}

export default Balance
