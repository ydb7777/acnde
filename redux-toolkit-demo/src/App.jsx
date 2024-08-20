// src/App.jsx
import React from 'react';
import Counter from './components/Counter';
import Controls from './components/Controls';

const App = () => {
  return (
    <div>
      <h1>Redux Toolkit Demo</h1>
      <Counter />
      <Controls />
    </div>
  );
};

export default App;
