// pages/leaderboard.tsx
import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { dbHelpers } from '@/lib/supabase';
import { UserStats } from '@/types';
import { formatSol, truncateWallet } from '@/utils';
import { TrophyIcon, FireIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<UserStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'wins' | 'winRate' | 'volume'>('wins');

  useEffect(() => {
    loadLeaderboard();
  }, []);

  const loadLeaderboard = async () => {
    try {
      // This would need to be implemented in dbHelpers
      // const data = await dbHelpers.getLeaderboard();
      // setLeaderboard(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading leaderboard:', error);
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: 'wins', label: 'Most Wins', icon: TrophyIcon },
    { id: 'winRate', label: 'Win Rate', icon: FireIcon },
    { id: 'volume', label: 'Volume', icon: CurrencyDollarIcon },
  ];

  return (
    <Layout
      title="Leaderboard - RuneFlip"
      description="Top players in RuneFlip mystical coin flipping game"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold font-rune bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Leaderboard
          </h1>
          <p className="text-gray-400">
            The most skilled rune coin flippers in the realm
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-dark-100/50 rounded-lg p-1 flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200
                  ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-background'
                    : 'text-gray-400 hover:text-white'
                  }
                `}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-100/50 backdrop-blur-sm rounded-2xl border border-primary/20 p-6"
        >
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-16 bg-dark-200 rounded-lg"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <TrophyIcon className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No leaderboard data yet</p>
              <p className="text-gray-500">Start playing to see rankings!</p>
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}
