// import { Network, Alchemy, Wallet } from "alchemy-sdk";
// import { ethers } from "ethers";
// const oracleABI = require('./AurumOracle.json');
// const dotenv = require("dotenv");

// const settings = {
//   apiKey: "xrDhKZOeAYcWze6fCwG43x-qp1gPlWBv",
//   network: Network.ETH_SEPOLIA,
// };

// const alchemy = new Alchemy(settings);

// async function getNFTMetadata(nftContractAddress, tokenId) {
//   const response = await alchemy.nft.getNftMetadata(
//     nftContractAddress,
//     tokenId
//   );  
//   return response;
// }

// async function fetchNFTFloorPrice(nftContractAddress) {
//   const response = await alchemy.nft.getFloorPrice(
//     nftContractAddress
//   );

//   const openSeaFloorPrice = response.openSea.floorPrice;
//   const looksRareFloorPrice = response.looksRare.floorPrice;
//   const averagePrice = (openSeaFloorPrice + looksRareFloorPrice) / 2;

//   return averagePrice;
// }

// async function setPriceInAurumOracle(nftContractAddress) {
//   const price = await fetchNFTFloorPrice(
//     nftContractAddress
//     );
//   const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/G7GJP6uisv80k4LTBdYIn2Vi0cbJq-zt');
//   const signer = await new ethers.Wallet(process.env.PRIVATE_KEY, provider);
//   const { chainId } = await provider.getNetwork();
//   const oracle = new ethers.Contract(
//     '0x8A4AA4679EB53507023F74897aE3A8570fa224ca',
//     oracleABI,
//     signer
//   );
    
//   // Create the data packet
//   const dataPacket = {
//     request: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("IntegerRequest")),
//     deadline: Math.floor(Date.now() / 1000) + 60000,
//     payload: ethers.utils.defaultAbiCoder.encode(["uint256"], [price]),
//     tokenContract: nftContractAddress,
//   };

//   // Generate the signature
//   const domain = {
//     name: "AurumOracle",
//     version: "1",
//     chainId: chainId,
//     verifyingContract: oracle.address,
//   };

//   const types = {
//     VerifyPacket: [
//       { name: "request", type: "bytes32" },
//       { name: "deadline", type: "uint256" },
//       { name: "payload", type: "bytes" },
//       { name: "tokenContract", type: "address" },
//     ],
//   };

//   const signature = await signer._signTypedData(domain, types, dataPacket);

//   const data = {
//     request: dataPacket.request,
//     deadline: dataPacket.deadline,
//     payload: dataPacket.payload,
//   };

//   // Call the verifyAndSetValue function
//   const tx = await oracle.verifyAndSetValue(
//     dataPacket.request,
//     data,
//     dataPacket.tokenContract,
//     signature
//   );
//   const receipt = await tx.wait();

//   if (receipt.status === 1) {
//     return true;
//   }
//   return false;
// }

// const getmetadata = async(nftContractAddress, tokenId) => {
//   try {
//   return await getNFTMetadata(nftContractAddress, tokenId);
//   } catch (e) {
//     console.error(e);
//   }
// }

// const getCollateralValue = async(contract, nftContractAddress, tokenId) => {
//   const isValueSet = await setPriceInAurumOracle(nftContractAddress);
//   if (!isValueSet) {
//     console.error('Value not set');
//   }
//   const tx = await contract.getCollateralValue(nftContractAddress, tokenId); 
//   await tx.wait();
// }

// export {
//   getmetadata,
//   getCollateralValue
// };
