import { Address, BaseError, parseEther } from 'viem'

import { useContractWrite, useWaitForTransaction, useContractRead } from 'wagmi'

import { aurumV2ContractConfig } from './AurumV2core'
import { stringify } from '../utils/stringify'

export function DepositToPool() {
//     const { write, data, error, isLoading, isError } = useContractWrite({
//         ...aurumV2ContractConfig,
//         functionName: 'depositToPool',
//       })
//     const {
//         data: receipt,
//         isLoading: isPending,
//         isSuccess,
//       } = useWaitForTransaction({ hash: data?.hash })
// }
}

export function WithdrawFromPool() {
    const { write, data, error, isLoading, isError } = useContractWrite({
        ...aurumV2ContractConfig,
        functionName: 'withdrawFromPool',
      })
    const {
        data: receipt,
        isLoading: isPending,
        isSuccess,
      } = useWaitForTransaction({ hash: data?.hash });
      return ({ write, data: receipt, error, isLoading, isError, isSuccess})
}

export function Deposits(address: Address, depositId: bigint) {
    const { data, error, isLoading, isSuccess } = useContractRead({
        ...aurumV2ContractConfig,
        functionName: 'deposits',
        args: [address, depositId],
        enabled: Boolean(address),
      })
      return({data, error, isLoading, isSuccess})
}

export function DepositId(address: Address) {
    const { data, error, isLoading, isSuccess } = useContractRead({
        ...aurumV2ContractConfig,
        functionName: 'userDepositNum',
        args: [address],
      })
      return({data, error, isLoading, isSuccess});
}