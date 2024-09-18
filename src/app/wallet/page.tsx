'use client'
import { Box, Button, Divider, Flex, Heading } from '@chakra-ui/react'
import { useAccount, useBlock, useEnsName } from 'wagmi'

import styles from './page.module.css'
import AccountStatus from '@/components/account/status'
import FormLine from '@/components/form/form-line'
import Balance from '@/components/account/balance'
import BotBalance from '@/components/contract/bot-balance'
import BonusBalance from '@/components/contract/bonus-balance'

const WalletPage = () => {
    // const [shown, setShown] = useState(false)
    const { isConnected, address, chain } = useAccount()
    // const block = useBlock()

    return (
        <>
            <Box className={styles.container}>
                <Heading as="h2" fontSize="2rem" mb={10} className="text-center">
                    Wallet Info
                </Heading>
                <Flex className="flex-col items-start gap-4 w-4/5 m-auto">
                    <AccountStatus />
                    {isConnected && (
                        <>
                            <FormLine label="Address" value={address} />
                            <FormLine label="network" value={`Chain Name: ${chain?.name} , Chain Id: ${chain?.id}`} />
                            <Balance />
                            <BotBalance />
                            <BonusBalance />
                            {/* <C1 />
                            <Balance />
                            <Flex w="100%" display="flex" justifyContent="space-between" flexWrap="wrap">
                                <BlockNumber />
                                <Button
                                    onClick={fetchTransactions}
                                    variant="ghost"
                                    className="border border-stone-400 rounded-[20px] hover:shadow-[0_0_8px_8px_rgba(30,136,229,0.2)]"
                                >
                                    {shown ? 'Hide' : 'Show'} block info
                                </Button>
                            </Flex>
                            <Divider mb={1} />
                            <Flex w="100%" display="flex" justifyContent="space-around" flexWrap="wrap" gap={5}>
                                <SignCard />
                                <TransferCard />
                            </Flex> */}
                        </>
                    )}
                </Flex>

            </Box>
        </>
    )
}

export default WalletPage