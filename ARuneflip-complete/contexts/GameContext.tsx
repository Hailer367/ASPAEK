'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GameContextType {
  score: number;
  level: number;
  gameState: 'idle' | 'playing' | 'paused' | 'gameOver';
  startGame: () => void;
  pauseGame: () => void;
  endGame: () => void;
  updateScore: (points: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'paused' | 'gameOver'>('idle');

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setLevel(1);
  };

  const pauseGame = () => {
    setGameState('paused');
  };

  const endGame = () => {
    setGameState('gameOver');
  };

  const updateScore = (points: number) => {
    setScore(prev => prev + points);
  };

  return (
    <GameContext.Provider value={{ 
      score, 
      level, 
      gameState, 
      startGame, 
      pauseGame, 
      endGame, 
      updateScore 
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

