// src/components/Counter.js
import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Counter Value: {count}</h2>
    </div>
  );
};

export default Counter;
