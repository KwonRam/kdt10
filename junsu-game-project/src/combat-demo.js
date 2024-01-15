import { useState } from 'react';
//덱 데이터를 불러들임
//덱의 구성 - 5인 3열 3행 배치
//캐릭터 이름, HP, 물리방어력, 마법방어력, 공격력, 속도(회피), 명중, 마법딜러인지 물리딜러인지, 부관인지 아닌지, 전투 시작 전 호감도, 캐릭터 이미지(링크)

//맵 데이터를 불러들임
//적 데이터를 불러들임

function CombatDemo() {
  const [myDeckData, setMyDeckData] = useState([
    {
      charName: '정희찬',
      HP: 27,
      physicResist: 3,
      magicResist: 2,
      attack: 4,
      speed: 4,
      accuracy: 3,
      isMagic: false,
      isAdjutant: false,
      lovePoint: 10,
      column: 3,
      row: 3,
      img: 'heechan_sd_1',
    },
    {
      charName: '이현성',
      HP: 27,
      physicResist: 3,
      magicResist: 2,
      attack: 4,
      speed: 4,
      accuracy: 3,
      isMagic: true,
      isAdjutant: false,
      lovePoint: 10,
      column: 3,
      row: 3,
      img: 'hyunsung_sd_1',
    },
    {
      charName: '진재유',
      HP: 27,
      physicResist: 3,
      magicResist: 2,
      attack: 4,
      speed: 4,
      accuracy: 3,
      isMagic: true,
      isAdjutant: true,
      lovePoint: 10,
      column: 3,
      row: 3,
      img: 'jaeyu_sd_1',
    },
    {
      charName: '최종수',
      HP: 27,
      physicResist: 3,
      magicResist: 2,
      attack: 4,
      speed: 4,
      accuracy: 3,
      isMagic: false,
      isAdjutant: false,
      lovePoint: 10,
      column: 3,
      row: 3,
      img: 'jongsu_sd_1',
    },
    {
      charName: '공태성',
      HP: 27,
      physicResist: 3,
      magicResist: 2,
      attack: 4,
      speed: 4,
      accuracy: 3,
      isMagic: true,
      isAdjutant: false,
      lovePoint: 10,
      column: 3,
      row: 3,
      img: 'taesung_sd_1',
    },
    {
      charName: '전영중',
      HP: 27,
      physicResist: 3,
      magicResist: 2,
      attack: 4,
      speed: 4,
      accuracy: 3,
      isMagic: false,
      isAdjutant: false,
      lovePoint: 10,
      column: 3,
      row: 3,
      img: 'youngjung_sd_1',
    },
  ]);
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + `/img/${myDeckData[1].img}.png`}
        style={{ width: '200px' }}
        alt="myDeckData[1]"
      ></img>
    </div>
  );
}

export default CombatDemo;
