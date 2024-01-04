import React, { useState } from 'react';

function StatePactice2() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 2);
  };
  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
      <h1>{number}</h1>
    </div>
  );
}

export default StatePactice2;
