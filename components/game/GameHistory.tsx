import React from 'react';

interface GameHistoryProps {
  matches: Array<{
    id: string;
    result: 'win' | 'loss';
    stake: number;
    timestamp: string;
  }>;
}

export const GameHistory: React.FC<GameHistoryProps> = ({ matches }) => {
  return (
    <div className="game-history">
      <h3>Recent Games</h3>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            {match.result === 'win' ? '✅' : '❌'} 
            Bet: {match.stake} SOL • {match.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};
