// src/components/Controls.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, increamentByAmount } from '../redux/counterSlice';

const Controls = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increamentByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Controls;
