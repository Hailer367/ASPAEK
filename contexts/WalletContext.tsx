'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
  connected: boolean;
  address: string | null;
  balance: number;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState(0);

  const connect = async () => {
    try {
      // Add your wallet connection logic here
      setConnected(true);
      setAddress('0x1234567890abcdef'); // placeholder
      setBalance(100); // placeholder
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnect = () => {
    setConnected(false);
    setAddress(null);
    setBalance(0);
  };

  return (
    <WalletContext.Provider value={{ connected, address, balance, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

