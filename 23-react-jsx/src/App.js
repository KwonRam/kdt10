import './App.css';

function App() {
  const name = '토스터';
  const animal = '기니피그';
  const a = 7;
  const b = 4;
  return (
    <div
      className="App"
      onClick={() => {
        alert('hi');
      }}
    >
      {/*JSX 문법
    1. 하나로 감싸인 요소여야함.
    2. javascript 표현식을 사용한다
        -{}로 감싸면 js 표현식 사용가능
        -{}에서 삼항 연산자 사용 가능(if문은 불가)
    */}
      <div>{name} 안녕하세요!</div>
      <div>{name === 'gildong' ? 'gildong 입니다' : '잘못 아셨네요'}</div>
      {/*3.style 속성(인라인)
        - 리액트에서 동 요소에 스타일 적용시 문자열 X -> 객체 사용
        -스타일 속성 이름 중에서 하이폰- 포함시 camelCase로 작성
      */}
      <div style={{ backgroundColor: 'blue' }}>스타일 적용!</div>
      <h2>제 반려 동물의 이름은 {name}입니다.</h2>
      <h2>
        {name}은 {animal}입니다.
      </h2>
      <div>{3 + 5 == 8 ? '정답입니다!' : '오답입니다!'}</div>
      <div style={{ backgroundColor: 'coral', color: 'Red', fontSize: '32pt' }}>
        Hello World
      </div>
      <br />
      아이디: <input type="text" />
      비밀번호: <input type="text" />
    </div>
  );
}

export default App;
