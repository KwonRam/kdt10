import { useState } from 'react';
function ChangeTextColor() {
  const [color, setColor] = useState('Black');
  const [text, setText] = useState('검정색');
  const setColorTo = (e) => {
    setText(e.target.innerHTML);
    setColor(e.target.style.color);
  };
  return (
    <div>
      <h1 style={{ color: `${color}` }} className="text">
        {text} 글씨
      </h1>
      <button onClick={(e) => setColorTo(e)} style={{ color: 'Red' }}>
        빨간색
      </button>
      <button onClick={(e) => setColorTo(e)} style={{ color: 'Blue' }}>
        파란색
      </button>
    </div>
  );
}

export default ChangeTextColor;
