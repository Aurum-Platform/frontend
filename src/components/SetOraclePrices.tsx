import { Network, Alchemy, Wallet, Nft, GetFloorPriceResponse } from "alchemy-sdk";
import { useContractRead } from 'wagmi';
import ethers from "@typechain/ethers-v5";
import { BigNumber, Signer } from 'ethers';
import { formatEther, parseUnits } from 'ethers/lib/utils';
import { oracleContractConfig } from './AurumOracle';
import { aurumV2ContractConfig } from './AurumV2core';
import { Address } from "viem";

const settings = {
    apiKey: "xrDhKZOeAYcWze6fCwG43x-qp1gPlWBv",
    network: Network.ETH_MAINNET, // Replace with your network.
};

const settingsSepolia = {
    apiKey: "xrDhKZOeAYcWze6fCwG43x-qp1gPlWBv",
    network: Network.ETH_SEPOLIA,
};

const alchemy: Alchemy = new Alchemy(settings);

export const fetchNFTMetaData = async (nftContractAddress: Address, tokenId: bigint): Promise<Nft> => {
    const response: Nft = await alchemy.nft.getNftMetadata(
        nftContractAddress,
        tokenId
    );  
    return response;
}

export async function getCollateralValue(nftContractAddress: Address, tokenId: bigint) {
    const isValueSet = setPriceInOracle(nftContractAddress);
    if (!isValueSet) {
        console.error('Value not set');
    }
    const { data, error, isLoading, isSuccess } = useContractRead({
      ...aurumV2ContractConfig,
      functionName: 'loans',
      args: [nftContractAddress, tokenId],
      enabled: Boolean(nftContractAddress),
    })
  return({data, error, isLoading, isSuccess})
    
}

async function setPriceInOracle(nftContractAddress: Address): Promise<Boolean>{
    const response: GetFloorPriceResponse = await alchemy.nft.getFloorPrice(
        nftContractAddress
    );
    const openSeaFloorPrice = response?.openSea?.floorPrice;
    const looksRareFloorPrice = response.looksRare.floorPrice;
    const averagePrice = (openSeaFloorPrice + looksRareFloorPrice) / 2;
    const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/G7GJP6uisv80k4LTBdYIn2Vi0cbJq-zt');
    const signer = await new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const { chainId } = await provider.getNetwork();
    const oracle: = new ethers.Contract(
      ...oracleContractConfig,
      signer
    );
    // Create the data packet
    const dataPacket = {
      request: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("IntegerRequest")),
      deadline: Math.floor(Date.now() / 1000) + 60000,
      payload: ethers.utils.defaultAbiCoder.encode(["uint256"], [price]),
      tokenContract: nftContractAddress,
    };
  
    // Generate the signature
    const domain = {
      name: "AurumOracle",
      version: "1",
      chainId: chainId,
      verifyingContract: oracle.address,
    };
  
    const types = {
      VerifyPacket: [
        { name: "request", type: "bytes32" },
        { name: "deadline", type: "uint256" },
        { name: "payload", type: "bytes" },
        { name: "tokenContract", type: "address" },
      ],
    };

    const signature = await signer.signTypedData(domain, types, dataPacket);

    const data = {
        request: dataPacket.request,
        deadline: dataPacket.deadline,
        payload: dataPacket.payload,
      };
    
      // Call the verifyAndSetValue function
      const tx = await oracle.verifyAndSetValue(
        dataPacket.request,
        data,
        dataPacket.tokenContract,
        signature
      );
      const receipt = await tx.wait();
    
      if (receipt.status === 1) {
        return true;
      }
      return false;
}