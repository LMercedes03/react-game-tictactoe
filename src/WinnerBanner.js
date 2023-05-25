import React from 'react';

export const WinnerBanner = ({ winner }) => {
  return (
    <div className="winner-banner">
      {winner === 'Tie' ? 'It\'s a Tie!' : `Winner: ${winner}`}
    </div>
  );
};
