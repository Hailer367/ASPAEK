// components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-100 border-t border-primary/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg font-rune">R</span>
              </div>
              <span className="text-xl font-bold font-rune bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                RuneFlip
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Experience the mystical art of coin flipping with rune-engraved coins on the Solana blockchain. 
              Fair, transparent, and powered by ancient magic.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm">
                  Play Game
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm">
                  Game History
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm">
                  Responsible Gaming
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 RuneFlip. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Powered by Solana</span>
            <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          </div>
        </div>

        {/* Responsible Gaming Notice */}
        <div className="mt-6 p-4 bg-dark-200 rounded-lg border border-gold/20">
          <p className="text-gold text-xs text-center">
            ⚠️ Must be 18+ to play. Gambling can be addictive. Play responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};
