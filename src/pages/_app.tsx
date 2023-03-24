import '@/styles/globals.css'

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, goerli, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


import type { AppProps } from 'next/app'



const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum,goerli],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Taiko NFT bridge',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function App({ Component, pageProps }: AppProps) {


  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
  <Component {...pageProps} />
  </RainbowKitProvider>
  </WagmiConfig>
  )
}
