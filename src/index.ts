import { publicClientSepolia , publicClientGoerli  } from './client'
import { wagmiAbi } from './abi'


const unwatch = publicClientSepolia.watchContractEvent({
  address: ['0x3DdA5931624D7F1EB81D332F21e96F1720a4E307'],
  abi: wagmiAbi,
  eventName: "Pop",
  onLogs: logs => console.log(logs)
})

const unwatch2 = publicClientGoerli.watchContractEvent({
  address: ['0x520F77A4e63319bb307c22086AEC7d049e044628'],
  abi: wagmiAbi,
  eventName: "Pop",
  onLogs: logs => console.log(logs)
})
