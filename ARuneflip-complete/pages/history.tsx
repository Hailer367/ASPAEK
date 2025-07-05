// pages/history.tsx
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { GameHistory } from '@/components/game/GameHistory';
import { motion } from 'framer-motion';

export default function History() {
  return (
    <Layout
      title="Game History - RuneFlip"
      description="Your complete game history in RuneFlip"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold font-rune bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Game History
          </h1>
          <p className="text-gray-400">
            Your complete record of mystical coin flips
          </p>
        </motion.div>

        <GameHistory />
      </div>
    </Layout>
  );
}
