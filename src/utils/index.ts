// Format SOL amounts (lamports to SOL)
export const formatSol = (lamports: number): string => {
  return `${(lamports / 1_000_000_000).toFixed(3)} SOL`;
};

// Shorten wallet addresses
export const shortenAddress = (address: string): string => {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};
