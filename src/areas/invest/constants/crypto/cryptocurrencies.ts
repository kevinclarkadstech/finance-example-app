export const cryptocurrencies = {
  BTC: {
    name: "Bitcoin",
    symbol: "BTC",
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    color: "#f7931a",
    marketCapRank: 1,
  },
  ETH: {
    name: "Ethereum",
    symbol: "ETH",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    color: "#3c3c3d",
    marketCapRank: 2,
  },
} as const;

export type Cryptocurrency = keyof typeof cryptocurrencies;
