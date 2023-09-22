import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css';
import { WagmiConfig } from 'wagmi'

import { App } from './App'
import { config } from './wagmi'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </React.StrictMode>,
)
