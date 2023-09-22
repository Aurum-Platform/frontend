import { useEffect } from 'react'; // Don't forget to import React from the 'react' package

import { BaseError } from 'viem';
import { useAccount, useConnect, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export function Connect() {
  const { isConnected } = useAccount();
  
  const { connect, connectors, error: connectError, isLoading, pendingConnector } = useConnect({
    connector: new InjectedConnector()
  });

  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  
  const { chains, error: networkError, isLoading: isLoadingNetwork, pendingChainId, switchNetwork } = useSwitchNetwork({
    chainId: 11155111,
  });

  useEffect(() => {
    if (chain?.id !== chains[0]?.id && switchNetwork) {
      switchNetwork(chains[0]?.id);
    }
    else if (networkError && switchNetwork) {
      switchNetwork(chains[0]?.id);
    }
  }, [chain, chains]);
  
  return (
    <div>
      <div>
        {isConnected && !chain?.unsupported ? (
          <button onClick={() => disconnect()}>
            Disconnect
          </button>
        ) : switchNetwork ? (
          <button key={connectors[2].id} onClick={() => switchNetwork(chains[0]?.id)}>
            Connect
            {isLoading && connectors[2].id === pendingConnector?.id && ' (connecting)'}
          </button>          
        ) :  (
          <button key={connectors[2].id} onClick={() => connect({ connector: connectors[2] })}>
            Connect
            {isLoading && connectors[2].id === pendingConnector?.id && ' (connecting)'}
          </button>
        )}
      </div>
      {connectError && <div>{(connectError as BaseError).shortMessage}</div>}
      {networkError && <div>{(networkError as BaseError).shortMessage}</div>}
    </div>
  );
}
