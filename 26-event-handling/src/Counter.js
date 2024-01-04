import { useState } from 'react';
function Counter() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const alertMsg = (msg) => {
    alert(`${msg} 현재 숫자는 ${number}입니다.`);
  };
  const consoleMsg = (e, msg) => {
    console.log(e.target);
    console.log(`${msg} 현재 숫자는 ${number}입니다.`);
  };
  return (
    <div>
      <h1>Function Component</h1>
      <button onClick={increase}>더하기</button>
      <button onClick={() => alertMsg('Hello~')}>alert출력</button>
      <button onClick={(e) => consoleMsg(e, 'hello!')}>console출력</button>
    </div>
  );
}

export default Counter;
