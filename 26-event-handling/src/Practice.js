import { useState } from 'react';

function Practice() {
  const [text, setText] = useState('안녕');
  const changeText = (e) => {
    setText(e.target.value);
  };
  const [bg, setBG] = useState('white');
  const changeBG = (e) => {
    setBG(e.target.value);
  };
  const [textCol, setTextCol] = useState('Black');
  const changeTextCol = (e) => {
    setTextCol(e.target.value);
  };
  const [fruitName, setFruitName] = useState('Apple');
  const changeFruitName = (e) => {
    setFruitName(e.target.value);
  };
  return (
    <div>
      <form>
        <label for="fruit">과일</label>
        <select name="fruits" id="fruit" onChange={(e) => changeFruitName(e)}>
          <option value="Apple">사과</option>
          <option value="Banana">바나나</option>
          <option value="Peach">복숭아</option>
          <option value="Orange">오렌지</option>
          <option value="Pineapple">파인애플</option>
          <option value="Grape">포도</option>
        </select>

        <label for="bgColor">배경색</label>
        <select
          name="backgroundColor"
          id="bgColor"
          onChange={(e) => changeBG(e)}
        >
          <option value="Red">빨강</option>
          <option value="Orange">주황</option>
          <option value="Yellow">노랑</option>
          <option value="Green">초록</option>
          <option value="Blue">파랑</option>
          <option value="Purple">보라</option>
        </select>

        <label for="textColor">글자색</label>
        <select
          name="ColorOfText"
          id="textColor"
          onChange={(e) => changeTextCol(e)}
        >
          <option value="Red">빨강</option>
          <option value="Orange">주황</option>
          <option value="Yellow">노랑</option>
          <option value="Green">초록</option>
          <option value="Blue">파랑</option>
          <option value="Purple">보라</option>
        </select>

        <br />

        <label for="writeContent">내용</label>
        <input
          type="text"
          id="writeContent"
          required="true"
          placeholder="내용을 입력하세요"
          onChange={(e) => changeText(e)}
        />
      </form>
      <div style={{ backgroundColor: `${bg}`, color: `${textCol}` }}>
        <img
          src={process.env.PUBLIC_URL + `/img/${fruitName}.jpg`}
          style={{ width: '400px' }}
          alt="fruit img"
        ></img>
        <h1>{text}</h1>
      </div>
    </div>
  );
}

export default Practice;
