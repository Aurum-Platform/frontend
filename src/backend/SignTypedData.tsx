import { useEffect, useState } from 'react'
import { recoverTypedDataAddress } from 'viem'
import { type Address, useSignTypedData } from 'wagmi'

const domain = {
  name: "AurumOracle",
  version: "1",
  chainId: 11155111,
  verifyingContract: "oracle.address",
} as const

const types = {
  VerifyPacket: [
    { name: "request", type: "bytes32" },
    { name: "deadline", type: "uint256" },
    { name: "payload", type: "bytes" },
    { name: "tokenContract", type: "address" },
  ],
} as const

const message = {
  from: {
    name: 'Cow',
    wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
  },
  to: {
    name: 'Bob',
    wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },
  contents: 'Hello, Bob!',
} as const

export function SignTypedData() {
  const { data, error, isLoading, signTypedData } = useSignTypedData({
    domain,
    types,
    message,
    primaryType: 'Mail',
  })

  const [recoveredAddress, setRecoveredAddress] = useState<Address>()
  useEffect(() => {
    if (!data) return
    ;(async () => {
      setRecoveredAddress(
        await recoverTypedDataAddress({
          domain,
          types,
          message,
          primaryType: 'Mail',
          signature: data,
        }),
      )
    })()
  }, [data])

  return (
    <>
      <button disabled={isLoading} onClick={() => signTypedData()}>
        {isLoading ? 'Check Wallet' : 'Sign Message'}
      </button>

      {data && (
        <div>
          <div>Signature: {data}</div>
          <div>Recovered address {recoveredAddress}</div>
        </div>
      )}
      {error && <div>Error: {error?.message}</div>}
    </>
  )
}
