import { useContractReads } from 'wagmi'
import { aurumV2ContractConfig } from './AurumV2core'

export function ReadContracts() {
  const { data, isSuccess, isLoading } = useContractReads({
    contracts: [
      {
        ...aurumV2ContractConfig,
        functionName: 'totalSupply',
      },
      {
        ...aurumV2ContractConfig,
        functionName: 'borrowInterestRate',
      },
      {
        ...aurumV2ContractConfig,
        functionName: 'maxLoanToValue',
      },
      {
        ...aurumV2ContractConfig,
        functionName: 'lendingInterestRate',
      },
      {
        ...aurumV2ContractConfig,
        functionName: 'totalBorrowed',
      },
      {
        ...aurumV2ContractConfig,
        functionName: 'getUtilization',
      },
      {
        ...aurumV2ContractConfig,
        functionName: 'getEthToUsdPrice',
      },
    ],
  })

  return ({ data, isSuccess, isLoading })
}
