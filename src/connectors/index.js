import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import {
  configureChains,
  createClient
} from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from "wagmi/providers/public";

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

const binanceChain = {
    id: 56,
    name: 'BNB Smart Chain',
    network: 'bsc',
    rpcUrls: {
      public: 'https://bsc-dataseed1.binance.org',
      default: 'https://bsc-dataseed1.binance.org',
    },
    blockExplorers: {
      default: bscExplorer,
      etherscan: bscExplorer,
    },
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'BNB',
      decimals: 18,
    },
    multicall: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 15921452,
    },
};

export const { chains, provider } = configureChains(
  [binanceChain],
  [publicProvider()],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== binanceChain.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
  ]
);

export const { connectors } = getDefaultWallets({
  appName: "Rainbowkit-Wagmi-Demo-React",
  chains,
});

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});
