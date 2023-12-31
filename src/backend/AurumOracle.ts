// Not to be used
export const oracleContractConfig = {
  address: '0xF3B3AEC4cB38CD46f086f88827EF5ab46aA84e17',
  abi: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'Trustus__InvalidPacket',
      type: 'error',
    },
    {
      inputs: [],
      name: 'DOMAIN_SEPARATOR',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenContract',
          type: 'address',
        },
      ],
      name: 'getNFTFloorPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'signer',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'isTrusted_',
          type: 'bool',
        },
      ],
      name: 'setIsTrusted',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'tokenPacket',
      outputs: [
        {
          internalType: 'bytes32',
          name: 'request',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'payload',
          type: 'bytes',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'request',
          type: 'bytes32',
        },
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'request',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256',
            },
            {
              internalType: 'bytes',
              name: 'payload',
              type: 'bytes',
            },
          ],
          internalType: 'struct AurumOracle.PricePacket',
          name: 'packet',
          type: 'tuple',
        },
        {
          internalType: 'address',
          name: 'tokenContract',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'signature',
          type: 'bytes',
        },
      ],
      name: 'verifyAndSetValue',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
} as const;
