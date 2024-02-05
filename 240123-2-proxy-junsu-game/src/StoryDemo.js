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
      charSpeakingName: '준수',
      leftPortrait: '/img/portrait/junsu/defalt.png',
      rightPortrait: '/img/portrait/sangho/comic.png',
      script: '와 X됐다.',
      backGround: '/img/backGround/lake.png',
    },
    {
      id: 2,
      charSpeakingName: '준수',
      leftPortrait: '/img/portrait/junsu/defalt.png',
      rightPortrait: '/img/portrait/sangho/comic.png',
      script: '이딴 새끼랑 또...',
      backGround: '/img/backGround/lake.png',
    },
    {
      id: 3,
      charSpeakingName: '준수',
      leftPortrait: '/img/portrait/junsu/defalt.png',
      rightPortrait: '/img/portrait/hyunsung/defalt.png',
      script: '아니 선생님은 또 저 새끼 말을 진지하게 들어주고 계시네.',
      backGround: '/img/backGround/lake.png',
    },
    {
      id: 4,
      charSpeakingName: '준수',
      leftPortrait: '/img/portrait/junsu/defalt.png',
      rightPortrait: '/img/portrait/sangho/comic.png',
      script: '약점이 보인다는 게 말이야 방구야?',
      backGround: '/img/backGround/lake.png',
    },
  ];
  const [i, setI] = useState(0);
  const onChangeIndex = () => {
    //event.preventDefault();
    setI(i + 1);
  };
  useEffect(() => {
    console.log('useEffect i ', i);
  }, [i]);
  console.log(i);
  return (
    <div>
      <div
        onClick={onChangeIndex}
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
        <div
          className="PortraitBox"
          style={{
            width: '90vw',
            zIndex: '9',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <img
            src={process.env.PUBLIC_URL + `${scene[i].leftPortrait}`}
            style={{ height: '660px' }}
          ></img>
          <img
            src={process.env.PUBLIC_URL + `${scene[i].rightPortrait}`}
            style={{ height: '660px' }}
          ></img>
        </div>
        <div
          className="StoryBox"
          style={{
            backgroundColor: '#22283d',
            zIndex: '10',
            width: '90vw',
            height: '24vh',
            position: 'absolute',
            bottom: '5vh',
            borderTop: '3px solid black',
          }}
        >
          <div
            className="CharName"
            style={{
              color: 'white',
              paddingLeft: '240px',
              paddingTop: '40px',
              fontSize: '26px',
              fontFamily: 'NanumSquareNeo-Variable',
            }}
          >
            {scene[i].charSpeakingName}
          </div>
          <div
            className="StoryScript"
            style={{
              color: 'white',
              paddingLeft: '240px',
              paddingTop: '30px',
              fontSize: '20px',
              fontFamily: 'NanumSquareNeo-Variable',
            }}
          >
            {scene[i].script}
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + `${scene[i].backGround}`}
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
