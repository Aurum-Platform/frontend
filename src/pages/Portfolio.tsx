import React, { useEffect } from 'react';
import { useNetwork } from 'wagmi';

import user_img from '../static/img/user.png';
import demo_img from '../static/img/galaxy.png';
import no_history from '../static/img/blank_history.jpg';
import '../App.css';
import '../static/css/portfolio.css';

import { PortfolioBorrow } from '../components';
import { PortfolioLend } from '../components';
import { Balance } from '../backend/Balance';
import { LoanId } from '../backend/Loan';
import { EthToUsdPrice } from '../backend/ReadContract';
import { DepositId, Deposits } from '../backend/Deposit';
import { getTimeFromSeconds } from '../utils/getTimeFromSeconds';

export function Portfolio() {
  const { chain } = useNetwork();
  const { data, address: userAddress } = Balance();
  console.log(chain);

  const [deposits, setDeposits] = React.useState([
    {
      Id: 0n,
      lender: `0xNone`,
      Amount: 0n,
      Interest: 0n,
      Date: '--/--/--',
      EthToUsd: 0,
    },
  ]);

  const [loans, setLoans] = React.useState([
    {
      Id: NaN,
      Borrower: '0xNone',
      TokenContract: '0xNone',
      TokenId: NaN,
      CollateralValue: 0,
      Interest: NaN,
      Time: '--/--/--',
      Active: false,
      ImageURL: demo_img,
      NFTName: 'NFT Name',
      NFTDescription: '-',
      EthToUsd: 0,
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      if (userAddress) {
        const { data: depositId } = DepositId(userAddress);
        const length = parseInt(depositId?.toLocaleString() ?? '0');
        const newDeposits = [];
        const { data: ethTousd } = EthToUsdPrice();

        for (let i = 0; i < Number(length); i++) {
          const { data: userDeposits } = (await Deposits(
            userAddress,
            BigInt(i)
          )) ?? [null, 0n, 0n];
          if (userDeposits) {
            const date = getTimeFromSeconds(
              userDeposits[1].toLocaleString() ?? '0'
            );
            const ethToUsd = ethTousd ?? 1n;
            const ethToUsdNumber = Number(ethToUsd) / 1e8;
            newDeposits.push({
              Id: i,
              lender: userDeposits[0],
              Amount: userDeposits[1], // Assuming deposit.Amount is userDeposits[0]
              Interest: userDeposits[2], // Assuming deposit.Interest is userDeposits[2]
              Date: date,
              EthToUsd: ethToUsdNumber,
            });
          }
        }
        setDeposits(newDeposits); // Update the state after the loop
      }
    }
    fetchData();
  }, [userAddress]);

  useEffect(() => {
    async function fetchData() {
      if (userAddress) {
        const { data: loanId } = LoanId(userAddress);
        const length = parseInt(loanId?.toLocaleString() ?? '0');
        const newLoans = [];
        const { data: ethTousd } = EthToUsdPrice();

        for (let i = 0; i < Number(length); i++) {
          const { data: loan } = (await Loans(userAddress, BigInt(i))) ?? [
            null,
            0n,
            0n,
          ];
          if (loan) {
            const date = getTimeFromSeconds(loan[5].toLocaleString() ?? '0');
            const ethToUsd = ethTousd ?? 1n;
            const ethToUsdNumber = Number(ethToUsd) / 1e8;
            newLoans.push({
              Id: i,
              Borrower: loan[0],
              TokenContract: loan[1],
              TokenId: loan[2],
              CollateralValue: loan[3],
              Interest: loan[4],
              Time: date,
              Active: loan[6],
              ImageURL: demo_img,
              NFTName: 'NFT Name',
              NFTDescription: '-',
              EthToUsd: ethToUsdNumber,
            });
          }
        }
        setLoans(newLoans); // Update the state after the loop
      }
    }
    fetchData();
  }, [userAddress]);

  return (
    <div className="portfolio_main">
      <div className="user_portfolio_section">
        <div className="user_section_head">User Portfolio</div>
        <div className="user_content">
          <div className="left_content">
            <img src={user_img} alt="" />
          </div>
          <div className="right_content">
            <div className="right_content1">
              <div>
                ChainID <br />
                <span>
                  {chain?.name} ({chain?.id})
                </span>
              </div>
              <div>
                Total Amount <br />
                <span>
                  {data?.formatted.slice(0, 6)} {chain?.name.substring(0, 2)}ETH
                </span>
              </div>
            </div>
            <div className="right_content2">
              Address <br />
              <span>{userAddress?.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className="lend_history">
        <div className="lend_history_head">Lend Transactions History</div>
        <div className="lend_history_card_holder">
          {deposits?.map((deposit, key) =>
            deposit.Amount === 0n ? (
              <div className="no_history_div">
                <img src={no_history} alt="" />
                <div>No Lend Transactions to show</div>
              </div>
            ) : (
              <PortfolioLend key={key} deposit={deposit} />
            )
          )}
        </div>
      </div>
      <br /> <br /> <br />
      <div className="borrow_history">
        <div className="borrow_history_head">Borrow Transactions History</div>
        <div className="borrow_history_card_holder">
          {loans?.map((loan, key) =>
            loan.Active !== true && loan.CollateralValue !== 0 ? (
              <div style={{ color: 'white', fontSize: '35px' }}></div>
            ) : loan.CollateralValue === 0 ? (
              <>
                <br />
                <div className="no_history_div">
                  <img src={no_history} alt="" />
                  <div>No Borrow Transactions to show</div>
                </div>
              </>
            ) : (
              <PortfolioBorrow key={key} loan={loan} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
