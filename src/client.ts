import { createPublicClient, http } from 'viem'
import { sepolia , goerli } from 'viem/chains'

export const publicClientSepolia = createPublicClient({
  chain: sepolia,
  transport: http()
})

export const publicClientGoerli = createPublicClient({
  chain: goerli,
  transport: http()
})