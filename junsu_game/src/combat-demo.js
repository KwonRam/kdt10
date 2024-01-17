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
      attack: 6,
      speed: 4,
      accuracy: 0.8,
      evasion: 0.1,
      critical: 0.1,
      critDamageRate: 1.8,
      isMagic: false,
      isAdjutant: false,
      isEnemy: false,
      passiveSkill: '바람의 힘으로!',
      activeSkillFirst: '최고의 응원!',
      activeSkillSecond: '한 번 더 너에게',
      ultSkill: '우리는 하나야!',
      buff: [
        {
          buffNumber: 0,
          buffType: '',
          buffFrom: '',
          buffStat: '',
          buffAmmount: 0,
          buffDuration: 0,
        },
      ],
      debuff: [
        {
          debuffNumber: 0,
          debuffType: '',
          debuffFrom: '',
          debuffStat: '',
          debuffAmmount: 0,
          debuffDuration: 0,
        },
      ],
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
      accuracy: 0.8,
      evasion: 0.1,
      critical: 0.1,
      critDamageRate: 1.7,
      isMagic: true,
      isAdjutant: false,
      isEnemy: false,
      passiveSkill: '젊은 멘토',
      activeSkillFirst: '타임아웃',
      activeSkillSecond: '멤버 교체',
      ultSkill: '끝난 줄 알았지?',
      buff: [
        {
          buffNumber: 0,
          buffType: '',
          buffFrom: '',
          buffStat: '',
          buffAmmount: 0,
          buffDuration: 0,
        },
      ],
      debuff: [
        {
          debuffNumber: 0,
          debuffType: '',
          debuffFrom: '',
          debuffStat: '',
          debuffAmmount: 0,
          debuffDuration: 0,
        },
      ],
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
      attack: 8,
      speed: 5,
      accuracy: 0.9,
      evasion: 0.1,
      critical: 0.2,
      critDamageRate: 1.9,
      isMagic: true,
      isAdjutant: true,
      isEnemy: false,
      passiveSkill: '플레이 메이커',
      activeSkillFirst: '내만 믿어라',
      activeSkillSecond: '직접 할 차례다',
      ultSkill: '최연소 퇴물이라고?',
      buff: [
        {
          buffNumber: 0,
          buffType: '',
          buffFrom: '',
          buffStat: '',
          buffAmmount: 0,
          buffDuration: 0,
        },
      ],
      debuff: [
        {
          debuffNumber: 0,
          debuffType: '',
          debuffFrom: '',
          debuffStat: '',
          debuffAmmount: 0,
          debuffDuration: 0,
        },
      ],
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
      attack: 7,
      speed: 5,
      accuracy: 0.9,
      evasion: 0.2,
      critical: 0.2,
      critDamageRate: 2,
      isMagic: false,
      isAdjutant: false,
      isEnemy: false,
      passiveSkill: '넘어설 벽',
      activeSkillFirst: '찢어버리기',
      activeSkillSecond: '동기부여가 잘 돼',
      ultSkill: '이기게 해준다고!',
      buff: [
        {
          buffNumber: 0,
          buffType: '',
          buffFrom: '',
          buffStat: '',
          buffAmmount: 0,
          buffDuration: 0,
        },
      ],
      debuff: [
        {
          debuffNumber: 0,
          debuffType: '',
          debuffFrom: '',
          debuffStat: '',
          debuffAmmount: 0,
          debuffDuration: 0,
        },
      ],
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
      attack: 7,
      speed: 3,
      accuracy: 0.8,
      evasion: 0.2,
      critical: 0.2,
      critDamageRate: 1.9,
      isMagic: true,
      isAdjutant: false,
      isEnemy: false,
      passiveSkill: '드래곤의 피지컬',
      activeSkillFirst: '드래곤 스매셔',
      activeSkillSecond: '하늘을 향해',
      ultSkill: '거짓말쟁이가 아니야',
      buff: [
        {
          buffNumber: 0,
          buffType: '',
          buffFrom: '',
          buffStat: '',
          buffAmmount: 0,
          buffDuration: 0,
        },
      ],
      debuff: [
        {
          debuffNumber: 0,
          debuffType: '',
          debuffFrom: '',
          debuffStat: '',
          debuffAmmount: 0,
          debuffDuration: 0,
        },
      ],
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
      physicResist: 5,
      magicResist: 4,
      attack: 3,
      speed: 4,
      accuracy: 0.8,
      evasion: 0.2,
      critical: 0.3,
      critDamageRate: 1.8,
      isMagic: false,
      isAdjutant: false,
      isEnemy: false,
      passiveSkill: '늑대정신',
      activeSkillFirst: '최고의 디펜더',
      activeSkillSecond: '살아남을 거야',
      ultSkill: '사기(士氣) 진작(振作)',
      buff: [
        {
          buffNumber: 0,
          buffType: '',
          buffFrom: '',
          buffStat: '',
          buffAmmount: 0,
          buffDuration: 0,
        },
      ],
      debuff: [
        {
          debuffNumber: 0,
          debuffType: '',
          debuffFrom: '',
          debuffStat: '',
          debuffAmmount: 0,
          debuffDuration: 0,
        },
      ],
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
      physicResist: 4,
      magicResist: 3,
      attack: 11,
      speed: 5,
      accuracy: 0.9,
      evasion: 0.3,
      critical: 0.4,
      critDamageRate: 2.1,
      isMagic: false,
      isAdjutant: false,
      isEnemy: true,
      passiveSkill: '오염의 근원',
      activeSkillFirst: '어딜 가려고?',
      activeSkillSecond: '한심한 건 너잖아',
      ultSkill: '누가 계속 영웅하래!',
      buff: [
        {
          buffNumber: 0,
          buffType: '',
          buffFrom: '',
          buffStat: '',
          buffAmmount: 0,
          buffDuration: 0,
        },
      ],
      debuff: [
        {
          debuffNumber: 0,
          debuffType: '',
          debuffFrom: '',
          debuffStat: '',
          debuffAmmount: 0,
          debuffDuration: 0,
        },
      ],
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
    evasion: 0,
    critical: 0,
    critDamageRate: 0,
    isMagic: false,
    isAdjutant: false,
    isEnemy: false,
    passiveSkill: '',
    activeSkillFirst: '',
    activeSkillSecond: '',
    ultSkill: '',
    buff: [
      {
        buffNumber: 0,
        buffType: '',
        buffFrom: '',
        buffStat: '',
        buffAmmount: 0,
        buffDuration: 0,
      },
    ],
    debuff: [
      {
        debuffNumber: 0,
        debuffType: '',
        debuffFrom: '',
        debuffStat: '',
        debuffAmmount: 0,
        debuffDuration: 0,
      },
    ],
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
        charName: 'Buffer',
        speed: 0,
      },
    ],
  });

  const [alreadyAct, setAlreadyAct] = useState([]);

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
    resultSpeedTemp.push({
      id: 0,
      charName: 'Buffer',
      speed: 0,
    });
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

  //버프디버프

  const buffDebuffCheckOur = (myDeckDataTemp, currentCharacter) => {
    //버프 체크 아군
    myDeckDataTemp.forEach((item) => {
      item.buff.forEach((i) => {
        if (i.buffDuration > 0 && item.id === currentCharacter.id) {
          i.buffDuration--;
          console.log('buffDuration ', i.buffDuration);
        } else if (i.buffDuration === 0 && item.id === currentCharacter.id) {
          if (i.buffStat === 'attack') {
            item.attack = item.attack - i.buffAmmount;
          } else if (i.buffStat === 'physicResist') {
            item.physicResist = item.physicResist - i.buffAmmount;
          } else if (i.buffStat === 'magicResist') {
            item.magicResist = item.magicResist - i.buffAmmount;
          } else if (i.buffStat === 'speed') {
            item.speed = item.speed - i.buffAmmount;
          } else if (i.buffStat === 'accuracy') {
            item.accuracy = item.accuracy - i.buffAmmount;
          } else if (i.buffStat === 'evasion') {
            item.evasion = item.evasion - i.buffAmmount;
          } else if (i.buffStat === 'critical') {
            item.critical = item.critical - i.buffAmmount;
          } else if (i.buffStat === 'critDamageRate') {
            item.critDamageRate = item.critDamageRate - i.buffAmmount;
          } else {
            console.log('error');
          }
        }
      });
    });
    //디버프 체크 아군
    myDeckDataTemp.forEach((item) => {
      item.debuff.forEach((i) => {
        if (i.debuffDuration > 0 && item.id === currentCharacter.id) {
          i.debuffDuration--;
          console.log('debuffDuration ', i.debuffDuration);
        } else if (i.debuffDuration === 0 && item.id === currentCharacter.id) {
          if (i.debuffStat === 'attack') {
            item.attack = item.attack - i.debuffAmmount;
          } else if (i.debuffStat === 'physicResist') {
            item.physicResist = item.physicResist - i.debuffAmmount;
          } else if (i.debuffStat === 'magicResist') {
            item.magicResist = item.magicResist - i.debuffAmmount;
          } else if (i.debuffStat === 'speed') {
            item.speed = item.speed - i.debuffAmmount;
          } else if (i.debuffStat === 'accuracy') {
            item.accuracy = item.accuracy - i.debuffAmmount;
          } else if (i.debuffStat === 'evasion') {
            item.evasion = item.evasion - i.debuffAmmount;
          } else if (i.debuffStat === 'critical') {
            item.critical = item.critical - i.debuffAmmount;
          } else if (i.debuffStat === 'critDamageRate') {
            item.critDamageRate = item.critDamageRate - i.debuffAmmount;
          } else if (i.debuffStat === 'bleed') {
            item.HPcurrent = item.HPcurrent - i.debuffAmmount;
          } else if (i.debuffStat === 'poison') {
            item.HPcurrent = item.HPcurrent - i.debuffAmmount;
          } else {
            console.log('error');
          }
        }
      });
    });

    return myDeckDataTemp;
  };
  const buffDebuffCheckEnemy = (enemyDeckDataTemp, currentCharacter) => {
    //버프 체크 적군
    enemyDeckDataTemp.forEach((item) => {
      item.buff.forEach((i) => {
        if (i.buffDuration > 0 && item.id === currentCharacter.id) {
          i.buffDuration--;
          console.log('buffDuration ', i.buffDuration);
        } else if (i.buffDuration === 0 && item.id === currentCharacter.id) {
          if (i.buffStat === 'attack') {
            item.attack = item.attack - i.buffAmmount;
          } else if (i.buffStat === 'physicResist') {
            item.physicResist = item.physicResist - i.buffAmmount;
          } else if (i.buffStat === 'magicResist') {
            item.magicResist = item.magicResist - i.buffAmmount;
          } else if (i.buffStat === 'speed') {
            item.speed = item.speed - i.buffAmmount;
          } else if (i.buffStat === 'accuracy') {
            item.accuracy = item.accuracy - i.buffAmmount;
          } else if (i.buffStat === 'evasion') {
            item.evasion = item.evasion - i.buffAmmount;
          } else if (i.buffStat === 'critical') {
            item.critical = item.critical - i.buffAmmount;
          } else if (i.buffStat === 'critDamageRate') {
            item.critDamageRate = item.critDamageRate - i.buffAmmount;
          } else {
            console.log('error');
          }
        }
      });
    });
    //디버프 체크 적군
    enemyDeckDataTemp.forEach((item) => {
      item.debuff.forEach((i) => {
        if (i.debuffDuration > 0 && item.id === currentCharacter.id) {
          i.debuffDuration--;
          console.log('debuffDuration ', i.debuffDuration);
        } else if (i.debuffDuration === 0 && item.id === currentCharacter.id) {
          if (i.debuffStat === 'attack') {
            item.attack = item.attack - i.debuffAmmount;
          } else if (i.debuffStat === 'physicResist') {
            item.physicResist = item.physicResist - i.debuffAmmount;
          } else if (i.debuffStat === 'magicResist') {
            item.magicResist = item.magicResist - i.debuffAmmount;
          } else if (i.debuffStat === 'speed') {
            item.speed = item.speed - i.debuffAmmount;
          } else if (i.debuffStat === 'accuracy') {
            item.accuracy = item.accuracy - i.debuffAmmount;
          } else if (i.debuffStat === 'evasion') {
            item.evasion = item.evasion - i.debuffAmmount;
          } else if (i.debuffStat === 'critical') {
            item.critical = item.critical - i.debuffAmmount;
          } else if (i.debuffStat === 'critDamageRate') {
            item.critDamageRate = item.critDamageRate - i.debuffAmmount;
          } else if (i.debuffStat === 'bleed') {
            item.HPcurrent = item.HPcurrent - i.debuffAmmount;
          } else if (i.debuffStat === 'poison') {
            item.HPcurrent = item.HPcurrent - i.debuffAmmount;
          } else {
            console.log('error');
          }
        }
      });
    });

    return enemyDeckDataTemp;
  };

  const damageCalculation = (selectedCharacter, selectedEnemy) => {
    //변수설정
    let myCharacter,
      enemyCharacter = {
        id: 0,
        charName: '',
        HPcurrent: 0,
        HPstat: 0,
        physicResist: 0,
        magicResist: 0,
        attack: 0,
        speed: 0,
        accuracy: 0,
        evasion: 0,
        critical: 0,
        critDamageRate: 0,
        isMagic: false,
        isAdjutant: false,
        isEnemy: false,
        passiveSkill: '',
        activeSkillFirst: '',
        activeSkillSecond: '',
        ultSkill: '',
        buff: [
          {
            buffNumber: 0,
            buffType: '',
            buffFrom: '',
            buffStat: '',
            buffAmmount: 0,
            buffDuration: 0,
          },
        ],
        debuff: [
          {
            debuffNumber: 0,
            debuffType: '',
            debuffFrom: '',
            debuffStat: '',
            debuffAmmount: 0,
            debuffDuration: 0,
          },
        ],
        lovePointCurrent: 0,
        Line: '',
        Position: '',
        img: '',
      };
    myCharacter = selectedCharacter;
    enemyCharacter = selectedEnemy;
    let finalDamage = 0;

    //데미지계산을 합시다
    // 명중 판정
    const hitChance = selectedCharacter.accuracy - selectedEnemy.evasion;
    const hit = Math.random() < hitChance;

    if (hit) {
      // 명중했을 때 데미지 계산
      let damage = selectedCharacter.attack;
      console.log('공격력 스탯 ', damage);

      // 크리티컬 여부 판정
      let criticalChance = selectedCharacter.critical;
      const critical = Math.random() < criticalChance;

      if (critical) {
        // 크리티컬 데미지 적용
        damage *= selectedCharacter.critDamageRate; // 예시로 크리티컬일 때 데미지를 2배로 증가시킴
        console.log('critical');
      }

      // 방어력 선언
      let defense = 0;

      // 방어 수치에 따른 데미지 감소
      if (selectedCharacter.isMagic === true) {
        defense = selectedEnemy.magicResist;
        console.log('마법방어 ', defense);
      } else {
        defense = selectedEnemy.physicResist;
        console.log('물리방어 ', defense);
      }

      //데미지 공식
      //대미지 = 공격력 * (1 - 방어율) - 방어상수
      //방어율 = 방어력 / (1 + 방어력)
      //방어상수 계산은 어케하지
      let defenseConstant = defense - damage; //방어상수
      console.log('왜이러는겨 ', defenseConstant);
      //defenseConstant = Math.max(0, defenseConstant);
      console.log(defenseConstant, '방어상수');

      let defenseRate = defense / (1 + defense); //방어율
      console.log(defenseRate, '방어율');
      damage =
        damage * (1 - defenseRate) -
        defenseConstant * 0.4 +
        1 +
        2 * Math.random(); //데미지계산

      // 음수 데미지 방지
      damage = Math.max(0, damage);

      // 데미지를 정수로 소숫점 0.75 이상 올림
      let damageFloored = Math.floor(damage);
      if (damage - damageFloored < 0.7) {
        damage = damageFloored;
        console.log('버림 ', damage);
      } else {
        damage = Math.ceil(damage);
        console.log('올림 ', damage);
      }

      if (damage === 0) {
        damage = 1;
        console.log('데미지는 0이 될수 없음 ', damage);
      }
      //최종 데미지
      finalDamage = damage;
      console.log('최종 데미지 ', finalDamage);

      // 타겟의 현재 HP 차감
      //enemyCharacter.HPcurrent -= damage;

      // 음수 HP 방지
      //enemyCharacter.HPcurrent = Math.max(0, enemyCharacter.HPcurrent);
    } else {
      finalDamage = 0;
      console.log('회피');
    }

    // 타겟의 현재 HP 차감
    enemyCharacter.HPcurrent -= finalDamage;

    // 음수 HP 방지
    enemyCharacter.HPcurrent = Math.max(0, enemyCharacter.HPcurrent);
    //
    return [myCharacter, enemyCharacter];
  };

  const handleSkillSelect = (e, selectedSkill) => {
    let currentCharacter,
      currentCharacterReset = {
        id: 0,
        charName: '',
        HPcurrent: 0,
        HPstat: 0,
        physicResist: 0,
        magicResist: 0,
        attack: 0,
        speed: 0,
        accuracy: 0,
        evasion: 0,
        critical: 0,
        critDamageRate: 0,
        isMagic: false,
        isAdjutant: false,
        isEnemy: false,
        passiveSkill: '',
        activeSkillFirst: '',
        activeSkillSecond: '',
        ultSkill: '',
        buff: [
          {
            buffNumber: 0,
            buffType: '',
            buffFrom: '',
            buffStat: '',
            buffAmmount: 0,
            buffDuration: 0,
          },
        ],
        debuff: [
          {
            debuffNumber: 0,
            debuffType: '',
            debuffFrom: '',
            debuffStat: '',
            debuffAmmount: 0,
            debuffDuration: 0,
          },
        ],
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
      case 'A1':
        console.log(
          `${currentCharacter.charName} uses ${currentCharacter.activeSkillFirst}!`
        );
        // 해당 스킬에 대한 행동 로직 추가
        //run choosedChar[0].activeSkill
        let myDeckDataTempA1 = myDeckData;
        let enemyDeckDataTempA1 = enemyDeckData;
        if (currentCharacter.charName === '정희찬') {
          myDeckDataTempA1.forEach((item) => {
            item.buff.push({
              buffNumber: item.buff.length,
              buffType: 'attackBuffHeeChan',
              buffFrom: '정희찬',
              buffStat: 'attack',
              buffAmmount: 4,
              buffDuration: 4,
            });
          });
          myDeckDataTempA1.forEach((item) => {
            item.attack += 4;
          });
        } else if (currentCharacter.charName === '이현성') {
          myDeckDataTempA1.forEach((item) => {
            if (item.HPcurrent + 5 > item.HPstat) {
              item.HPcurrent = item.HPstat;
            } else {
              item.HPcurrent += 5;
            }
          });
        } else if (currentCharacter.charName === '공태성') {
          enemyDeckDataTempA1.forEach((item) => {
            item.HPcurrent -= 15;
          });
        } else if (currentCharacter.charName === '최종수') {
          enemyDeckDataTempA1.forEach((item) => {
            item.physicResist -= 2;
            item.HPcurrent -= 10;
          });
        } else if (currentCharacter.charName === '진재유') {
          enemyDeckDataTempA1.forEach((item) => {
            item.magicResist -= 3;
            item.HPcurrent -= 12;
          });
        } else if (currentCharacter.charName === '전영중') {
          myDeckDataTempA1.forEach((item) => {
            item.buff.push({
              buffNumber: item.buff.length,
              buffType: 'speedBuffYoungJung',
              buffFrom: '전영중',
              buffStat: 'speed',
              buffAmmount: 2,
              buffDuration: 3,
            });
          });
          myDeckDataTempA1.forEach((item) => {
            item.speed += 2;
          });
        } else {
          console.log('error');
        }
        //버프디버프 체크 아군
        myDeckDataTempA1 = buffDebuffCheckOur(
          myDeckDataTempA1,
          currentCharacter
        );
        //버프디버프 체크 적군
        enemyDeckDataTempA1 = buffDebuffCheckEnemy(
          enemyDeckDataTempA1,
          currentCharacter
        );
        //set
        setMyDeckData(myDeckDataTempA1);
        setEnemyDeckData(enemyDeckDataTempA1);
        //초기화
        setCharacterStatDetail(currentCharacterReset);
        //행동한 아군 빼두기
        const actCharA1 = turnInformation.resultSpeed.shift();
        //
        let alreadyActTempA1 = alreadyAct;
        alreadyActTempA1.push(actCharA1);
        setAlreadyAct(alreadyActTempA1);
        //
        console.log('턴인포', turnInformation.resultSpeed);
        console.log('행동한 아군 ', actCharA1);
        console.log('행동한 아군 목록 ', alreadyAct);
        //return
        return turnInformation;
      case 'A2':
        console.log(
          `${currentCharacter.charName} uses ${currentCharacter.activeSkillSecond}!`
        );
        let myDeckDataTempA2 = myDeckData;
        let enemyDeckDataTempA2 = enemyDeckData;
        //버프디버프 체크 아군
        myDeckDataTempA2 = buffDebuffCheckOur(
          myDeckDataTempA2,
          currentCharacter
        );
        //버프디버프 체크 적군
        enemyDeckDataTempA2 = buffDebuffCheckEnemy(
          enemyDeckDataTempA2,
          currentCharacter
        );
        //set
        setMyDeckData(myDeckDataTempA2);
        setEnemyDeckData(enemyDeckDataTempA2);
        //초기화
        setCharacterStatDetail(currentCharacterReset);
        //행동한 아군 빼두기
        const actCharA2 = turnInformation.resultSpeed.shift();
        //
        let alreadyActTempA2 = alreadyAct;
        alreadyActTempA2.push(actCharA2);
        setAlreadyAct(alreadyActTempA2);
        //
        console.log('턴인포', turnInformation.resultSpeed);
        console.log('행동한 아군 ', actCharA2);
        console.log('행동한 아군 목록 ', alreadyAct);
        //return
        return turnInformation;
      case 'U':
        console.log(
          `${currentCharacter.charName} uses ${currentCharacter.ultSkill}!`
        );
        let myDeckDataTempU = myDeckData;
        let enemyDeckDataTempU = enemyDeckData;
        // 해당 스킬에 대한 행동 로직 추가
        //run choosedChar[0].ultSkill
        //버프디버프 체크 아군
        myDeckDataTempU = buffDebuffCheckOur(myDeckDataTempU, currentCharacter);
        //버프디버프 체크 적군
        enemyDeckDataTempU = buffDebuffCheckEnemy(
          enemyDeckDataTempU,
          currentCharacter
        );
        //set
        setMyDeckData(myDeckDataTempU);
        setEnemyDeckData(enemyDeckDataTempU);
        //초기화
        setCharacterStatDetail(currentCharacterReset);
        //행동한 아군 빼두기
        const actCharU = turnInformation.resultSpeed.shift();
        //
        let alreadyActTempU = alreadyAct;
        alreadyActTempU.push(actCharU);
        setAlreadyAct(alreadyActTempU);
        //
        console.log('턴인포', turnInformation.resultSpeed);
        console.log('행동한 아군 ', actCharU);
        console.log('행동한 아군 목록 ', alreadyAct);
        //return
        return turnInformation;
      case 'O':
        console.log(
          `${currentCharacter.charName} attacks with a basic attack!`
        );
        let myDeckDataTempO = myDeckData;
        let enemyDeckDataTempO = enemyDeckData;
        if (currentCharacter.id < 7) {
          enemyDeckDataTempO.forEach((item) => {
            [currentCharacter, item] = damageCalculation(
              currentCharacter,
              item
            );
            console.log(
              `${currentCharacter.charName}이 ${currentCharacter.attack}의 공격력으로 평타를 친 결과 적의 HP가 ${item.HPcurrent}으로 되었습니다.`
            );
          });
        } else {
          console.log('error');
        }
        //버프디버프 체크 아군
        myDeckDataTempO = buffDebuffCheckOur(myDeckDataTempO, currentCharacter);
        //버프디버프 체크 적군
        enemyDeckDataTempO = buffDebuffCheckEnemy(
          enemyDeckDataTempO,
          currentCharacter
        );
        //set
        setMyDeckData(myDeckDataTempO);
        setEnemyDeckData(enemyDeckDataTempO);
        //초기화
        setCharacterStatDetail(currentCharacterReset);
        //행동한 아군 빼두기
        const actCharO = turnInformation.resultSpeed.shift();
        //
        let alreadyActTempO = alreadyAct;
        alreadyActTempO.push(actCharO);
        setAlreadyAct(alreadyActTempO);
        //
        console.log('턴인포 ', turnInformation.resultSpeed);
        console.log('행동한 아군 ', actCharO);
        console.log('행동한 아군 목록 ', alreadyAct);
        //return
        return turnInformation;
      case 'E':
        console.log('enemy attack');
        let myDeckDataTempE = myDeckData;
        let enemyDeckDataTempE = enemyDeckData;
        //버프디버프 체크 아군
        myDeckDataTempE = buffDebuffCheckOur(myDeckDataTempE, currentCharacter);
        //버프디버프 체크 적군
        enemyDeckDataTempE = buffDebuffCheckEnemy(
          enemyDeckDataTempE,
          currentCharacter
        );
        //set
        setMyDeckData(myDeckDataTempE);
        setEnemyDeckData(enemyDeckDataTempE);
        //초기화
        setCharacterStatDetail(currentCharacterReset);
        //행둥한 적 빼두기
        turnInformation.resultSpeed.shift();
        console.log('턴인포', turnInformation.resultSpeed);
        //return
        return turnInformation;
      default:
        //초기화
        setCharacterStatDetail(currentCharacterReset);
        //행동한 캐릭터 빼두기
        turnInformation.resultSpeed.shift();
        console.log('턴인포', turnInformation.resultSpeed);
        //return
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
      <div className="InfoBox" style={{ width: '350px' }}>
        <div>
          턴 정보 {`(규칙: 턴 내 행동 순서는 속도로 판정)`}
          <div
            style={{
              border:
                turnInformation.resultSpeed.length === 0 ||
                turnInformation.resultSpeed[0].id === 0
                  ? '2px solid red'
                  : '2px solid transparent',
            }}
            onClick={() =>
              turnInformation.resultSpeed[0].charName === 'Buffer' ||
              turnInformation.turnNumber === 0
                ? loadCheckSpeed()
                : undefined
            }
          >
            전투 시작-클릭시 "{turnInformation.turnNumber + 1}"턴의 속도 판정
          </div>
          <div>
            {turnInformation.turnNumber === 0
              ? '전투 시작 전 입니다'
              : `${turnInformation.turnNumber}번째 턴 입니다`}
          </div>
          <div style={{ height: '200px' }}>
            턴 순서 결과:
            <div id="speedResultBox">
              {turnInformation.resultSpeed.map((i) => {
                return (
                  <div
                    key={i.id}
                    style={{
                      display: i.charName === 'Buffer' ? 'none' : 'block',
                    }}
                  >
                    {i.charName}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div style={{ height: '630px', border: '2px solid red' }}>
          스탯 정보
          <div>이름 {characterStatDetail.charName}</div>
          <div>
            HP {characterStatDetail.HPcurrent}/{characterStatDetail.HPstat}
          </div>
          <div>데미지 유형 {characterStatDetail.isMagic ? '마법' : '물리'}</div>
          <div>물리방어 {characterStatDetail.physicResist}</div>
          <div>마법방어 {characterStatDetail.magicResist}</div>
          <div>공격력 {characterStatDetail.attack}</div>
          <div>속도 {characterStatDetail.speed}</div>
          <div>명중 {characterStatDetail.accuracy}</div>
          <div>회피 {characterStatDetail.evasion}</div>
          <div>크리티컬 확률 {characterStatDetail.critical}</div>
          <div>크리티컬 데미지 {characterStatDetail.critDamageRate}</div>
          <p>스킬</p>
          <div
            style={{
              display:
                characterStatDetail.charName ===
                turnInformation.resultSpeed[0].charName
                  ? 'block'
                  : 'none',
            }}
          >
            <button
              value={characterStatDetail.id}
              onClick={(e) => handleSkillSelect(e, 'O')}
            >
              {'평타'} (O)
            </button>
            <br></br>
            <button
              value={characterStatDetail.id}
              onClick={(e) => handleSkillSelect(e, 'A1')}
            >
              {characterStatDetail.activeSkillFirst} (A1)
            </button>
            <br></br>
            <button
              value={characterStatDetail.id}
              onClick={(e) => handleSkillSelect(e, 'A2')}
            >
              {characterStatDetail.activeSkillSecond} (A2)
            </button>
            <br></br>
            <button
              value={characterStatDetail.id}
              onClick={(e) => handleSkillSelect(e, 'U')}
            >
              {characterStatDetail.ultSkill} (U)
            </button>
          </div>
          <p>버프</p>
          {characterStatDetail.buff.map((item) => {
            return (
              <div
                key={item.buffNumber}
                style={{
                  display:
                    item.buffNumber === 0 || item.buffDuration === 0
                      ? 'none'
                      : 'block',
                }}
              >
                {item.buffDuration}턴 동안 {item.buffAmmount}만큼
                {''} {item.buffStat}을 버프 - from {item.buffFrom}
              </div>
            );
          })}
          <p>디버프</p>
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
                          turnInformation.resultSpeed[0].id === item.id
                            ? '2px solid red'
                            : '2px solid transparent',
                      }}
                    >
                      <img
                        src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                        style={{ width: '120px', position: 'relative' }}
                        alt={`${item.img}`}
                        onClick={() => onShowStatDetail(item.id)}
                      ></img>
                    </div>
                    <div>
                      <div className="skillButton">
                        <div>패시브: {item.passiveSkill}</div>
                        <div>액티브1: {item.activeSkillFirst}</div>
                        <div>액티브2: {item.activeSkillSecond}</div>
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
                          turnInformation.resultSpeed[0].id === item.id
                            ? '2px solid red'
                            : '2px solid transparent',
                      }}
                    >
                      <img
                        src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                        style={{ width: '120px', position: 'relative' }}
                        alt={`${item.img}`}
                        onClick={() => onShowStatDetail(item.id)}
                      ></img>
                    </div>
                    <div>
                      <div className="skillButton">
                        <div>패시브: {item.passiveSkill}</div>
                        <div>액티브1: {item.activeSkillFirst}</div>
                        <div>액티브2: {item.activeSkillSecond}</div>
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
                          turnInformation.resultSpeed[0].id === item.id
                            ? '2px solid red'
                            : '2px solid transparent',
                      }}
                    >
                      <img
                        src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                        style={{ width: '120px', position: 'relative' }}
                        alt={`${item.img}`}
                        onClick={() => onShowStatDetail(item.id)}
                      ></img>
                    </div>
                    <div>
                      <div className="skillButton">
                        <div>패시브: {item.passiveSkill}</div>
                        <div>액티브1: {item.activeSkillFirst}</div>
                        <div>액티브2: {item.activeSkillSecond}</div>
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
