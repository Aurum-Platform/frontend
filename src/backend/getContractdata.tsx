// import { ethers } from "ethers";

// const bigNumToNum = (bigNumberString) => {
//     const bigNumber = ethers.BigNumber.from(bigNumberString);
//     const integer = bigNumber.toNumber();
//     return integer;
// }

// const getborrowInterestRate = async (contract) => {
//   try {
//     const Borrow_interestRate = await contract.borrowInterestRate();
//     const number = bigNumToNum(Borrow_interestRate);
//     return number;
//   } catch (error) {
//     console.error("Error in borrowInterestRate(): ", error);
//   }
// }

// const getmaxLoanToValue = async (contract) => {
//   try {
//     const MaxLtV = await contract.maxLoanToValue();
//     const integer = parseInt(MaxLtV._hex);
//     return integer;
//   } catch (error) {
//     console.error("Error in getmaxLoanToValue(): ", error);
//   }
// }

// const getlendingInterestRate = async (contract) => {
//   try {
//     const lendingInterestRate = await contract.lendingInterestRate();
//     const integer = bigNumToNum(lendingInterestRate);
//     return integer;
//   } catch (error) {
//     console.error("Error in getlendingInterestRate(): ", error);
//   }
// }

// const getOwner = async (contract) => {
//   try {
//     const owner = await contract.owner();
//     return owner;
//   } catch (error) {
//     console.error("Error in getOwner(): ", error);
//   }
// }

// const getTotalSupply = async (contract) => {
//   try {
//     const totalsupply = await contract.totalSupply();
//     const TotalSupply = parseInt(totalsupply._hex);
//     return TotalSupply
//   } catch (error) {
//     console.log(error);
//   }
// }

// const getTotalBorrow = async (contract) => {
//   try {
//     const totalborrow = await contract.totalBorrowed();
//     const TotalBorrow = parseInt(totalborrow._hex);
//     return TotalBorrow
//   } catch (error) {
//     console.log(error);
//   }
// }

// const getTotalDepositedNFTs = async (contract) => {
//   try {
//     const totaldepositednfts = await contract.totalDepositedNFTs()
//     const TotalDepositedNFTs = bigNumToNum(totaldepositednfts);
//     return TotalDepositedNFTs
//   } catch (error) {
//     console.log(error);
//   }
// }

// const getUtilization = async (contract) => {
//   const utilization = await contract.getUtilization();
//   const Utilization = bigNumToNum(utilization);
//   return Utilization 
// }

// const getEthToUsdPrice = async (contract) => {
//   const ethtousd = await contract.getEthToUsdPrice();
//   const ETHToUSD = bigNumToNum(ethtousd);
//   return ETHToUSD
// }

// export {
//   getborrowInterestRate, 
//   getmaxLoanToValue, 
//   getlendingInterestRate, 
//   getOwner,   
//   getTotalSupply,
//   getTotalBorrow,
//   getTotalDepositedNFTs,
//   bigNumToNum,
//   getUtilization,
//   getEthToUsdPrice
// };


