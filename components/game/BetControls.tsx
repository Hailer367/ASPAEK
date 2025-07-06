import React, { useState } from 'react';

export const BetControls: React.FC<{
  onBet: (side: 'heads' | 'tails', amount: number) => void;
}> = ({ onBet }) => {
  const [amount, setAmount] = useState<number>(0.001);
  const [side, setSide] = useState<'heads' | 'tails'>('heads');

  return (
    <div className="bet-controls">
      <h3>Place Bet</h3>
      <div>
        <button onClick={() => setSide('heads')}>Heads</button>
        <button onClick={() => setSide('tails')}>Tails</button>
      </div>
      <input
        type="number"
        min="0.001"
        step="0.001"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <button onClick={() => onBet(side, amount)}>Flip Coin!</button>
    </div>
  );
};
