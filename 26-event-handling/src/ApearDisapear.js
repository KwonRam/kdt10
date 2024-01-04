import { useState } from 'react';
function ApearDisapear() {
  const [text, setText] = useState('안녕하세요');
  const Apear = (e) => {
    setText(e.target.innerHTML);
    e.target.style.display = 'none';
    e.target.parentNode.firstChild.nextSibling.style.display = 'none';
  };
  const Disapear = (e) => {
    setText(e.target.innerHTML);
  };
  return (
    <div>
      <button onClick={(e) => Disapear(e, '')}>사라져라!</button>
      <button
        style={{ display: 'none' }}
        onClick={(e) => Apear(e, '안녕하세요')}
      >
        보여라!
      </button>
      <h1>{text}</h1>
    </div>
  );
}

export default ApearDisapear;
