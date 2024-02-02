import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
//덱 데이터를 불러들임
//덱의 구성 - 5인 3열 3행 배치
//캐릭터 이름, HP, 물리방어력, 마법방어력, 공격력, 속도(회피), 명중, 마법딜러인지 물리딜러인지, 부관인지 아닌지, 전투 시작 전 호감도, 캐릭터 이미지(링크)

//맵 데이터를 불러들임
//적 데이터를 불러들임

function StoryDemo() {
  /*let { chapter, ep } = useParams();
  console.log(chapter, ep);

  useEffect(() => {
    // EnemyDeckData를 가져 오는 API 엔드 포인트가 있다고 가정합니다.
    axios
      .get(`/api/enemyDeck?chapter=${chapter}&ep=${ep}`)
      .then((response) => {
        console.log('res.data[0] ', response.data[0]);

        // 가져온 데이터로 상태를 업데이트합니다.
        // 예를 들어, enemyDeckData가 배열인 경우
      })
      .catch((error) => {
        console.error('EnemyDeckData를 가져 오는 중 오류 발생:', error);
      });
  }, [chapter, ep]);*/

  return (
    <div>
      <div className="BackGround">
        <div className="PortraitBox"></div>
        <div className="StoryBox"></div>
      </div>
    </div>
  );
}
export default StoryDemo;
