export const aurumV2ContractConfig = {
    address: '0x5e644C066f5695A55D48AA93FFa64dcDc056c23d', // contract address
    abi: [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "borrowInterestRate_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lendingInterestRate_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxLoanToValue_",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "borrowingPower_",
            "type": "uint256"
          }
        ],
        "name": "AmountExceedsBorrowingPower",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "depositId_",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "sender_",
            "type": "address"
          }
        ],
        "name": "AmountIsAlreadyPaid",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "AzukiNFTDoesNotExist",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "BaycNFTDoesNotExist",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "borrower_",
            "type": "address"
          }
        ],
        "name": "BorrowerDoNotHaveNFT",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "BorrowerHasNoMoreCollateralSlots",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "BorrowerHasNoNFTInTokenContract",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "borrower_",
            "type": "address"
          }
        ],
        "name": "BorrowerIsNotOwnerOfNFT",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ClonexNFTDoesNotExist",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "CoolcatsNFTDoesNotExist",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "CryptodazNFTDoesNotExist",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "CryptopanksNFTDoesNotExist",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "loanId_",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "sender_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "duration_",
            "type": "uint256"
          }
        ],
        "name": "DebtNotPaidInTime",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxDepositAmount_",
            "type": "uint256"
          }
        ],
        "name": "DepositionLimitReached",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "DoodlesNFTDoesNotExist",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "FunctionSignatureNotFound",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amountToRepay_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "transferredAmount_",
            "type": "uint256"
          }
        ],
        "name": "IncorrectValueTransferred",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "loanId_",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "sender_",
            "type": "address"
          }
        ],
        "name": "LoanIsAlreadyPaid",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "MaycNFTDoesNotExist",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId_",
            "type": "uint256"
          }
        ],
        "name": "NFTNotUsedAsCollateral",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "borrowerBalance_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "userCollateralSlots_",
            "type": "uint256"
          }
        ],
        "name": "NoMoreCollateralSlots",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NullAddressIsNotAllowedInLowLevelCall",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "borrower_",
            "type": "address"
          }
        ],
        "name": "OnlyBorrowerCanWithdrawNFT",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "loanId_",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "sender_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "borrower_",
            "type": "address"
          }
        ],
        "name": "OnlyOwnerCanRepayTheLoan",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "TransferFailed",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId_",
            "type": "bytes4"
          }
        ],
        "name": "UnsupportedTokenType",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount_",
            "type": "uint256"
          }
        ],
        "name": "ValueTransferFailed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "WorldOfWomanNFTDoesNotExist",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "value_",
            "type": "uint256"
          }
        ],
        "name": "ZeroValueError",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          }
        ],
        "name": "Borrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "depoId",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "lender",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Deposition",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "interest",
            "type": "uint256"
          }
        ],
        "name": "Repay",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "depoId",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "lender",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Withdrawal",
        "type": "event"
      },
      {
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount_",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "tokenContract_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duration_",
            "type": "uint256"
          }
        ],
        "name": "borrow",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "borrowInterestRate",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "depositToPool",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "deposits",
        "outputs": [
          {
            "internalType": "address",
            "name": "lender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastUpdateTimestamp",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tokenContract_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId_",
            "type": "uint256"
          }
        ],
        "name": "getCollateralValue",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getEthToUsdPrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_tokenContract",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getNFTPrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getUtilization",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "lendingInterestRate",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "loans",
        "outputs": [
          {
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "tokenContract",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "collateralValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastUpdateTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isActive",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "maxLoanToValue",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "onERC721Received",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "loanId_",
            "type": "uint256"
          }
        ],
        "name": "repay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "borrowInterestRate_",
            "type": "uint256"
          }
        ],
        "name": "setBorrowInterestRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "maxLoanToValue_",
            "type": "uint256"
          }
        ],
        "name": "setLoanToValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalBorrowed",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalDepositedNFTs",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "userCollateralBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "userColleteralNum",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "userDepositNum",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "depositId_",
            "type": "uint256"
          }
        ],
        "name": "withdrawFromPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "borrowerAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_loanId",
            "type": "uint256"
          }
        ],
        "name": "withdrawLiquidatedNFT",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ],
} as const