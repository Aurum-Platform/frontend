import { useContractRead } from 'wagmi'
import { aurumV2ContractConfig } from './AurumV2core'

export function TotalSupply() {
  const { data, isRefetching, refetch } = useContractRead({
    ...aurumV2ContractConfig,
    functionName: 'totalSupply',
  })

  return ({ data, isRefetching, refetch})
}

export function BorrowInterestRate() {
  const { data, isRefetching, refetch } = useContractRead({
    ...aurumV2ContractConfig,
    functionName: 'borrowInterestRate',
  })

  return ({ data, isRefetching, refetch})
}

export function MaxLoanToValue() {
  const { data, isRefetching, refetch } = useContractRead({
    ...aurumV2ContractConfig,
    functionName: 'maxLoanToValue',
  })

  return ({ data, isRefetching, refetch})
}

export function LendingInterestRate() {
  const { data, isRefetching, refetch } = useContractRead({
    ...aurumV2ContractConfig,
    functionName: 'lendingInterestRate',
  })

  return ({ data, isRefetching, refetch})
}

export function TotalBorrow() {
  const { data, isRefetching, refetch } = useContractRead({
    ...aurumV2ContractConfig,
    functionName: 'totalBorrowed',
  })

  return ({ data, isRefetching, refetch})
}

export function TotalDepositedNFTs() {
  const { data, isRefetching, refetch } = useContractRead({
    ...aurumV2ContractConfig,
    functionName: 'totalDepositedNFTs',
  })

  return ({ data, isRefetching, refetch})
}

export function Utilization() {
  const { data, isRefetching, refetch } = useContractRead({
    ...aurumV2ContractConfig,
    functionName: 'getUtilization',
  })

  return ({ data, isRefetching, refetch})
}

export function EthToUsdPrice() {
  const { data, isRefetching, refetch } = useContractRead({
    ...aurumV2ContractConfig,
    functionName: 'getEthToUsdPrice',
  })

  return ({ data, isRefetching, refetch})
}