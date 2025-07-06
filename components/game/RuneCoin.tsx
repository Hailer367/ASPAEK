// components/game/RuneCoin.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '@/contexts/SoundContext';

interface RuneCoinProps {
  isFlipping: boolean;
  result?: 'heads' | 'tails';
  onFlipComplete?: () => void;
  size?: 'small' | 'medium' | 'large';
  glowing?: boolean;
}

export const RuneCoin: React.FC<RuneCoinProps> = ({
  isFlipping,
  result,
  onFlipComplete,
  size = 'large',
  glowing = true,
}) => {
  const { playSound } = useSound();
  const [showResult, setShowResult] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32 md:w-40 md:h-40',
  };

  const runeSymbols = {
    heads: '᚛',
    tails: '᚜',
  };

  useEffect(() => {
    if (isFlipping) {
      setShowResult(false);
      playSound('coinFlip');

      // Create particle effect
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }));
      setParticles(newParticles);

      // Clear particles after animation
      setTimeout(() => setParticles([]), 2000);
    }
  }, [isFlipping, playSound]);

  useEffect(() => {
    if (result && !isFlipping) {
      setTimeout(() => {
        setShowResult(true);
        playSound('mysticalChime');
        onFlipComplete?.();
      }, 500);
    }
  }, [result, isFlipping, playSound, onFlipComplete]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Particle Effects */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: 0,
              y: 0,
            }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
              x: (particle.x - 50) * 2,
              y: (particle.y - 50) * 2,
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 2,
              ease: "easeOut",
            }}
            className="absolute w-2 h-2 bg-primary rounded-full pointer-events-none"
            style={{
              boxShadow: '0 0 10px rgba(63, 224, 208, 0.8)',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main Coin */}
      <motion.div
        className={`
          ${sizeClasses[size]} 
          relative rounded-full 
          bg-gradient-to-br from-gold via-yellow-400 to-gold
          border-4 border-primary/50
          flex items-center justify-center
          cursor-pointer
          ${glowing ? 'animate-pulse-glow' : ''}
        `}
        animate={isFlipping ? {
          rotateY: [0, 180, 360, 540, 720],
          rotateX: [0, 180, 360, 540, 720],
          scale: [1, 1.1, 1, 1.1, 1],
        } : {}}
        transition={isFlipping ? {
          duration: 1.5,
          ease: "easeInOut",
        } : {}}
        style={{
          boxShadow: glowing 
            ? '0 0 30px rgba(255, 214, 107, 0.6), inset 0 0 20px rgba(255, 214, 107, 0.3)'
            : '0 0 15px rgba(255, 214, 107, 0.3)',
        }}
      >
        {/* Rune Pattern Background */}
        <div className="absolute inset-0 rounded-full opacity-20 bg-rune-pattern"></div>

        {/* Inner Glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-transparent via-primary/10 to-transparent"></div>

        {/* Rune Symbol */}
        <AnimatePresence mode="wait">
          {!isFlipping && (
            <motion.div
              key={result || 'default'}
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {showResult && result ? (
                <div className="flex flex-col items-center">
                  <span 
                    className={`
                      font-rune font-bold text-background animate-rune-glow
                      ${size === 'small' ? 'text-2xl' : size === 'medium' ? 'text-4xl' : 'text-6xl'}
                    `}
                  >
                    {runeSymbols[result]}
                  </span>
                  <span 
                    className={`
                      font-modern font-semibold text-background/80 mt-1
                      ${size === 'small' ? 'text-xs' : size === 'medium' ? 'text-sm' : 'text-base'}
                    `}
                  >
                    {result.toUpperCase()}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <span 
                    className={`
                      font-rune font-bold text-background
                      ${size === 'small' ? 'text-xl' : size === 'medium' ? 'text-3xl' : 'text-5xl'}
                    `}
                  >
                    ᚱ
                  </span>
                  <span 
                    className={`
                      font-modern font-medium text-background/60 mt-1
                      ${size === 'small' ? 'text-xs' : size === 'medium' ? 'text-sm' : 'text-base'}
                    `}
                  >
                    FLIP
                  </span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spinning indicator during flip */}
        {isFlipping && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-4 border-primary"
          />
        )}
      </motion.div>

      {/* Glow Ring */}
      {glowing && (
        <motion.div
          className={`
            absolute ${sizeClasses[size]} 
            rounded-full border-2 border-primary/30
          `}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
};
