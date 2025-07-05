// components/layout/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@/contexts/WalletContext';
import { useSound } from '@/contexts/SoundContext';
import { Bars3Icon, XMarkIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const { connected } = useWallet();
  const { isMuted, toggleMute } = useSound();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-lg font-rune">R</span>
            </div>
            <span className="text-xl font-bold font-rune bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              RuneFlip
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-primary transition-colors duration-200"
            >
              Game
            </Link>
            <Link 
              href="/leaderboard" 
              className="text-gray-300 hover:text-primary transition-colors duration-200"
            >
              Leaderboard
            </Link>
            <Link 
              href="/history" 
              className="text-gray-300 hover:text-primary transition-colors duration-200"
            >
              History
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-primary transition-colors duration-200"
            >
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Sound Toggle */}
            <button
              onClick={toggleMute}
              className="p-2 text-gray-400 hover:text-primary transition-colors duration-200"
              title={isMuted ? 'Unmute sounds' : 'Mute sounds'}
            >
              {isMuted ? (
                <SpeakerXMarkIcon className="w-5 h-5" />
              ) : (
                <SpeakerWaveIcon className="w-5 h-5" />
              )}
            </button>

            {/* Wallet Button */}
            <WalletMultiButton className="!bg-gradient-to-r !from-primary !to-secondary !border-0 !rounded-lg !font-medium !text-background hover:!opacity-90 !transition-opacity" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-400 hover:text-primary transition-colors duration-200"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-sm border-t border-primary/20"
          >
            <div className="px-4 py-4 space-y-4">
              <Link 
                href="/" 
                className="block text-gray-300 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Game
              </Link>
              <Link 
                href="/leaderboard" 
                className="block text-gray-300 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Leaderboard
              </Link>
              <Link 
                href="/history" 
                className="block text-gray-300 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                History
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-300 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                <button
                  onClick={toggleMute}
                  className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  {isMuted ? (
                    <SpeakerXMarkIcon className="w-5 h-5" />
                  ) : (
                    <SpeakerWaveIcon className="w-5 h-5" />
                  )}
                  <span className="text-sm">{isMuted ? 'Unmute' : 'Mute'}</span>
                </button>
              </div>

              <div className="pt-2">
                <WalletMultiButton className="!w-full !bg-gradient-to-r !from-primary !to-secondary !border-0 !rounded-lg !font-medium !text-background hover:!opacity-90 !transition-opacity" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
