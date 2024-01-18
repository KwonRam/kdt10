import { useState } from 'react';
import { useEffect } from 'react';
import { dropNumber } from './utils/util';
//덱 데이터를 불러들임
//덱의 구성 - 5인 3열 3행 배치
//캐릭터 이름, HP, 물리방어력, 마법방어력, 공격력, 속도(회피), 명중, 마법딜러인지 물리딜러인지, 부관인지 아닌지, 전투 시작 전 호감도, 캐릭터 이미지(링크)

//맵 데이터를 불러들임
//적 데이터를 불러들임

function CombatDemoUpload() {
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
      isSixMan: true,
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
      Position: 6,
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
      isSixMan: false,
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
      Position: 4,
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
      isSixMan: false,
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
      Position: 5,
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
      isSixMan: false,
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
      Position: 2,
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
      isSixMan: false,
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
      Position: 3,
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
      isSixMan: false,
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
      Position: 1,
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
      isSixMan: false,
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
      Position: 1,
      img: 'Boss_BBang_sd_1',
    },
    {
      id: 8,
      charName: '서은재',
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
      isMagic: true,
      isAdjutant: false,
      isEnemy: true,
      isSixMan: false,
      passiveSkill: '응원단',
      activeSkillFirst: '우등생',
      activeSkillSecond: '비법노트',
      ultSkill: '사랑에 빠진 소녀',
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
      Position: 4,
      img: 'seoeunjae_sd_1',
    },
    {
      id: 9,
      charName: '박병찬',
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
      isSixMan: false,
      passiveSkill: '12분',
      activeSkillFirst: '제법인데?',
      activeSkillSecond: '걱정마세요',
      ultSkill: '죽여버릴거야...',
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
      Position: 2,
      img: 'byeongchan_sd_1',
    },
    {
      id: 10,
      charName: '기상호',
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
      isMagic: true,
      isAdjutant: false,
      isEnemy: true,
      isSixMan: false,
      passiveSkill: '언럭키',
      activeSkillFirst: '사륜안!',
      activeSkillSecond: '왼팔에 흑염룡이...',
      ultSkill: '에이스 브레이커',
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
      Position: 3,
      img: 'sangho_sd_1',
    },
    {
      id: 11,
      charName: '성준수',
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
      isSixMan: false,
      passiveSkill: '엘리트 출신',
      activeSkillFirst: '할 때는 한다',
      activeSkillSecond: '착각하지 마',
      ultSkill: '부숴버려',
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
      Position: 5,
      img: 'junsu_sd_1',
    },
    {
      id: 12,
      charName: '김다은',
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
      isSixMan: true,
      passiveSkill: '원래는 마법사가...',
      activeSkillFirst: '길을 찾고 싶어',
      activeSkillSecond: '마르세유 턴',
      ultSkill: '우직하게',
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
      Position: 6,
      img: 'kimdaeun_sd_1',
    },
  ]);

  //줄세우기
  let ourLine = myDeckData.sort(function (a, b) {
    return a.Position - b.Position;
  });
  let enemyLine = enemyDeckData.sort(function (a, b) {
    return a.Position - b.Position;
  });
  let enemyLineReverse = enemyLine;
  enemyLineReverse.reverse();
  //리셋용
  const forReset = {
    id: 0,
    charName: 'Buffer',
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
    isSixMan: false,
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
    Position: 0,
    img: '',
  };
  //상세 스탯 표시 함수
  const [characterStatDetail, setCharacterStatDetail] = useState(forReset);

  useEffect(() => {
    console.log('useEffect charstatdetail ', characterStatDetail);
  }, [characterStatDetail]);

  const [attacker, setAttacker] = useState(forReset);
  const [defender, setDefender] = useState(forReset);

  const allDeckData = myDeckData.concat(enemyDeckData, forReset);

  const onShowStatDetail = (id) => {
    console.log('올 덱 데이타', allDeckData);
    const newCharacterStatDetail = allDeckData.filter((item) => item.id === id);
    console.log(newCharacterStatDetail[0]);
    setCharacterStatDetail(newCharacterStatDetail[0]);
  };

  const onDragAttacker = (item) => {
    console.log('Attacker ', item);
    setAttacker(item);
  };
  const onDragDefender = (item) => {
    console.log('Defender ', item);
    setDefender(item);
  };
  /*useEffect(() => {
    console.log('useEffect charstatdetail ', attacker);
  }, [attacker]);*/
  useEffect(() => {
    console.log('useEffect defender ', defender);
  }, [defender]);

  const onDragOver = (e) => {
    e.preventDefault();
  };
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
    /*resultSpeedTemp.push({
      id: 0,
      charName: 'Buffer',
      speed: 0,
    });*/
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
          if (i.debuffStat === 'bleed' || i.debuffStat === 'poison') {
            console.log('지속데미지');
            item.HPcurrent = item.HPcurrent - i.debuffAmmount;
          }
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
            console.log('지속데미지 끝');
          } else if (i.debuffStat === 'poison') {
            console.log('지속데미지 끝');
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
          if (i.debuffStat === 'bleed' || i.debuffStat === 'poison') {
            console.log('지속데미지');
            item.HPcurrent = item.HPcurrent - i.debuffAmmount;
          }
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
            console.log('출혈데미지 끝');
          } else if (i.debuffStat === 'poison') {
            console.log('출혈데미지 끝');
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
      enemyCharacter = forReset;
    myCharacter = selectedCharacter;
    enemyCharacter = selectedEnemy;
    let finalDamage = 0;

    //데미지계산을 합시다
    // 명중 판정
    const hitChance = selectedCharacter.accuracy - selectedEnemy.evasion;
    const hit = Math.random() < hitChance;

    console.log('target enemy character ', enemyCharacter);

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

  const skillDamageCalculation = (
    selectedCharacter,
    skillAccuracy,
    skillAttack,
    skillCritiacl,
    skillCritDamageRate,
    selectedEnemy
  ) => {
    //변수설정
    let myCharacter,
      enemyCharacter = forReset;
    myCharacter = selectedCharacter;
    enemyCharacter = selectedEnemy;
    let finalDamage,
      additionalAccuracy,
      additionalAttack,
      additionalCritical,
      additionalCritDamageRate = 0;
    additionalAccuracy = skillAccuracy;
    additionalAttack = skillAttack;
    additionalCritical = skillCritiacl;
    additionalCritDamageRate = skillCritDamageRate;

    console.log('target enemy character ', enemyCharacter);

    //데미지계산을 합시다
    // 명중 판정
    const hitChance =
      selectedCharacter.accuracy + additionalAccuracy - selectedEnemy.evasion;
    const hit = Math.random() < hitChance;

    if (hit) {
      // 명중했을 때 데미지 계산
      let damage = selectedCharacter.attack + additionalAttack;
      console.log('공격력 스탯 ', damage);

      // 크리티컬 여부 판정
      let criticalChance = selectedCharacter.critical + additionalCritical;
      const critical = Math.random() < criticalChance;

      if (critical) {
        // 크리티컬 데미지 적용
        damage *= selectedCharacter.critDamageRate + additionalCritDamageRate; // 예시로 크리티컬일 때 데미지를 2배로 증가시킴
        console.log(
          'critical! 데미지 ',
          selectedCharacter.critDamageRate + additionalCritDamageRate,
          '배 만큼 적용'
        );
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
      currentAttacker,
      currentDefender = forReset;
    console.log(e);
    console.log(e.target.value);
    currentCharacter = characterStatDetail;
    console.log('캐릭터스탯디테일 ', characterStatDetail);
    currentAttacker = attacker;
    currentDefender = defender;
    console.log(currentCharacter);
    switch (selectedSkill) {
      case 'A1':
        console.log(
          `${currentCharacter.charName} uses ${currentCharacter.activeSkillFirst}!`
        );
        // 해당 스킬에 대한 행동 로직 추가
        let myDeckDataTempA1 = myDeckData;
        let enemyDeckDataTempA1 = enemyDeckData;
        //캐릭터별 스킬 로직
        if (currentCharacter.charName === '정희찬') {
          //스킬명: 최고의 응원
          //모든 아군에게 공격력 버프 4턴동안 +4
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
          //스킬명: 타임아웃
          //모든 아군 7hp씩 힐
          myDeckDataTempA1.forEach((item) => {
            if (item.HPcurrent + 7 > item.HPstat) {
              item.HPcurrent = item.HPstat;
            } else {
              item.HPcurrent += 7;
            }
          });
        } else if (currentCharacter.charName === '공태성') {
          //스킬명: 드래곤 스매셔
          //크확 크뎀이 높은 일격
          if (
            currentDefender.charName === 'Buffer' ||
            currentDefender.charName === ''
          ) {
            console.log('please select enemy target');
            alert(
              'please select enemy target: 행동할 아군을 드래그해서 선택할 적 위에 드롭하세요!'
            );
            return turnInformation;
          } else {
            [currentCharacter, currentDefender] = skillDamageCalculation(
              currentCharacter,
              0.15,
              8,
              0.3,
              0.7,
              currentDefender
            );
          }
        } else if (currentCharacter.charName === '최종수') {
          //스킬명: 찢어버리기
          //적군에게 광역 출혈 디버프 5턴동안 -2씩
          /*아니 근데 생각해보니 디버프도 명중판정 있어야할거같은데*/
          enemyDeckDataTempA1.forEach((item) => {
            item.debuff.push({
              debuffNumber: item.debuff.length,
              debuffType: 'bleedDebuffJongSu',
              debuffFrom: '최종수',
              debuffStat: 'bleed',
              debuffAmmount: 2,
              debuffDuration: 5,
            });
          });
        } else if (currentCharacter.charName === '진재유') {
          //스킬명: 내만 믿어라
          //적군 한명에게 방어무시데미지
          if (
            currentDefender.charName === 'Buffer' ||
            currentDefender.charName === ''
          ) {
            console.log('please select enemy target');
            alert(
              'please select enemy target: 행동할 아군을 드래그해서 선택할 적 위에 드롭하세요!'
            );
            return turnInformation;
          } else {
            [currentCharacter, currentDefender] = skillDamageCalculation(
              currentCharacter,
              0.2,
              12,
              0.25,
              0.5,
              currentDefender
            );
          }
        } else if (currentCharacter.charName === '전영중') {
          //스킬명: 최고의 디펜더
          //모든 아군 속도버프, 한턴 무적, 자신에게 도발 2턴
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
          //도발 어케짬
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
        setCharacterStatDetail(forReset);
        if (
          currentDefender.charName !== 'Buffer' ||
          currentDefender.charName !== ''
        ) {
          setDefender(forReset);
        }
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
        return [turnInformation, attacker, defender];

      case 'A2':
        console.log(
          `${currentCharacter.charName} uses ${currentCharacter.activeSkillSecond}!`
        );
        let myDeckDataTempA2 = myDeckData;
        let enemyDeckDataTempA2 = enemyDeckData;
        //스킬2 로직
        if (currentCharacter.charName === '정희찬') {
          //한 번 더 너에게
          //"아군을" 선택해서 한번 더 행동하게
        } else if (currentCharacter.charName === '이현성') {
          //멤버 교체
          //식스맨을 전장으로 데려온다(이거 어케구현함)
        } else if (currentCharacter.charName === '공태성') {
          //하늘을 향해
          //자벞 왕창 + 한턴 회피
        } else if (currentCharacter.charName === '최종수') {
          //동기부여가 잘 돼
          //명중 크리 크확 버프를 걸고 적 한명 타겟 데미지
        } else if (currentCharacter.charName === '진재유') {
          //직접 할 차례다
          //광역 마법데미지
        } else if (currentCharacter.charName === '전영중') {
          //살아남을 거야
          //HP가 0이 되도 죽지 않는 버프
        } else {
          console.log('error');
        }
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
        setCharacterStatDetail(forReset);
        if (
          currentDefender.charName !== 'Buffer' ||
          currentDefender.charName !== ''
        ) {
          setDefender(forReset);
        }
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
        return [turnInformation, attacker, defender];

      case 'U':
        console.log(
          `${currentCharacter.charName} uses ${currentCharacter.ultSkill}!`
        );
        let myDeckDataTempU = myDeckData;
        let enemyDeckDataTempU = enemyDeckData;
        // 궁극기에 대한 행동 로직 추가
        if (currentCharacter.charName === '정희찬') {
          //
        } else if (currentCharacter.charName === '이현성') {
          //
        } else if (currentCharacter.charName === '공태성') {
          //
        } else if (currentCharacter.charName === '최종수') {
          //
        } else if (currentCharacter.charName === '진재유') {
          //
        } else if (currentCharacter.charName === '전영중') {
          //
        } else {
          console.log('error');
        }
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
        setCharacterStatDetail(forReset);
        if (
          currentDefender.charName !== 'Buffer' ||
          currentDefender.charName !== ''
        ) {
          setDefender(forReset);
        }
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
        return [turnInformation, attacker, defender];

      case 'O':
        console.log(
          `${currentCharacter.charName} attacks with a basic attack!`
        );
        let myDeckDataTempO = myDeckData;
        let enemyDeckDataTempO = enemyDeckData;
        //평타 로직
        if (
          currentDefender.charName === 'Buffer' ||
          currentDefender.charName === ''
        ) {
          console.log('please select enemy target');
          alert(
            'please select enemy target: 행동할 아군을 드래그해서 선택할 적 위에 드롭하세요!'
          );
          return turnInformation;
        } else {
          [currentCharacter, currentDefender] = damageCalculation(
            currentCharacter,
            currentDefender
          );
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
        setCharacterStatDetail(forReset);
        if (
          currentDefender.charName !== 'Buffer' ||
          currentDefender.charName !== ''
        ) {
          setDefender(forReset);
        }
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
        return [turnInformation, attacker, defender];

      case 'E':
        console.log('enemy attack');
        let myDeckDataTempE = myDeckData;
        let enemyDeckDataTempE = enemyDeckData;
        //적군 행동 로직
        if (currentCharacter.charName === '오염된 전영중') {
          //전체공격 테스트
          myDeckDataTempE.forEach((item) => {
            [currentCharacter, item] = damageCalculation(
              currentCharacter,
              item
            );
          });
        } else if (currentCharacter.charName === '기상호') {
          //디버프 테스트
          myDeckDataTempE.forEach((item) => {
            item.debuff.push({
              debuffNumber: item.debuff.length,
              debuffType: 'criticalDebuffSangHo',
              debuffFrom: '기상호',
              debuffStat: 'critical',
              debuffAmmount: 0.05,
              debuffDuration: 3,
            });
          });
          myDeckDataTempE.forEach((item) => {
            item.critical -= 0.05;
            item.critical = dropNumber(item.critical);
          });
        } else if (currentCharacter.charName === '성준수') {
          //타겟팅 테스트
          myDeckDataTempE.forEach((item) => {
            if (item.Position === 4 || item.Position === 5) {
              [currentCharacter, item] = damageCalculation(
                currentCharacter,
                item
              );
            }
          });
        } else if (currentCharacter.charName === '김다은') {
          //적군 버프 테스트
          enemyDeckDataTempE.forEach((item) => {
            item.buff.push({
              buffNumber: item.buff.length,
              buffType: 'speedBuffDaEun',
              buffFrom: '김다은',
              buffStat: 'speed',
              buffAmmount: 1,
              buffDuration: 4,
            });
          });
          enemyDeckDataTempE.forEach((item) => {
            item.speed += 1;
          });
        } else if (currentCharacter.charName === '서은재') {
          //독데미지 테스트
          myDeckDataTempE.forEach((item) => {
            item.debuff.push({
              debuffNumber: item.debuff.length,
              debuffType: 'poisonDebuffEunJae',
              debuffFrom: '서은재',
              debuffStat: 'poison',
              debuffAmmount: 3,
              debuffDuration: 5,
            });
          });
        } else if (currentCharacter.charName === '박병찬') {
          //타겟팅 테스트
          myDeckDataTempE.forEach((item) => {
            if (item.Position === 1) {
              [currentCharacter, item] = damageCalculation(
                currentCharacter,
                item
              );
            }
          });
        } else {
          console.log('error');
        }
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
        setCharacterStatDetail(forReset);
        //행둥한 적 빼두기
        turnInformation.resultSpeed.shift();
        console.log('턴인포', turnInformation.resultSpeed);
        //return
        return [turnInformation, attacker, defender];

      default:
        //초기화
        setCharacterStatDetail(forReset);
        console.log('턴인포', turnInformation.resultSpeed);
        //return
        return [turnInformation, attacker, defender];
    }
  };

  return (
    <div
      style={{
        display: 'block',
      }}
    >
      <div className="BossBox">
        <table
          className="EnemyTable"
          style={{ border: '1px solid black', borderCollapse: 'collapse' }}
        >
          <tbody>
            <tr
              style={{ border: '1px solid black', borderCollapse: 'collapse' }}
            >
              {enemyLine.map((item) => {
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
                        </div>
                        <div className="statBar">
                          <p>
                            체력: {item.HPcurrent}/{item.HPstat}
                          </p>
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
      <div className="InfoBox" style={{ display: 'flex', height: '560px' }}>
        <div>
          <p>턴 정보</p>
          <div>규칙: 턴 내 행동 순서는 속도로 판정</div>
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
          <div style={{ height: '450px' }}>
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
        <div
          style={{ height: '450px', width: '300px', border: '2px solid red' }}
        >
          스탯 정보
          <div
            style={{
              display:
                characterStatDetail.charName === 'Buffer' ? 'none' : 'block',
            }}
          >
            <div>이름 {characterStatDetail.charName}</div>
            <div>
              HP {characterStatDetail.HPcurrent}/{characterStatDetail.HPstat}
            </div>
            <div>
              데미지 유형 {characterStatDetail.isMagic ? '마법' : '물리'}
            </div>
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
                    turnInformation.resultSpeed[0].charName &&
                  characterStatDetail.id < 7
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
              <button
                value={characterStatDetail.id}
                onClick={(e) => handleSkillSelect(e, 'A1')}
              >
                {characterStatDetail.activeSkillFirst} (A1)
              </button>
            </div>
            <div
              style={{
                display:
                  characterStatDetail.charName ===
                    turnInformation.resultSpeed[0].charName &&
                  characterStatDetail.id >= 7
                    ? 'block'
                    : 'none',
              }}
            >
              <button
                value={characterStatDetail.id}
                onClick={(e) => handleSkillSelect(e, 'E')}
              >
                {'적이 행동할 차례입니다.'} (E)
              </button>
            </div>
          </div>
        </div>
        <div className="BuffDebuffInfo" style={{ width: '250px' }}>
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
                <div>
                  {item.buffDuration}턴 동안 {item.buffAmmount}만큼
                </div>
                <div>
                  {item.buffStat}을 버프 - from {item.buffFrom}
                </div>
              </div>
            );
          })}
          <p>디버프</p>
          {characterStatDetail.debuff.map((item) => {
            return (
              <div
                key={item.debuffNumber}
                style={{
                  display:
                    item.debuffNumber === 0 || item.debuffDuration === 0
                      ? 'none'
                      : 'block',
                }}
              >
                <div>
                  {item.debuffDuration}턴 동안 {item.debuffAmmount}만큼
                </div>
                <div>
                  {item.debuffStat}을 디버프 - from {item.debuffFrom}
                </div>
              </div>
            );
          })}
        </div>
        <div className="miniView">
          <div
            style={{
              height: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ fontSize: '28pt' }}>Show Stage</div>
            <div style={{ fontSize: '16pt' }}>Drag and Drop to Target</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="enemyMini" style={{ display: 'flex' }}>
              {enemyLineReverse.map((item) => {
                return (
                  <div key={item.id}>
                    <img
                      src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                      style={{
                        border:
                          turnInformation.resultSpeed[0].id === item.id
                            ? '1px solid red'
                            : '1px solid transparent',
                        height: '125px',
                        position: 'relative',
                      }}
                      alt={`${item.img}_mini`}
                      onClick={() => onShowStatDetail(item.id)}
                      onDrop={() => onDragDefender(item)}
                      onDragOver={onDragOver}
                    ></img>
                  </div>
                );
              })}
            </div>
            <div style={{ width: '40px' }}></div>
            <div className="ourMini" style={{ display: 'flex' }}>
              {ourLine.map((item) => {
                return (
                  <div key={item.id}>
                    <img
                      src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                      style={{
                        border:
                          turnInformation.resultSpeed[0].id === item.id
                            ? '1px solid red'
                            : '1px solid transparent',
                        height: '125px',
                        position: 'relative',
                      }}
                      alt={`${item.img}_mini`}
                      onClick={() => onShowStatDetail(item.id)}
                      onDragStart={() => onDragAttacker(item)}
                      onDragOver={onDragOver}
                    ></img>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <table
        className="TeamTable"
        style={{ border: '1px solid black', borderCollapse: 'collapse' }}
      >
        <tbody>
          <tr style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
            {ourLine.map((item) => {
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
                      <div className="skillInfo">
                        <div>패시브: {item.passiveSkill}</div>
                        <div>액티브1: {item.activeSkillFirst}</div>
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
export default CombatDemoUpload;
