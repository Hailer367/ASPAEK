import React from 'react';

interface ActiveMatch {
  id: string;
  player1: string;
  player2: string;
  stake: number;
}

interface ActiveMatchesProps {
  matches: ActiveMatch[];
}

export const ActiveMatches: React.FC<ActiveMatchesProps> = ({ matches }) => {
  return (
    <div className="active-matches">
      <h3>Active Games</h3>
      {matches.length === 0 ? (
        <p>No active matches</p>
      ) : (
        <ul>
          {matches.map((match) => (
            <li key={match.id}>
              🎮 {match.player1} vs {match.player2} • Bet: {match.stake} SOL
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
