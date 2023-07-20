import React from 'react';

export const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className='countdown'>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

