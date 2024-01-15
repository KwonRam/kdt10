import { useState } from 'react';
import { useEffect } from 'react';
//덱 데이터를 불러들임
//덱의 구성 - 5인 3열 3행 배치
//캐릭터 이름, HP, 물리방어력, 마법방어력, 공격력, 속도(회피), 명중, 마법딜러인지 물리딜러인지, 부관인지 아닌지, 전투 시작 전 호감도, 캐릭터 이미지(링크)

//맵 데이터를 불러들임
//적 데이터를 불러들임

function CombatDemo3() {
  const [myDeckData, setMyDeckData] = useState([
    {
      id: 1,
      charName: '정희찬',
      HPcurrent: 22,
      HPstat: 22,
      physicResist: 3,
      magicResist: 2,
      attack: 2,
      speed: 4,
      accuracy: 3,
      isMagic: false,
      isAdjutant: false,
      isEnemy: false,
      passiveSkill: '바람의 힘으로!',
      activeSkill: '최고의 응원!',
      ultSkill: '우리는 하나야!',
      lovePointCurrent: 10,
      Line: 'back',
      Position: 'center',
      img: 'heechan_sd_1',
    },
    {
      id: 2,
      charName: '이현성',
      HPcurrent: 28,
      HPstat: 28,
      physicResist: 4,
      magicResist: 2,
      attack: 5,
      speed: 2,
      accuracy: 4,
      isMagic: true,
      isAdjutant: false,
      isEnemy: false,
      passiveSkill: '젊은 멘토',
      activeSkill: '타임아웃',
      ultSkill: '끝난 줄 알았지?',
      lovePointCurrent: 10,
      Line: 'back',
      Position: 'left',
      img: 'hyunsung_sd_1',
    },
    {
      id: 3,
      charName: '진재유',
      HPcurrent: 20,
      HPstat: 20,
      physicResist: 2,
      magicResist: 3,
      attack: 5,
      speed: 5,
      accuracy: 5,
      isMagic: true,
      isAdjutant: true,
      isEnemy: false,
      passiveSkill: '최고의 전략가',
      activeSkill: '내만 믿어라',
      ultSkill: '최연소 퇴물이라고?',
      lovePointCurrent: 10,
      Line: 'back',
      Position: 'right',
      img: 'jaeyu_sd_1',
    },
    {
      id: 4,
      charName: '최종수',
      HPcurrent: 25,
      HPstat: 25,
      physicResist: 4,
      magicResist: 3,
      attack: 5,
      speed: 4,
      accuracy: 5,
      isMagic: false,
      isAdjutant: false,
      isEnemy: false,
      passiveSkill: '넘어설 벽',
      activeSkill: '찢어버리기',
      ultSkill: '이기게 해준다고!',
      lovePointCurrent: 10,
      Line: 'mid',
      Position: 'right',
      img: 'jongsu_sd_1',
    },
    {
      id: 5,
      charName: '공태성',
      HPcurrent: 27,
      HPstat: 27,
      physicResist: 3,
      magicResist: 4,
      attack: 4,
      speed: 3,
      accuracy: 4,
      isMagic: true,
      isAdjutant: false,
      isEnemy: false,
      passiveSkill: '드래곤의 피지컬',
      activeSkill: '드래곤 스매셔',
      ultSkill: '거짓말쟁이가 아니야',
      lovePointCurrent: 10,
      Line: 'mid',
      Position: 'center',
      img: 'taesung_sd_1',
    },
    {
      id: 6,
      charName: '전영중',
      HPcurrent: 30,
      HPstat: 30,
      physicResist: 4,
      magicResist: 4,
      attack: 3,
      speed: 4,
      accuracy: 5,
      isMagic: false,
      isAdjutant: false,
      isEnemy: false,
      passiveSkill: '우수한 신체',
      activeSkill: '최고의 디펜더',
      ultSkill: '사기(士氣) 진작(振作)',
      lovePointCurrent: 10,
      Line: 'front',
      Position: 'center',
      img: 'youngjung_sd_1',
    },
  ]);
  const [enemyDeckData, setEnemyDeckData] = useState([
    {
      id: 7,
      charName: '오염된 전영중',
      HPcurrent: 99999,
      HPstat: 99999,
      physicResist: 3,
      magicResist: 2,
      attack: 4,
      speed: 4,
      accuracy: 3,
      isMagic: false,
      isAdjutant: false,
      isEnemy: true,
      passiveSkill: '오염의 근원',
      activeSkill: '어딜 가려고?',
      ultSkill: '누가 계속 영웅하래!',
      lovePointCurrent: 0,
      Line: 'mid',
      Position: 'center',
      img: 'Boss_BBang_sd_1',
    },
  ]);
  //전열 미드 후열
  const frontLine = myDeckData.filter(
    (myDeckData) => myDeckData.Line === 'front'
  );
  const midLine = myDeckData.filter((myDeckData) => myDeckData.Line === 'mid');
  const backLine = myDeckData.filter(
    (myDeckData) => myDeckData.Line === 'back'
  );
  //상세 스탯 표시 함수
  const [characterStatDetail, setCharacterStatDetail] = useState({
    id: 0,
    charName: '',
    HPcurrent: 0,
    HPstat: 0,
    physicResist: 0,
    magicResist: 0,
    attack: 0,
    speed: 0,
    accuracy: 0,
    isMagic: false,
    isAdjutant: false,
    isEnemy: false,
    passiveSkill: '',
    activeSkill: '',
    ultSkill: '',
    lovePointCurrent: 0,
    Line: '',
    Position: '',
    img: '',
  });

  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const onShowStatDetail = (id) => {
    const newCharacterStatDetail = myDeckData.filter((item) => item.id === id);
    console.log(newCharacterStatDetail);
    setCharacterStatDetail(newCharacterStatDetail[0]);
    setSelectedCharacterId(id);
  };

  const allDeckData = myDeckData.concat(enemyDeckData);

  //턴 세부 정보
  const [turnInformation, setTrunInformation] = useState({
    turnNumber: 0,
    resultSpeed: [
      {
        id: 0,
        charName: '',
        speed: 0,
      },
    ],
  });

  /*useEffect(() => {
    console.log('턴 렌더링 좀 다시 해줘...', turnInformation);
  }, [turnInformation]);*/

  //속도 우선도 판정
  const runCheckSpeed = () => {
    //턴 정보 받아오기
    let currentTurn = turnInformation.turnNumber;
    // 적과 아군 배열 합치기
    const speedCheck = allDeckData.map((item) => ({
      id: item.id,
      charName: item.charName,
      speed: item.speed + item.speed * Math.random() * 0.4, //속도판정공식
    }));
    const resultSpeedTemp = speedCheck.sort((a, b) => b.speed - a.speed);
    console.log('리절트 스피드 임시', resultSpeedTemp);
    const turnInformationTemp = {
      turnNumber: currentTurn + 1,
      resultSpeed: resultSpeedTemp,
    };
    return turnInformationTemp;
  };
  const loadCheckSpeed = () => {
    setTrunInformation(runCheckSpeed());
  };

  const handleSkillSelect = (e, selectedSkill) => {
    let currentCharacter = {
      id: 0,
      charName: '',
      HPcurrent: 0,
      HPstat: 0,
      physicResist: 0,
      magicResist: 0,
      attack: 0,
      speed: 0,
      accuracy: 3,
      isMagic: false,
      isAdjutant: false,
      isEnemy: false,
      passiveSkill: '',
      activeSkill: '',
      ultSkill: '',
      lovePointCurrent: 0,
      Line: '',
      Position: '',
      img: '',
    };
    console.log(e);
    console.log(e.target.value);
    currentCharacter = characterStatDetail;
    console.log(currentCharacter);
    switch (selectedSkill) {
      case 'A':
        console.log(
          `${currentCharacter.charName} uses ${currentCharacter.activeSkill}!`
        );
        // 해당 스킬에 대한 행동 로직 추가
        //run choosedChar[0].activeSkill
        const myDeckDataTemp = myDeckData;
        const enemyDeckDataTemp = enemyDeckData;
        if (currentCharacter.charName === '정희찬') {
          myDeckDataTemp.map((item) => {
            item.attack += 3;
          });
        } else if (currentCharacter.charName === '이현성') {
          myDeckDataTemp.map((item) => {
            if (item.HPcurrent + 5 > item.HPstat) {
              item.HPcurrent = item.HPstat;
            } else {
              item.HPcurrent += 5;
            }
          });
        } else if (currentCharacter.charName === '공태성') {
          enemyDeckDataTemp.map((item) => {
            item.HPcurrent -= 15;
          });
        } else if (currentCharacter.charName === '최종수') {
          enemyDeckDataTemp.map((item) => {
            item.physicResist -= 2;
            item.HPcurrent -= 10;
          });
        } else if (currentCharacter.charName === '진재유') {
          enemyDeckDataTemp.map((item) => {
            item.magicResist -= 3;
            item.HPcurrent -= 12;
          });
        } else if (currentCharacter.charName === '전영중') {
          myDeckDataTemp.map((item) => {
            item.physicResist += 3;
          });
          enemyDeckDataTemp.map((item) => {
            item.physicResist -= 3;
          });
        } else {
          console.log('error');
        }
        setMyDeckData(myDeckDataTemp);
        setEnemyDeckData(enemyDeckDataTemp);
        setCharacterStatDetail({
          id: 0,
          charName: '',
          HPcurrent: 0,
          HPstat: 0,
          physicResist: 0,
          magicResist: 0,
          attack: 0,
          speed: 0,
          accuracy: 0,
          isMagic: false,
          isAdjutant: false,
          isEnemy: false,
          passiveSkill: '',
          activeSkill: '',
          ultSkill: '',
          lovePointCurrent: 0,
          Line: '',
          Position: '',
          img: '',
        });
        turnInformation.resultSpeed.shift();
        console.log('턴인포', turnInformation.resultSpeed);
        //resultSpeedTemp.shift();
        return turnInformation;
      case 'U':
        console.log(
          `${currentCharacter.charName} uses ${currentCharacter.ultSkill}!`
        );

        // 해당 스킬에 대한 행동 로직 추가
        //run choosedChar[0].ultSkill
        setCharacterStatDetail({
          id: 0,
          charName: '',
          HPcurrent: 0,
          HPstat: 0,
          physicResist: 0,
          magicResist: 0,
          attack: 0,
          speed: 0,
          accuracy: 0,
          isMagic: false,
          isAdjutant: false,
          isEnemy: false,
          passiveSkill: '',
          activeSkill: '',
          ultSkill: '',
          lovePointCurrent: 0,
          Line: '',
          Position: '',
          img: '',
        });
        turnInformation.resultSpeed.shift();
        console.log('턴인포', turnInformation.resultSpeed);
        //resultSpeedTemp.shift();
        //console.log('리절트스피드템프 ', resultSpeedTemp);
        return turnInformation;
      case 'O':
        console.log(
          `${currentCharacter.charName} attacks with a basic attack!`
        );
        const myDeckDataTemp2 = myDeckData;
        const enemyDeckDataTemp2 = enemyDeckData;
        if (currentCharacter.charName === '정희찬') {
          enemyDeckDataTemp2.map((item) => {
            item.HPcurrent -= currentCharacter.attack;
          });
        } else if (currentCharacter.charName === '이현성') {
          enemyDeckDataTemp2.map((item) => {
            item.HPcurrent -= currentCharacter.attack;
          });
        } else if (currentCharacter.charName === '공태성') {
          enemyDeckDataTemp2.map((item) => {
            item.HPcurrent -= currentCharacter.attack;
          });
        } else if (currentCharacter.charName === '최종수') {
          enemyDeckDataTemp2.map((item) => {
            item.HPcurrent -= currentCharacter.attack;
          });
        } else if (currentCharacter.charName === '진재유') {
          enemyDeckDataTemp2.map((item) => {
            item.HPcurrent -= currentCharacter.attack;
          });
        } else if (currentCharacter.charName === '전영중') {
          enemyDeckDataTemp2.map((item) => {
            item.HPcurrent -= currentCharacter.attack;
          });
        } else {
          console.log('error');
        }
        setMyDeckData(myDeckDataTemp2);
        setEnemyDeckData(enemyDeckDataTemp2);
        setCharacterStatDetail({
          id: 0,
          charName: '',
          HPcurrent: 0,
          HPstat: 0,
          physicResist: 0,
          magicResist: 0,
          attack: 0,
          speed: 0,
          accuracy: 0,
          isMagic: false,
          isAdjutant: false,
          isEnemy: false,
          passiveSkill: '',
          activeSkill: '',
          ultSkill: '',
          lovePointCurrent: 0,
          Line: '',
          Position: '',
          img: '',
        });
        turnInformation.resultSpeed.shift();
        console.log('턴인포', turnInformation.resultSpeed);
        //resultSpeedTemp.shift();
        //console.log('리절트스피드템프 ', resultSpeedTemp);
        return turnInformation;
      case 'E':
        console.log('enemy attack');
        setCharacterStatDetail({
          id: 0,
          charName: '',
          HPcurrent: 0,
          HPstat: 0,
          physicResist: 0,
          magicResist: 0,
          attack: 0,
          speed: 0,
          accuracy: 0,
          isMagic: false,
          isAdjutant: false,
          isEnemy: false,
          passiveSkill: '',
          activeSkill: '',
          ultSkill: '',
          lovePointCurrent: 0,
          Line: '',
          Position: '',
          img: '',
        });
        turnInformation.resultSpeed.shift();
        console.log('턴인포', turnInformation.resultSpeed);
        //resultSpeedTemp.shift();
        //console.log('리절트스피드템프 ', resultSpeedTemp);
        return turnInformation;
      default:
        setCharacterStatDetail({
          id: 0,
          charName: '',
          HPcurrent: 0,
          HPstat: 0,
          physicResist: 0,
          magicResist: 0,
          attack: 0,
          speed: 0,
          accuracy: 0,
          isMagic: false,
          isAdjutant: false,
          isEnemy: false,
          passiveSkill: '',
          activeSkill: '',
          ultSkill: '',
          lovePointCurrent: 0,
          Line: '',
          Position: '',
          img: '',
        });
        turnInformation.resultSpeed.shift();
        console.log('턴인포', turnInformation.resultSpeed);
        //resultSpeedTemp.shift();
        //console.log('리절트스피드템프 ', resultSpeedTemp);
        return turnInformation;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <div className="BossBox">
        <img
          src={process.env.PUBLIC_URL + `/img/${enemyDeckData[0].img}.png`}
          style={{ width: '240px' }}
          alt="Boss img"
        ></img>
        <p>
          HP {enemyDeckData[0].HPcurrent}/{enemyDeckData[0].HPstat}
        </p>
        <div
          style={{
            display:
              turnInformation.resultSpeed[0].id === enemyDeckData[0].id
                ? 'block'
                : 'none',
          }}
        >
          보스의 턴 입니다!
          <div>보스를 행동하게 해주세요</div>
          <button
            value={enemyDeckData[0].id}
            onClick={(e) => handleSkillSelect(e, 'E')}
          >
            보스 턴 실행
          </button>
        </div>
      </div>
      <div className="InfoBox">
        <div>
          턴<p>규칙: 턴 내의 순서는 속도판정</p>
          <div
            style={{
              border:
                turnInformation.resultSpeed.length === 0 ||
                turnInformation.resultSpeed[0].id === 0
                  ? '2px solid red'
                  : '2px solid transparent',
            }}
            onClick={() => loadCheckSpeed()}
          >
            전투 시작-클릭시 "{turnInformation.turnNumber + 1}"턴의 속도 판정
          </div>
          <div>
            {turnInformation.turnNumber === 0
              ? '전투 시작 전 입니다'
              : `${turnInformation.turnNumber}번째 턴 입니다`}
          </div>
          <div>
            턴 순서 결과:
            <div id="speedResultBox">
              {turnInformation.resultSpeed.map((i) => {
                return <div key={i.id}>{i.charName}</div>;
              })}
            </div>
          </div>
        </div>
        <div style={{ border: '2px solid red' }}>
          스탯
          <div>이름 {characterStatDetail.charName}</div>
          <div>
            HP {characterStatDetail.HPcurrent}/{characterStatDetail.HPstat}
          </div>
          <div>물리방어 {characterStatDetail.physicResist}</div>
          <div>마법방어 {characterStatDetail.magicResist}</div>
          <div>공격력 {characterStatDetail.attack}</div>
          <div>민첩 {characterStatDetail.speed}</div>
          <div>명중 {characterStatDetail.accuracy}</div>
          <p>스킬</p>
          <div
            style={{
              display: characterStatDetail.id === 0 ? 'none' : 'block',
            }}
          >
            <button
              value={characterStatDetail.id}
              onClick={(e) => handleSkillSelect(e, 'O')}
            >
              {'평타'} (O)
            </button>
            <button
              value={characterStatDetail.id}
              onClick={(e) => handleSkillSelect(e, 'A')}
            >
              {characterStatDetail.activeSkill} (A)
            </button>
            <button
              value={characterStatDetail.id}
              onClick={(e) => handleSkillSelect(e, 'U')}
            >
              {characterStatDetail.ultSkill} (U)
            </button>
          </div>
        </div>
      </div>
      <table
        className="TeamTable"
        style={{ border: '1px solid black', borderCollapse: 'collapse' }}
      >
        <tbody>
          <tr style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
            {frontLine.map((item) => {
              return (
                <td key={item.id}>
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        border:
                          selectedCharacterId === item.id
                            ? '2px solid red'
                            : '2px solid transparent',
                      }}
                    >
                      <img
                        src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                        style={{ width: '120px', position: 'relative' }}
                        alt={`${item.img}`}
                        onClick={
                          () =>
                            turnInformation.resultSpeed[0].id === item.id
                              ? onShowStatDetail(item.id)
                              : undefined
                          /*() => onShowStatDetail(item.id)*/
                        }
                      ></img>
                      <img
                        src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                        style={{
                          width: '120px',
                          display: 'none',
                          position: 'relative',
                        }}
                        alt={`${item.img}`}
                      ></img>
                    </div>
                    <div>
                      <div className="skillButton">
                        <div>패시브: {item.passiveSkill}</div>
                        <div>액티브: {item.activeSkill}</div>
                        <div>궁극기: {item.ultSkill}</div>
                      </div>
                      <div className="statBar">
                        <p>
                          체력: {item.HPcurrent}/{item.HPstat}
                        </p>
                        <p>호감도: {item.lovePointStack}</p>
                      </div>
                    </div>
                  </div>
                </td>
              );
            })}
          </tr>
          <tr style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
            {midLine.map((item) => {
              return (
                <td key={item.id}>
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        border:
                          selectedCharacterId === item.id
                            ? '2px solid red'
                            : '2px solid transparent',
                      }}
                    >
                      <img
                        src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                        style={{ width: '120px', position: 'relative' }}
                        alt={`${item.img}`}
                        onClick={
                          () =>
                            turnInformation.resultSpeed[0].id === item.id
                              ? onShowStatDetail(item.id)
                              : undefined
                          /*() => onShowStatDetail(item.id)*/
                        }
                      ></img>
                      <img
                        src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                        style={{
                          width: '120px',
                          display: 'none',
                          position: 'relative',
                        }}
                        alt={`${item.img}`}
                      ></img>
                    </div>
                    <div>
                      <div className="skillButton">
                        <div>패시브: {item.passiveSkill}</div>
                        <div>액티브: {item.activeSkill}</div>
                        <div>궁극기: {item.ultSkill}</div>
                      </div>
                      <div className="statBar">
                        <p>
                          체력: {item.HPcurrent}/{item.HPstat}
                        </p>
                        <p>호감도: {item.lovePointStack}</p>
                      </div>
                    </div>
                  </div>
                </td>
              );
            })}
          </tr>
          <tr style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
            {backLine.map((item) => {
              return (
                <td key={item.id}>
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        border:
                          selectedCharacterId === item.id
                            ? '2px solid red'
                            : '2px solid transparent',
                      }}
                    >
                      <img
                        src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                        style={{ width: '120px', position: 'relative' }}
                        alt={`${item.img}`}
                        onClick={
                          () =>
                            turnInformation.resultSpeed[0].id === item.id
                              ? onShowStatDetail(item.id)
                              : undefined
                          /*() => onShowStatDetail(item.id)*/
                        }
                      ></img>
                      <img
                        src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                        style={{
                          width: '120px',
                          display: 'none',
                          position: 'relative',
                        }}
                        alt={`${item.img}`}
                      ></img>
                    </div>
                    <div>
                      <div className="skillButton">
                        <div>패시브: {item.passiveSkill}</div>
                        <div>액티브: {item.activeSkill}</div>
                        <div>궁극기: {item.ultSkill}</div>
                      </div>
                      <div className="statBar">
                        <p>
                          체력: {item.HPcurrent}/{item.HPstat}
                        </p>
                        <p>호감도: {item.lovePointStack}</p>
                      </div>
                    </div>
                  </div>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default CombatDemo3;
