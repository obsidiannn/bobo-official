import { defineChain, type Transport } from 'viem'
import { createConfig, http } from 'wagmi'
import {
  mainnet,
  sepolia,
  polygon,
  polygonMumbai,
  optimism,
  optimismGoerli,
  arbitrum,
  arbitrumGoerli,
  zkSync,
  zkSyncSepoliaTestnet,
  linea,
  lineaTestnet,
  base,
  baseGoerli,
  bsc,
  bscTestnet
} from 'wagmi/chains'
import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import {
  argentWallet,
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets'

const ProjectId = '8e58998f8ac136e7906dd57d856930ea';

if (!ProjectId) {
  throw new Error('WalletConnect project ID is not defined. Please check your environment variables.')
}

const Connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet, rainbowWallet, walletConnectWallet, ledgerWallet, rabbyWallet, coinbaseWallet, argentWallet, safeWallet]
    }
  ],
  { appName: 'bobo-official', projectId: ProjectId }
)

// Fix missing icons
const customZkSyncSepoliaTestnet = { ...zkSyncSepoliaTestnet, iconUrl: '/assets/chains/zksync.svg' }
const customLinea = { ...linea, iconUrl: '/assets/chains/linea.svg' }
const customLineaTestnet = { ...lineaTestnet, iconUrl: '/assets/chains/linea.svg' }


const boboNet = defineChain({
  id: 1337,
  name: 'Bobo Test Net',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['http://101.35.197.66:8545'],
    },
  },
  contracts: {
    boboBonus: {
      address: '0x3f0E5674C78190cd5D2F305425439c0Ee4B4E0B5',
    },
    boboErc20: {
      address: '0x86a6b0629884864578DBA6BB6DDF1346AD753E26',
    },
  },
})

// const boboNet = defineChain({
//   id: 1337,
//   name: 'Bobo Test Net',
//   nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
//   rpcUrls: {
//     default: {
//       http: ['http://192.168.31.201:7545'],
//     },
//   },
//   contracts: {
//     boboBonus: {
//       address: '0x524CA1cB369f72fe01382227dE437D99918c8959',
//     },
//     boboErc20: {
//       address: '0x0B61ACA359Ea87645bE626162B0B37d4f34F3298',
//     },
//   },
// })

export const Transports: Record<number, Transport> = {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
  [polygon.id]: http(),
  [polygonMumbai.id]: http(),
  [optimism.id]: http(),
  [optimismGoerli.id]: http(),
  [arbitrum.id]: http(),
  [arbitrumGoerli.id]: http(),
  [zkSync.id]: http(),
  [zkSyncSepoliaTestnet.id]: http(),
  [linea.id]: http(),
  [lineaTestnet.id]: http(),
  [base.id]: http(),
  [baseGoerli.id]: http(),
  [bsc.id]: http(),
  [bscTestnet.id]: http(),
  [boboNet.id]: http()
}


export const WagmiConfig = createConfig({
  chains: [
    mainnet,
    sepolia,
    polygon,
    polygonMumbai,
    optimism,
    optimismGoerli,
    arbitrum,
    arbitrumGoerli,
    customLinea,
    customLineaTestnet,
    zkSync,
    customZkSyncSepoliaTestnet,
    base,
    baseGoerli,
    bsc,
    bscTestnet,
    boboNet
  ],
  connectors: Connectors,
  transports: Transports,
  ssr: true
})
