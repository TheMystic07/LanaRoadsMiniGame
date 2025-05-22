import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FarcasterSolanaProvider } from '@farcaster/mini-app-solana';
import { useWallet } from '@solana/wallet-adapter-react';


createRoot(document.getElementById('root')).render(
  
    <FarcasterSolanaProvider endpoint={"https://mainnet.helius-rpc.com/?api-key=1822222b-561f-46e3-8dba-77266dbe1814"} >
      <App />
    </FarcasterSolanaProvider>
  
)
