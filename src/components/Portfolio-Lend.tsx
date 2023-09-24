
import { WithdrawFromPool } from '../backend/Deposit'


export function PortfolioLend(deposit: any) {
  const { write, data: receipt, error, isLoading, isError, isSuccess } = WithdrawFromPool();

  function userWithdrawFromPool() {
    write({
      args: [deposit.id],
    });
  }

  return (
    <div className='lend_history_card'>
      <div className="lend_history_name">Deposit #{deposit.Id}</div>
      <div className="lend_history_content1">
        <div>Amount <br /><span>{deposit.Amount} ETH <small>({(deposit.Amount * deposit.EthToUsd).toFixed(2)} USD)</small></span></div>
        <div>Interest <br /><span>{deposit.Interest} ETH <small>({(deposit.Interest * deposit.EthToUsd).toFixed(2)} USD)</small></span></div>
      </div>
      <div className="lend_history_content2">
        Date <br /><span>{deposit.Date}</span>
      </div>
      {isLoading ? (
        <button className='portfolio_lend_bttn'>Loading...</button>
      ) : (
        <button className='portfolio_lend_bttn' onClick={() => { userWithdrawFromPool() }}>Withdraw</button>
      )}
    </div>
  );
} 