import React from 'react';
import BattleMaps from './mapData';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function BattleMapDetail() {
  let { chapter, ep } = useParams();
  console.log(chapter, ep);
  //console.log(BattleMaps);
  //console.log(BattleMaps.BattleMaps);
  const location = useLocation();
  console.log(location.state);
  console.log(location.state.myDeckData);
  const myDeckDataTemp = location.state.myDeckData;
  for (let i = 0; i < myDeckDataTemp.length; i++) {
    myDeckDataTemp[i].id = i + 1;
    console.log(myDeckDataTemp[i]);
  }
  const [myDeckData, setMyDeckData] = useState(myDeckDataTemp);
  console.log(myDeckData);

  const [enemyDeckData, setEnemyDeckData] = useState([]);
  // 컴포넌트가 마운트될 때 EnemyDeckData를 가져 오기 위해 useEffect 사용
  useEffect(() => {
    // EnemyDeckData를 가져 오는 API 엔드 포인트가 있다고 가정합니다.
    axios
      .get(`/api/enemyDeckData?chapter=${chapter}&ep=${ep}`)
      .then((response) => {
        const enemyDeckData = response.data; // API 응답 구조에 따라 조정하세요.
        // 가져온 데이터로 상태를 업데이트합니다.
        // 예를 들어, enemyDeckData가 배열인 경우
        setEnemyDeckData(enemyDeckData);
      })
      .catch((error) => {
        console.error('EnemyDeckData를 가져 오는 중 오류 발생:', error);
      });
  }, [chapter, ep]);

  const BattleMap = BattleMaps.BattleMaps.find((i) => i.chapter === chapter);

  return (
    <div>
      <h2>User Detail</h2>
      <p>Battle Chapter {chapter} </p>
      <p>Battle Episode {ep} </p>
      <p>name {BattleMap.name}</p>
    </div>
  );
}

export default BattleMapDetail;
