/**
 * Formats a SOL amount for display
 * @param amount - Amount in lamports (1 SOL = 1,000,000,000 lamports)
 * @returns Formatted string (e.g., "1.23 SOL")
 */
export const formatSol = (lamports: number): string => {
  const sol = lamports / 1_000_000_000; // Convert lamports to SOL
  return `${sol.toFixed(3)} SOL`;
};

/**
 * Other utility functions can go here
 */
export const shortenAddress = (address: string): string => {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};
