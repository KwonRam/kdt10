import { useState } from 'react';
import { useEffect } from 'react';
//덱 데이터를 불러들임
//덱의 구성 - 5인 3열 3행 배치
//캐릭터 이름, HP, 물리방어력, 마법방어력, 공격력, 속도(회피), 명중, 마법딜러인지 물리딜러인지, 부관인지 아닌지, 전투 시작 전 호감도, 캐릭터 이미지(링크)

//맵 데이터를 불러들임
//적 데이터를 불러들임

function CombatDemo() {
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
  //스탯 가져오기
  //front 0 mid 1 back 2
  //left 0 center 1 right 2
  // 1(0,0)2(1,0)3(2,0)
  // 4(0,1)5(1,1)6(2,1)
  // 7(0,2)8(1,2)9(2,2)

  //(0,0)FrontLeft
  /*const [charFrontLeftData, setCharFrontLeftData] = useState({
    id: 0,
    HP: 0,
    physicResist: 0,
    magicResist: 0,
    attack: 0,
    speed: 0,
    accuracy: 0,
    loveStack: 0,
  });*/
  /*const FrontLeftTemp = myDeckData.filter((myDeckData) => myDeckData.Line === 'Front' && myDeckData.Position === 'Left');
  setCharFrontLeftData({
    id: FrontLeftTemp.id,
    HP: FrontLeftTemp.HPstat,
    physicResist: FrontLeftTemp.physicResist,
    magicResist: FrontLeftTemp.magicResist,
    attack: FrontLeftTemp.attack,
    speed: FrontLeftTemp.speed,
    accuracy: FrontLeftTemp.accuracy,
    loveStack: FrontLeftTemp.lovePointCurrent,
  })*/
  /*const [charFrontLeftHP, setCharFrontLeftHP] = useState(0);
  const [charFrontLeftPhysicResist, setCharFrontLeftPhysicResist] = useState(0);
  const [charFrontLeftMagicResist, setCharFrontLeftMagicResist] = useState(0);
  const [charFrontLeftAttack, setCharFrontLeftAttack] = useState(0);
  const [charFrontLeftSpeed, setCharFrontLeftSpeed] = useState(0);
  const [charFrontLeftAccuracy, setCharFrontLeftAccuracy] = useState(0);
  const [charFrontLeftLoveStack, setCharFrontLeftLoveStack] = useState(0);*/

  //(1,0)FrontCenter

  /*const [charFrontCenterData, setCharFrontCenterData] = useState({
    id: 0,
    HP: 0,
    physicResist: 0,
    magicResist: 0,
    attack: 0,
    speed: 0,
    accuracy: 0,
    loveStack: 0,
  });*/

  /*const [charFrontCenterHP, setCharFrontCenterHP] = useState(0);
  const [charFrontCenterPhysicResist, setCharFrontCenterPhysicResist] =
    useState(0);
  const [charFrontCenterMagicResist, setCharFrontCenterMagicResist] =
    useState(0);
  const [charFrontCenterAttack, setCharFrontCenterAttack] = useState(0);
  const [charFrontCenterSpeed, setCharFrontCenterSpeed] = useState(0);
  const [charFrontCenterAccuracy, setCharFrontCenterAccuracy] = useState(0);
  const [charFrontCenterLoveStack, setCharFrontCenterLoveStack] = useState(0);*/

  //(2,0)FrontRight

  /*const [charFrontRightData, setCharFrontRightData] = useState({
    id: 0,
    HP: 0,
    physicResist: 0,
    magicResist: 0,
    attack: 0,
    speed: 0,
    accuracy: 0,
    loveStack: 0,
  });*/

  /*const [charFrontRightHP, setCharFrontRightHP] = useState(0);
  const [charFrontRightPhysicResist, setCharFrontRightPhysicResist] =
    useState(0);
  const [charFrontRightMagicResist, setCharFrontRightMagicResist] = useState(0);
  const [charFrontRightAttack, setCharFrontRightAttack] = useState(0);
  const [charFrontRightSpeed, setCharFrontRightSpeed] = useState(0);
  const [charFrontRightAccuracy, setCharFrontRightAccuracy] = useState(0);
  const [charFrontRightLoveStack, setCharFrontRightLoveStack] = useState(0);*/

  //(0,1)MidLeft
  /*const [charMidLeftData, setCharMidLeftData] = useState({
    id: 0,
    HP: 0,
    physicResist: 0,
    magicResist: 0,
    attack: 0,
    speed: 0,
    accuracy: 0,
    loveStack: 0,
  });*/

  /*const [charMidLeftHP, setCharMidLeftHP] = useState(0);
  const [charMidLeftPhysicResist, setCharMidLeftPhysicResist] = useState(0);
  const [charMidLeftMagicResist, setCharMidLeftMagicResist] = useState(0);
  const [charMidLeftAttack, setCharMidLeftAttack] = useState(0);
  const [charMidLeftSpeed, setCharMidLeftSpeed] = useState(0);
  const [charMidLeftAccuracy, setCharMidLeftAccuracy] = useState(0);
  const [charMidLeftLoveStack, setCharMidLeftLoveStack] = useState(0);*/

  //(1,1)MidCenter

  /*const [charMidCenterData, setCharMidCenterData] = useState({
    id: 0,
    HP: 0,
    physicResist: 0,
    magicResist: 0,
    attack: 0,
    speed: 0,
    accuracy: 0,
    loveStack: 0,
  });*/

  /*const [charMidCenterHP, setCharMidCenterHP] = useState(0);
  const [charMidCenterPhysicResist, setCharMidCenterPhysicResist] = useState(0);
  const [charMidCenterMagicResist, setCharMidCenterMagicResist] = useState(0);
  const [charMidCenterAttack, setCharMidCenterAttack] = useState(0);
  const [charMidCenterSpeed, setCharMidCenterSpeed] = useState(0);
  const [charMidCenterAccuracy, setCharMidCenterAccuracy] = useState(0);
  const [charMidCenterLoveStack, setCharMidCenterLoveStack] = useState(0);*/

  //(2,1)MidRight

  /* const [charMidRightData, setCharMidRightData] = useState({
    id: 0,
    HP: 0,
    physicResist: 0,
    magicResist: 0,
    attack: 0,
    speed: 0,
    accuracy: 0,
    loveStack: 0,
  });*/

  /*const [charMidRightHP, setCharMidRightHP] = useState(0);
  const [charMidRightPhysicResist, setCharMidRightPhysicResist] = useState(0);
  const [charMidRightMagicResist, setCharMidRightMagicResist] = useState(0);
  const [charMidRightAttack, setCharMidRightAttack] = useState(0);
  const [charMidRightSpeed, setCharMidRightSpeed] = useState(0);
  const [charMidRightAccuracy, setCharMidRightAccuracy] = useState(0);
  const [charMidRightLoveStack, setCharMidRightLoveStack] = useState(0);*/

  //(0,2)BackLeft

  /*const [charBackLeftData, setCharBackLeftData] = useState({
    id: 0,
    HP: 0,
    physicResist: 0,
    magicResist: 0,
    attack: 0,
    speed: 0,
    accuracy: 0,
    loveStack: 0,
  });*/

  /*const [charBackLeftHP, setCharBackLeftHP] = useState(0);
  const [charBackLeftPhysicResist, setCharBackLeftPhysicResist] = useState(0);
  const [charBackLeftMagicResist, setCharBackLeftMagicResist] = useState(0);
  const [charBackLeftAttack, setCharBackLeftAttack] = useState(0);
  const [charBackLeftSpeed, setCharBackLeftSpeed] = useState(0);
  const [charBackLeftAccuracy, setCharBackLeftAccuracy] = useState(0);
  const [charBackLeftLoveStack, setCharBackLeftLoveStack] = useState(0);*/

  //(1,2)BackCenter

  /*const [charBackCenterData, setCharBackCenterData] = useState({
    id: 0,
    HP: 0,
    physicResist: 0,
    magicResist: 0,
    attack: 0,
    speed: 0,
    accuracy: 0,
    loveStack: 0,
  });*/

  /*const [charBackCenterHP, setCharBackCenterHP] = useState(0);
  const [charBackCenterPhysicResist, setCharBackCenterPhysicResist] =
    useState(0);
  const [charBackCenterMagicResist, setCharBackCenterMagicResist] = useState(0);
  const [charBackCenterAttack, setCharBackCenterAttack] = useState(0);
  const [charBackCenterSpeed, setCharBackCenterSpeed] = useState(0);
  const [charBackCenterAccuracy, setCharBackCenterAccuracy] = useState(0);
  const [charBackCenterLoveStack, setCharBackCenterLoveStack] = useState(0);*/

  //(2,2)BackRight

  /*const [charBackRightData, setCharBackRightData] = useState({
    id: 0,
    HP: 0,
    physicResist: 0,
    magicResist: 0,
    attack: 0,
    speed: 0,
    accuracy: 0,
    loveStack: 0,
  });*/

  /*const [charBackRightHP, setCharBackRightHP] = useState(0);
  const [charBackRightPhysicResist, setCharBackRightPhysicResist] = useState(0);
  const [charBackRightMagicResist, setCharBackRightMagicResist] = useState(0);
  const [charBackRightAttack, setCharBackRightAttack] = useState(0);
  const [charBackRightSpeed, setCharBackRightSpeed] = useState(0);
  const [charBackRightAccuracy, setCharBackRightAccuracy] = useState(0);
  const [charBackRightLoveStack, setCharBackRightLoveStack] = useState(0);*/

  //상세 스탯 표시 함수
  const [characterStatDetail, setCharacterStatDetail] = useState({
    id: 1,
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
  const onShowStatDetail = (id) => {
    const newCharacterStatDetail = myDeckData.filter((item) => item.id === id);
    console.log(newCharacterStatDetail);
    setCharacterStatDetail(newCharacterStatDetail[0]);
  };
  //전투 개시 속도판정

  const [resultSpeed, setResultSpeed] = useState([
    {
      id: 0,
      charName: '',
      speed: 0,
    },
  ]);

  const allDeckData = myDeckData.concat(enemyDeckData);
  useEffect(() => {
    console.log('스피드 렌더링 좀 다시 해줘...', resultSpeed);
  }, [resultSpeed]);

  const [turnNumber, setTurnNumber] = useState(1);

  useEffect(() => {
    console.log('턴 렌더링 좀 다시 해줘...', turnNumber);
  }, [turnNumber]);
  //속도 우선도 판정
  const runCheckSpeed = () => {
    // 적과 아군 배열 합치기
    const speedCheck = allDeckData.map((item) => ({
      id: item.id,
      charName: item.charName,
      speed: item.speed + item.speed * Math.random() * 0.4, //속도판정공식
    }));
    const resultSpeedTemp = speedCheck.sort((a, b) => b.speed - a.speed);
    setResultSpeed(resultSpeedTemp);
    console.log('스피드 판정 끝', resultSpeed);
    console.log('리절트 스피드 임시', resultSpeedTemp);
    return resultSpeedTemp;
  };
  // 턴 정보

  const [skillButtons, setSkillButtons] = useState(<div></div>);

  const runEachTurn = async (resultSpeed) => {
    while (resultSpeed.length > 0) {
      const currentCharacterTemp = resultSpeed.shift();
      console.log(
        currentCharacterTemp.charName,
        'currentCharacterTemp.charName'
      );
      let selectedName = currentCharacterTemp.charName;
      console.log('아니왜안되는겨', selectedName);
      /*const currentCharacter = myDeckData.filter(
        (myDeckData) => myDeckData.charName === selectedName
      );*/
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

      if (currentCharacter.id < 7 && !currentCharacter.isEnemy) {
        //적인지 아닌지 검사
        for (let i = 0; i < myDeckData.length; i++) {
          if (myDeckData[i].charName === selectedName) {
            currentCharacter = myDeckData[i];
          }
        }
        console.log(currentCharacter.charName, '선택됨');
        const skillButtonsTemp = (
          <div>
            <button onClick={() => handleSkillSelect('O')}>{'평타'} (O)</button>
            <button onClick={() => handleSkillSelect('A')}>
              {currentCharacter.activeSkill} (A)
            </button>
            <button onClick={() => handleSkillSelect('U')}>
              {currentCharacter.ultSkill} (U)
            </button>
          </div>
        );
        setSkillButtons(skillButtonsTemp);
        //wait for Inputt(setSelectedSkill)

        const selectedSkillTemp = await waitForUserInput();

        setSelectedSkill(selectedSkillTemp);

        switch (selectedSkillTemp) {
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
            break;
          case 'U':
            console.log(
              `${currentCharacter.charName} uses ${currentCharacter.ultSkill}!`
            );

            // 해당 스킬에 대한 행동 로직 추가
            //run choosedChar[0].ultSkill
            break;
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
            // 기본 공격에 대한 행동 로직 추가
            //run choosedChar's autoAttack
            break;
          default:
            break;
        }
      } else {
        enemyAct();
      }
      setTurnNumber(turnNumber + 1);
      console.log('턴넘버 갱신이 안되냐 설마?', turnNumber);
    }
  };

  const [selectedSkill, setSelectedSkill] = useState('');
  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
  };
  const waitForUserInput = () => {
    return new Promise((resolve) => {
      const handleSkillSelectInside = (skill) => {
        setSelectedSkill(skill);
        resolve(skill);
      };
      // Set a timeout to resolve the Promise if the user takes too long
      setTimeout(() => {
        const defaultSkill = 'O'; // Default to basic attack
        handleSkillSelectInside(defaultSkill);
      }, 20000); // Set a timeout of 10 seconds (adjust as needed)
    });
  };

  const enemyAct = () => {
    //일단 전영중 행동만 대강 만들어둠
    const myDeckDataTemp = myDeckData;
    const enemyDeckDataTemp = enemyDeckData;
    myDeckDataTemp.map((item) => {
      item.HPcurrent -= 15;
    });
    enemyDeckDataTemp.map((item) => {
      item.physicResist += 4;
      item.magicResist += 4;
    });
  };
  //전투 실행
  const runCombat = async () => {
    //아군+적군 hp 데이터 받아오기
    //while enemyhp>0 && ourHP>0
    //checkSpeed
    //적의 턴이 아니라면 캐릭터 행동 실행
    //캐릭터의 턴이 끝날 때 resultSpeed.shift()첫번째 요소 꺼내기
    let HPCheckOur = 0;
    myDeckData.forEach((item) => {
      console.log(HPCheckOur, '+', item.HPstat);
      HPCheckOur = HPCheckOur + item.HPstat;
    });
    console.log('아군 첫 조회 HP', HPCheckOur);
    let HPCheckEnemy = 0;
    enemyDeckData.forEach((item) => {
      console.log(HPCheckEnemy, '+', item.HPstat);
      HPCheckEnemy = HPCheckEnemy + item.HPstat;
    });
    console.log('적군 첫 조회 HP', HPCheckEnemy);
    while (HPCheckEnemy > 0 && HPCheckOur > 0 && turnNumber < 16) {
      let resultSpeedTemp = runCheckSpeed();
      console.log('runCheckSpeed 실행');
      console.log(resultSpeedTemp);
      runEachTurn(resultSpeedTemp);
      console.log('runCheckSpeed 실행');
      myDeckData.forEach((item) => {
        HPCheckOur = HPCheckOur + item.HPcurrent;
      });
      console.log('아군 HP 결산', HPCheckOur);
      enemyDeckData.forEach((item) => {
        HPCheckEnemy = HPCheckEnemy + item.HPcurrent;
      });
      console.log('적군 HP 결산', HPCheckEnemy);
      HPCheckOur = 0;
      HPCheckEnemy = 0;
      console.log('HP 결산 초기화');
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
          style={{ width: '300px' }}
          alt="Boss img"
        ></img>
        <p>
          HP {enemyDeckData[0].HPcurrent}/{enemyDeckData[0].HPstat}
        </p>
      </div>
      <div className="InfoBox">
        <div>
          턴<p>규칙: 턴 내의 순서는 속도판정</p>
          <div onClick={() => runCombat()}>
            전투 시작-클릭시 첫 턴의 속도 판정
          </div>
          <div>{turnNumber}번째 턴</div>
          <div>
            턴 순서 결과:
            <div id="speedResultBox">
              {resultSpeed.map((i) => {
                return <div key={i.id}>{i.name}</div>;
              })}
            </div>
          </div>
        </div>
        <div>
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
        </div>
        <div id="putSkillButton">스킬 {skillButtons}</div>
        <div>{selectedSkill}을 선택하였습니다</div>
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
                    <img
                      src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                      style={{ width: '120px' }}
                      alt={`${item.img}`}
                      onClick={() => onShowStatDetail(item.id)}
                    ></img>
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
                    <img
                      src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                      style={{ width: '120px' }}
                      alt={`${item.img}`}
                      onClick={() => onShowStatDetail(item.id)}
                    ></img>
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
                    <img
                      src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                      style={{ width: '120px' }}
                      alt={`${item.img}`}
                      onClick={() => onShowStatDetail(item.id)}
                    ></img>
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

export default CombatDemo;
