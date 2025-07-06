import React from 'react';

interface UserStatsProps {
  wins: number;
  losses: number;
  totalWagered: number;
}

export const UserStats: React.FC<UserStatsProps> = ({ wins, losses, totalWagered }) => {
  return (
    <div className="user-stats">
      <h3>Your Stats</h3>
      <p>🏆 Wins: {wins}</p>
      <p>💔 Losses: {losses}</p>
      <p>💰 Total Wagered: {totalWagered} SOL</p>
    </div>
  );
};
