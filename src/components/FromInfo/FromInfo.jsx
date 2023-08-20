import React from 'react';

const FromInfo = ({ title, info }) => {
  return (
    <div>
      <strong>{title}:</strong> {info}
    </div>
  );
};

export default FromInfo;
