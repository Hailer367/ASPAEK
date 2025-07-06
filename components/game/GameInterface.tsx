// components/game/GameInterface.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWallet } from '@/contexts/WalletContext';
import { useGame } from '@/contexts/GameContext';
import { useSound } from '@/contexts/SoundContext';
import { RuneCoin } from './RuneCoin';
import { BetControls } from './BetControls';
import { GameHistory } from './GameHistory';
import { ActiveMatches } from './ActiveMatches';
import { UserStats } from './UserStats';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { formatSol } from '../../utils';
import toast from 'react-hot-toast';

export const GameInterface: React.FC = () => {
  const { connected } = useWallet();
  const { currentMatch, createMatch, joinMatch, isLoading } = useGame();
  const { playSound } = useSound();

  const [selectedSide, setSelectedSide] = useState<'heads' | 'tails'>('heads');
  const [betAmount, setBetAmount] = useState(0.01);
  const [isFlipping, setIsFlipping] = useState(false);
  const [gameResult, setGameResult] = useState<'heads' | 'tails' | undefined>();
  const [showResult, setShowResult] = useState(false);

  // Handle game state changes
  useEffect(() => {
    if (currentMatch?.status === 'active' && currentMatch.result) {
      // Game completed, show result
      setIsFlipping(true);

      setTimeout(() => {
        setGameResult(currentMatch.result);
        setIsFlipping(false);
        setShowResult(true);

        // Play appropriate sound
        const isWinner = currentMatch.winner === connected;
        playSound(isWinner ? 'win' : 'lose');

        // Show toast notification
        if (isWinner) {
          toast.success(`You won ${formatSol(currentMatch.stake * 2)} SOL!`);
        } else {
          toast.error(`You lost ${formatSol(currentMatch.stake)} SOL`);
        }
      }, 1500);
    }
  }, [currentMatch, connected, playSound]);

  const handleCreateMatch = async () => {
    if (!connected) {
      toast.error('Please connect your wallet');
      return;
    }

    try {
      await createMatch(betAmount, selectedSide);
      playSound('click');
    } catch (error) {
      console.error('Error creating match:', error);
    }
  };

  const handleJoinMatch = async (matchId: string) => {
    if (!connected) {
      toast.error('Please connect your wallet');
      return;
    }

    try {
      await joinMatch(matchId, selectedSide);
      playSound('click');
    } catch (error) {
      console.error('Error joining match:', error);
    }
  };

  const resetGame = () => {
    setGameResult(undefined);
    setShowResult(false);
    setIsFlipping(false);
  };

  if (!connected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <RuneCoin size="large" glowing={true} />
          <h1 className="text-4xl md:text-6xl font-rune font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-8 mb-4">
            RuneFlip
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Connect your wallet to start flipping rune-engraved coins on Solana
          </p>
          <WalletMultiButton className="!bg-gradient-to-r !from-primary !to-secondary !border-0 !rounded-lg !font-medium !text-background hover:!opacity-90 !transition-opacity !px-8 !py-3 !text-lg" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-dark-100 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-rune-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upper Half - Interactive Zone */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Game Area */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-dark-100/50 backdrop-blur-sm rounded-2xl border border-primary/20 p-8 text-center"
            >
              {/* Game Title */}
              <h1 className="text-3xl md:text-4xl font-rune font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8">
                Mystical Coin Flip
              </h1>

              {/* Coin */}
              <div className="mb-8">
                <RuneCoin
                  isFlipping={isFlipping}
                  result={gameResult}
                  onFlipComplete={() => {
                    setTimeout(resetGame, 3000);
                  }}
                  size="large"
                  glowing={!currentMatch}
                />
              </div>

              {/* Game Status */}
              <AnimatePresence mode="wait">
                {currentMatch ? (
                  <motion.div
                    key="match-status"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6"
                  >
                    {currentMatch.status === 'waiting' && (
                      <div className="text-center">
                        <p className="text-gold text-lg font-semibold mb-2">
                          Waiting for opponent...
                        </p>
                        <p className="text-gray-400">
                          Stake: {formatSol(currentMatch.stake)} SOL • Side: {currentMatch.sideA}
                        </p>
                      </div>
                    )}
                    {currentMatch.status === 'active' && !showResult && (
                      <div className="text-center">
                        <p className="text-primary text-lg font-semibold mb-2">
                          Game in progress...
                        </p>
                        <p className="text-gray-400">
                          Flipping the mystical coin...
                        </p>
                      </div>
                    )}
                    {showResult && (
                      <div className="text-center">
                        <p className="text-2xl font-bold mb-2">
                          {currentMatch.winner === connected ? (
                            <span className="text-green-400">🎉 You Won!</span>
                          ) : (
                            <span className="text-red-400">💔 You Lost</span>
                          )}
                        </p>
                        <p className="text-gray-400">
                          Result: {gameResult} • {currentMatch.winner === connected ? 'Won' : 'Lost'} {formatSol(currentMatch.stake)} SOL
                        </p>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="ready-to-play"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6"
                  >
                    <p className="text-gray-400 text-lg">
                      Choose your side and stake to begin
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Side Selection */}
              {!currentMatch && (
                <div className="flex justify-center space-x-4 mb-6">
                  <button
                    onClick={() => {
                      setSelectedSide('heads');
                      playSound('click');
                    }}
                    className={`
                      px-6 py-3 rounded-lg font-semibold transition-all duration-200
                      ${selectedSide === 'heads'
                        ? 'bg-gradient-to-r from-primary to-secondary text-background'
                        : 'bg-dark-200 text-gray-300 hover:bg-dark-300'
                      }
                    `}
                  >
                    ᚛ Heads
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSide('tails');
                      playSound('click');
                    }}
                    className={`
                      px-6 py-3 rounded-lg font-semibold transition-all duration-200
                      ${selectedSide === 'tails'
                        ? 'bg-gradient-to-r from-primary to-secondary text-background'
                        : 'bg-dark-200 text-gray-300 hover:bg-dark-300'
                      }
                    `}
                  >
                    ᚜ Tails
                  </button>
                </div>
              )}
            </motion.div>
          </div>

          {/* Side Panel - User Stats */}
          <div className="lg:col-span-1">
            <UserStats />
          </div>
        </div>

        {/* Bet Controls */}
        {!currentMatch && (
          <div className="mb-12">
            <BetControls
              betAmount={betAmount}
              setBetAmount={setBetAmount}
              selectedSide={selectedSide}
              onCreateMatch={handleCreateMatch}
              isLoading={isLoading}
            />
          </div>
        )}

        {/* Lower Half - Scrollable Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Game History */}
          <div>
            <GameHistory />
          </div>

          {/* Active Matches */}
          <div>
            <ActiveMatches onJoinMatch={handleJoinMatch} />
          </div>
        </div>
      </div>
    </div>
  );
};
