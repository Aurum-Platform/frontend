import { Address, BaseError } from 'viem'
import { useContractWrite, useWaitForTransaction, useContractRead } from 'wagmi'

import { aurumV2ContractConfig } from './AurumV2core'
import { stringify } from '../utils/stringify'

export function Borrow() {
    const { write, data, error, isLoading, isError } = useContractWrite({
        ...aurumV2ContractConfig,
        functionName: 'borrow',
      })
    const {
        data: receipt,
        isLoading: isPending,
        isSuccess,
      } = useWaitForTransaction({ hash: data?.hash });
      return ({ write, data: receipt, error, isLoading, isError, isSuccess})
}

export function Repay() {
    const { write, data, error, isLoading, isError } = useContractWrite({
        ...aurumV2ContractConfig,
        functionName: 'repay',
      })
    const {
        data: receipt,
        isLoading: isPending,
        isSuccess,
      } = useWaitForTransaction({ hash: data?.hash });
      return ({ write, data: receipt, error, isLoading, isError, isSuccess})
}

export function Loans(address: any, loanId: any) {
    const { data, error, isLoading, isSuccess } = useContractRead({
        ...aurumV2ContractConfig,
        functionName: 'loans',
        args: [address, loanId],
        enabled: Boolean(address),
      })
      return({data, error, isLoading, isSuccess})
}

export function LoanId(address: Address) {
    const { data, error, isLoading, isSuccess } = useContractRead({
        ...aurumV2ContractConfig,
        functionName: 'userColleteralNum',
        args: [address],
      })
      return({data, error, isLoading, isSuccess})
}