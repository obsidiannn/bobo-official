import { createWalletClient, custom, parseUnits as viemParseUnits } from 'viem'
import { sepolia } from 'viem/chains'
import { Colors, Displays, Capacities } from '@/contants/types'

export const parseUnits = (ether: string, unit: number = 18) => viemParseUnits(ether, unit)

export const getEllipsisWords = (str: `0x${string}`, n: number = 6): string => {
  if (str) {
    return `${str.slice(0, n)}...${str.slice(str.length - n)}`
  }
  return ''
}

export const getChain = (chainId: number, chains: readonly any[]) => {
  const chain = chains.find(chain => chain.id === chainId)
  if (!chain) throw new Error(`无法找到链ID为 ${chainId} 的配置`)
  return chain
}

export const getTransport = (chainId: number, transports: any) => {
  const transport = transports[chainId]
  if (!transport) throw new Error(`无法找到链ID为 ${chainId} 的传输方式`)
  return transport
}

export const convertMobileAttribute = (attributes: string) => {
  if (!attributes.includes('/')) return attributes

  const splits = attributes.split('/')
  splits[0] = Colors[splits[0] as keyof typeof Colors] as string
  splits[1] = Displays[splits[1] as keyof typeof Displays] as string
  splits[2] = Capacities[splits[2] as keyof typeof Capacities] as string
  return splits.join('/')
}

export const walletClient4Sepolia =
  typeof window !== 'undefined'
    ? window.ethereum
      ? createWalletClient({
          chain: sepolia,
          transport: custom(window.ethereum)
        })
      : null
    : null


export const sleep = (delay: number) => new Promise(resolve => setTimeout(resolve, delay))
