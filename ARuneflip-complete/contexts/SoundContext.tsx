'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SoundContextType {
  isMuted: boolean;
  volume: number;
  toggleMute: () => void;
  setVolume: (volume: number) => void;
  playSound: (soundName: string) => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolumeState] = useState(0.5);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(Math.max(0, Math.min(1, newVolume)));
  };

  const playSound = (soundName: string) => {
    if (!isMuted) {
      // Add your sound playing logic here
      console.log(`Playing sound: ${soundName} at volume ${volume}`);
    }
  };

  return (
    <SoundContext.Provider value={{ 
      isMuted, 
      volume, 
      toggleMute, 
      setVolume, 
      playSound 
    }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
