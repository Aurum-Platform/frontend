import '../static/css/portfolio.css';
import { Repay } from '../backend/Loan';
import { ethers } from 'ethers';

export function PortfolioBorrow(loan: any) {
  const { write, data: receipt, error, isLoading, isError, isSuccess } = Repay();

  function userRepay() {
    const amount = loan.Amount.add(loan.Interest); // Use the add() method to perform BigNumber addition
    const amountInWei = amount.mul(ethers.utils.parseEther('1')); // Convert to Wei
    const amountBigInt = amountInWei.toBigInt(); // Convert to JavaScript bigint

    write({
      args: [loan.id],
      value: amountBigInt,
    });
  }

  return (
    <div className='borrow_history_main_card'>
      <div className="left_borrow_card_history">
        <img src={loan.ImageURL} alt="" />
      </div>
      <div className="right_borrow_card_history">
        <div className="right_borrow_card_history1">
          <div className="borrow_card_name">{loan.NFTName} <small>#{loan.Id}</small></div>
          <div className="date_borrow_card">{loan.Time}</div>
        </div>
        <div className="right_borrow_card_history2">
          <div>Token Contract <br /><div className='borrow_small'>{loan.TokenContract}</div></div>
          <div>TokenID<br /><div className='borrow_small'>{loan.TokenId}</div></div>
        </div>
        <div className="right_borrow_card_history3">
          <div>Value<br /><span>{loan.CollateralValue} ETH <small>({(loan.CollateralValue * loan.EthToUsd).toFixed(2)} USD)</small></span></div>
          <div>Description<br /><span>{loan.NFTDescription}</span></div>
        </div>
        {isLoading ? (
          <button className='portfolio_borrow_bttn'>Loading...</button>
        ) : (
          <button className='portfolio_borrow_bttn' onClick={() => { userRepay() }}>Repay</button>
        )}
      </div>
    </div>
  );
}
