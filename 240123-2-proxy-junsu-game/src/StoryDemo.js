import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './CSS/reset.css';
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
  let scene = [
    {
      id: 1,
      charName: '준수',
      Portrait: '/img/portrait/junsu/defalt.png',
      script: '와 좆됐다',
      backGround: '/img/backGround/lake.jpeg',
    },
    {
      id: 2,
      charName: '현성',
      Portrait: '/img/portrait/hyunsung/defalt.png',
      script: '와 그러는데?',
      backGround: '/img/backGround/lake.jpeg',
    },
    {
      id: 3,
      charName: '상호',
      Portrait: '/img/portrait/hyunsung/comic.png',
      script: '제 흑염룡이 나올 때군요?',
      backGround: '/img/backGround/lake.jpeg',
    },
    {
      id: 4,
      charName: '병찬',
      Portrait: '/img/portrait/byeongchan/ahha.png',
      script: '흑염룡?',
      backGround: '/img/backGround/lake.jpeg',
    },
  ];

  return (
    <div>
      <div
        className="BackGround"
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="PortraitBox">
          <img
            src="/img/portrait/junsu/defalt.png"
            style={{ height: '720px' }}
          ></img>
        </div>
        <div
          className="StoryBox"
          style={{ backgroundColor: 'navy', zIndex: '10' }}
        >
          <div className="CharName">준수</div>
          <div className="StoryScript">와 좆됐다</div>
        </div>
        <img
          src="/img/backGround/lake.jpeg"
          style={{
            position: 'absolute',
            width: '90vw',
            height: '90vh',
            objectFit: 'cover',
          }}
        ></img>
      </div>
    </div>
  );
}
export default StoryDemo;
