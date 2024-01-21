import { useState } from 'react';
import { useEffect } from 'react';

function DeckSetting() {
  const [myDeckData, setMyDeckData] = useState([
    {
      charNo: 1,
      id: 0,
      charName: '성준수',
      HPcurrent: 23,
      HPstat: 23,
      physicResist: 3,
      magicResist: 3,
      attack: 8,
      speed: 6,
      accuracy: 0.9,
      evasion: 0.2,
      critical: 0.4,
      critDamageRate: 2.0,
      isMagic: false,
      isAdjutant: false,
      isEnemy: false,
      isSixMan: false,
      onBattlefield: false,
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
      lovePointStack: 0,
      Line: '',
      Position: 0,
      img: 'junsu_sd_1',
    },
    {
      charNo: 2,
      id: 0,
      charName: '정희찬',
      HPcurrent: 22,
      HPstat: 22,
      physicResist: 3,
      magicResist: 2,
      attack: 4,
      speed: 4,
      accuracy: 0.8,
      evasion: 0.1,
      critical: 0.1,
      critDamageRate: 1.8,
      isMagic: false,
      isAdjutant: false,
      isEnemy: false,
      isSixMan: false,
      onBattlefield: false,
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
      lovePointCurrent: 0,
      lovePointStack: 0,
      Line: '',
      Position: 0,
      img: 'heechan_sd_1',
    },
    {
      charNo: 3,
      id: 0,
      charName: '이현성',
      HPcurrent: 28,
      HPstat: 28,
      physicResist: 4,
      magicResist: 4,
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
      onBattlefield: false,
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
      lovePointCurrent: 0,
      lovePointStack: 0,
      Line: '',
      Position: 0,
      img: 'hyunsung_sd_1',
    },
    {
      charNo: 4,
      id: 0,
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
      onBattlefield: false,
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
      lovePointCurrent: 0,
      lovePointStack: 0,
      Line: '',
      Position: 0,
      img: 'jaeyu_sd_1',
    },
    {
      charNo: 5,
      id: 0,
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
      onBattlefield: false,
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
      lovePointCurrent: 0,
      lovePointStack: 0,
      Line: '',
      Position: 0,
      img: 'jongsu_sd_1',
    },
    {
      charNo: 6,
      id: 0,
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
      onBattlefield: false,
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
      lovePointCurrent: 0,
      lovePointStack: 0,
      Line: '',
      Position: 0,
      img: 'taesung_sd_1',
    },
    {
      charNo: 7,
      id: 0,
      charName: '전영중',
      HPcurrent: 30,
      HPstat: 30,
      physicResist: 5,
      magicResist: 4,
      attack: 3,
      speed: 6,
      accuracy: 0.8,
      evasion: 0.2,
      critical: 0.1,
      critDamageRate: 1.8,
      isMagic: false,
      isAdjutant: false,
      isEnemy: false,
      isSixMan: false,
      onBattlefield: false,
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
      lovePointCurrent: 0,
      lovePointStack: 0,
      Line: '',
      Position: 0,
      img: 'youngjung_sd_1',
    },
    {
      charNo: 8,
      id: 0,
      charName: '박병찬',
      HPcurrent: 20,
      HPstat: 20,
      physicResist: 4,
      magicResist: 3,
      attack: 10,
      speed: 5,
      accuracy: 0.9,
      evasion: 0.3,
      critical: 0.4,
      critDamageRate: 2.1,
      isMagic: false,
      isAdjutant: false,
      isEnemy: false,
      isSixMan: false,
      onBattlefield: false,
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
      lovePointStack: 0,
      Line: '',
      Position: 0,
      img: 'byeongchan_sd_1',
    },
    {
      charNo: 9,
      id: 0,
      charName: '기상호',
      HPcurrent: 29,
      HPstat: 29,
      physicResist: 4,
      magicResist: 3,
      attack: 6,
      speed: 5,
      accuracy: 0.9,
      evasion: 0.3,
      critical: 0.4,
      critDamageRate: 2.1,
      isMagic: true,
      isAdjutant: false,
      isEnemy: false,
      isSixMan: false,
      onBattlefield: false,
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
      lovePointStack: 0,
      Line: '',
      Position: 0,
      img: 'sangho_sd_1',
    },
    {
      charNo: 10,
      id: 0,
      charName: '김다은',
      HPcurrent: 32,
      HPstat: 32,
      physicResist: 4,
      magicResist: 4,
      attack: 4,
      speed: 3,
      accuracy: 0.9,
      evasion: 0.3,
      critical: 0.1,
      critDamageRate: 2.1,
      isMagic: false,
      isAdjutant: false,
      isEnemy: false,
      isSixMan: false,
      onBattlefield: false,
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
      lovePointStack: 0,
      Line: '',
      Position: 0,
      img: 'kimdaeun_sd_1',
    },
    {
      charNo: 11,
      id: 0,
      charName: '서은재',
      HPcurrent: 26,
      HPstat: 26,
      physicResist: 3,
      magicResist: 3,
      attack: 6,
      speed: 5,
      accuracy: 0.9,
      evasion: 0.3,
      critical: 0.4,
      critDamageRate: 2.1,
      isMagic: true,
      isAdjutant: false,
      isEnemy: false,
      isSixMan: false,
      onBattlefield: false,
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
      lovePointStack: 0,
      Line: '',
      Position: 0,
      img: 'seoeunjae_sd_1',
    },
  ]);
  const forReset = {
    charNo: 0,
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
    onBattlefield: false,
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
    lovePointStack: 0,
    Line: '',
    Position: 0,
    img: '',
  };
  //상세 스탯 표시 함수
  const [characterStatDetail, setCharacterStatDetail] = useState(forReset);

  const onShowStatDetail = (charNo) => {
    const newCharacterStatDetail = myDeckData.filter(
      (item) => item.charNo === charNo
    );
    console.log(newCharacterStatDetail[0]);
    setCharacterStatDetail(newCharacterStatDetail[0]);
  };

  useEffect(() => {
    console.log('useEffect charstatdetail ', characterStatDetail);
  }, [characterStatDetail]);

  const [position, setPosition] = useState('1-2-2');
  const [positionArray, setPositionArray] = useState([1, 2, 2]);

  const onChangePosition = (event) => {
    setPosition(event.target.value);
    const positionTemp = event.target.value;
    console.log(event.target.value);
    const positionArrayTemp = positionTemp.split('-');
    setPositionArray(positionArrayTemp);
  };

  useEffect(() => {
    console.log('useEffect position ', position);
  }, [position]);

  useEffect(() => {
    console.log('useEffect positionArray ', positionArray);
  }, [position]);

  const [selectChar, setSelectChar] = useState(forReset);

  useEffect(() => {
    console.log('useEffect selectChar ', selectChar);
  }, [selectChar]);
  const onDragOver = (e) => {
    e.preventDefault();
  };
  const onDragCharacter = (item) => {
    setSelectChar(item);
    console.log('setSelectChar ', item);
  };
  //캐릭터의 위치정보 업데이트
  const [characterPositions, setCharacterPositions] = useState([
    {
      charNo: 0,
      Line: 'Buffer',
      Position: 0,
      htmlElem: <div></div>,
    },
    {
      charNo: 0,
      Line: 'Buffer',
      Position: 1,
      htmlElem: <div></div>,
    },
    {
      charNo: 0,
      Line: 'Buffer',
      Position: 2,
      htmlElem: <div></div>,
    },
    {
      charNo: 0,
      Line: 'Buffer',
      Position: 3,
      htmlElem: <div></div>,
    },
    {
      charNo: 0,
      Line: 'Buffer',
      Position: 4,
      htmlElem: <div></div>,
    },
    {
      charNo: 0,
      Line: 'Buffer',
      Position: 5,
      htmlElem: <div></div>,
    },
    {
      charNo: 0,
      Line: 'Buffer',
      Position: 6,
      htmlElem: <div></div>,
    },
    {
      charNo: 0,
      Line: 'Buffer',
      Position: 7,
      htmlElem: <div></div>,
    },
    {
      charNo: 0,
      Line: 'Buffer',
      Position: 8,
      htmlElem: <div></div>,
    },
    {
      charNo: 0,
      Line: 'Buffer',
      Position: 9,
      htmlElem: <div></div>,
    },
    {
      charNo: 0,
      Line: 'Buffer',
      Position: 10,
      htmlElem: <div></div>,
    },
    {
      charNo: 0,
      Line: 'Buffer',
      Position: 11,
      htmlElem: <div></div>,
    },
    {
      charNo: 0,
      Line: 'Buffer',
      Position: 12,
      htmlElem: <div></div>,
    },
  ]);
  useEffect(() => {
    console.log('useEffect characterPositions ', characterPositions);
  }, [characterPositions]);

  // 캐릭터의 위치를 업데이트하는 함수
  const updateCharacterPosition = (line, position, selectChar) => {
    if (selectChar.charName === 'Buffer') {
      console.log('제발아무것도하지마');
      return characterPositions;
    } else {
      let updatedPositions = [...characterPositions];
      console.log(updatedPositions, ' updatedPositions');
      let newPosition = {
        charNo: selectChar.charNo,
        Line: line,
        Position: position,
        htmlElem: <div></div>,
      };
      let newPosition1 = newPosition;
      let newPosition2 = newPosition;
      let newPosition3 = newPosition;
      let selectCharTemp = selectChar;
      let selectCharTemp2 = selectChar;
      let originalPosition = selectChar.Position;
      //선택한 캐릭터가 들어가려고 하는 슬롯 위치
      let updateTarget = updatedPositions.find(
        (elem) => elem.Position === position
      );
      console.log('이게 뭐야 updateTarget ', updateTarget);
      let updateIndex = updatedPositions.indexOf(updateTarget);
      console.log('updateIndex ', updateIndex);
      //슬롯에 두번 들어가나 체크
      for (let k = 0; k < updatedPositions.length; k++) {
        console.log(updatedPositions[k].charNo, '아니시발뭐야?');
      }
      let reduplicationCheck = updatedPositions.filter(
        (elem) => elem.charNo === selectChar.charNo
      );
      console.log('중복 체크가 왜 안되냐고오오오 ', reduplicationCheck);
      if (reduplicationCheck.length < 1) {
        selectCharTemp.Line = newPosition.Line;
        selectCharTemp.Position = newPosition.Position;
        selectCharTemp.onBattlefield = true;

        newPosition.htmlElem = (
          <img
            src={process.env.PUBLIC_URL + `/img/${selectChar.img}.png`}
            style={{ height: '140px' }}
            alt={`${selectChar.img}`}
            onClick={() => onShowStatDetail(selectChar.charNo)}
            onDragStart={() => onDragCharacter(selectCharTemp)}
          />
        );
        let index = updatedPositions.findIndex(
          (i) => i.Position === selectCharTemp.Position
        );
        updatedPositions[index] = newPosition;
        console.log(updatedPositions, ' updatedPositions');
        setCharacterPositions(updatedPositions);

        setSelectChar(selectCharTemp);
        let selectedIndex = myDeckData.findIndex((i) => i === selectChar);
        let myDeckDataCopy = myDeckData;
        myDeckDataCopy[selectedIndex] = selectCharTemp;
        setMyDeckData(myDeckDataCopy);
        return characterPositions;
      } else {
        if (
          reduplicationCheck.length === 1 &&
          updateTarget.charNo !== selectChar.charNo &&
          updateTarget.Line !== 'Buffer'
        ) {
          let myDeckDataCopy = myDeckData;
          let characterPositionsCopy = characterPositions;
          console.log(reduplicationCheck.length, ' 1인지 체크');
          console.log(
            selectChar.charNo,
            ' 들어가려고 하는 캐릭터의 고유번호 체크'
          );
          console.log(
            updateTarget.charNo,
            ' 들어가려고 하는 슬롯에 있는 캐릭터 고유번호 체크'
          );
          let switcherNum = selectChar.charNo; //들어가려고 하는 캐릭터의 고유번호
          let switcher = selectChar; //들어가려고 하는 캐릭터
          let switcherIndex = characterPositions.findIndex(
            (i) => i.charNo === switcherNum
          ); //들어가려고 하는 캐릭터 순서 배열의 인덱스
          console.log('들어가려고 하는 ', switcherNum, switcher, switcherIndex);
          let slotOwnerNum = updateTarget.charNo; //자리 주인의 고유번호
          let slotOwner = characterPositions.find(
            (i) => i.charNo === slotOwnerNum
          ); //자리 주인이 차지하고 있는 자리
          let slotOwnerIndex = characterPositions.findIndex(
            (i) => i.charNo === slotOwnerNum
          ); //자리 주인의 캐릭터 순서 배역의 인덱스
          console.log('자리 주인 ', slotOwnerNum, slotOwner, slotOwnerIndex);
          newPosition1.Line = line; //들어갈놈
          newPosition1.Position = position; //들어갈놈
          selectCharTemp.Position = position;
          selectCharTemp.Line = line;
          newPosition1.htmlElem = (
            <img
              src={process.env.PUBLIC_URL + `/img/${selectChar.img}.png`}
              style={{ height: '140px' }}
              alt={`${selectChar.img}`}
              onClick={() => onShowStatDetail(selectChar.charNo)}
              onDragStart={() => onDragCharacter(selectCharTemp)}
            />
          ); //들어갈놈
          //
          newPosition2 = characterPositions[switcherIndex]; //바뀔자리주인
          newPosition2.charNo = slotOwnerNum;
          //
          let switchedIndex = myDeckData.findIndex(
            (i) => i.charNo === slotOwnerNum
          ); //바뀔자리주인
          console.log('이게뭐고 ', switchedIndex);
          console.log('이게뭐고 2', myDeckData[switchedIndex]);
          let slotOwnerTemp = myDeckData[switchedIndex];
          slotOwnerTemp.Position = switcher.Position;
          slotOwnerTemp.Line = switcher.Line;
          newPosition2.htmlElem = (
            <img
              src={
                process.env.PUBLIC_URL +
                `/img/${myDeckData[switchedIndex].img}.png`
              }
              style={{ height: '140px' }}
              alt={`${myDeckData[switchedIndex].img}`}
              onClick={() => onShowStatDetail(myDeckData[switchedIndex].charNo)}
              onDragStart={() => onDragCharacter(slotOwnerTemp)}
            />
          );
          //
          characterPositionsCopy[slotOwnerIndex] = newPosition1;
          characterPositionsCopy[switcherIndex] = newPosition2;
          console.log('slotOwnerIndex 검사~ ', slotOwnerIndex);
          console.log('switcherIndex 검사~ ', switcherIndex);
          console.log('뉴포지션1 검사~ ', newPosition1);
          console.log('뉴포지션2 검사~ ', newPosition2);
          setCharacterPositions(characterPositionsCopy);
          console.log('이거 체크 좀 2 ', characterPositionsCopy);
          //
          //여기까진 됐고
          //
          let selectedIndex = myDeckData.findIndex((i) => i === selectChar);
          //selectCharTemp.Line = line;
          //selectCharTemp.Position = position;
          console.log('selectedindex 검사합니다~ ', selectedIndex);
          console.log('selectedindex 검사합니다~ ', myDeckData[selectedIndex]);
          console.log('그래서 selectCharTemp가 먼데? ', selectCharTemp);
          myDeckDataCopy[selectedIndex] = selectCharTemp;
          //setSelectChar(selectCharTemp);
          //console.log('switchedIndex 검사합니다~ ', selectCharTemp);
          //console.log('switchedIndex 검사합니다~ ', myDeckData[selectCharTemp]);
          slotOwnerTemp.Position = newPosition2.Position;
          slotOwnerTemp.Line = newPosition2.Line;
          console.log('그래서 slotOwnerTemp 먼데? ', slotOwnerTemp);
          let changedIndex = myDeckData.findIndex(
            (i) => i.charNo === slotOwnerTemp.charNo
          );
          myDeckDataCopy[changedIndex] = slotOwnerTemp;
          console.log('changedIndex  검사합니다~ ', changedIndex);
          console.log('changedIndex  검사합니다~ ', myDeckData[changedIndex]);
          setMyDeckData(myDeckDataCopy);
          console.log('이거 체크 좀 ', myDeckDataCopy);
          setSelectChar(forReset);
          return characterPositions;
        } else if (
          reduplicationCheck.length === 1 &&
          updatedPositions.findIndex((i) => i.charNo === selectChar.charNo) !==
            -1
        ) {
          console.log('여기 조건에 걸리는지 체크');
          console.log('뉴포지션3 ', newPosition3);

          //let selectCharTemp2 = selectChar;
          //미리 받아두자...
          //console.log('여기가 문제인게 틀림없어 2 ,', selectCharTemp2);
          //let originalPosition = selectCharTemp2.Position;
          let characterPositionsClone = characterPositions;
          selectCharTemp2.Position = position;
          selectCharTemp2.Line = line;
          //console.log('여기가 문제인게 틀림없어 ,', selectCharTemp2);
          newPosition3.htmlElem = (
            <img
              src={process.env.PUBLIC_URL + `/img/${selectChar.img}.png`}
              style={{ height: '140px' }}
              alt={`${selectChar.img}`}
              onClick={() => onShowStatDetail(selectChar.charNo)}
              onDragStart={() => onDragCharacter(selectCharTemp2)}
            />
          );

          let updateIndex3 = characterPositionsClone.findIndex(
            (i) => i.charNo === selectChar.charNo
          );
          console.log(
            'originalPosition 이게 newposition3이 들어갈 자리,',
            originalPosition
          );
          console.log('updateIndex3 이게 비워져야할 자리', updateIndex3);
          characterPositionsClone[updateIndex3] = {
            charNo: 0,
            Line: 'Buffer',
            Position: originalPosition,
            htmlElem: <div></div>,
          };
          console.log(
            '원래 자리 잘 초기화되었나 검사 ',
            characterPositionsClone[updateIndex3]
          );
          characterPositionsClone[newPosition3.Position] = newPosition3;

          console.log(
            '새로운 자리 데이터 갱신되었나 검사',
            characterPositionsClone[originalPosition]
          );
          setCharacterPositions(characterPositionsClone);
          //여기까진 잘 되고
          let myDeckDataCopy2 = myDeckData;
          let index = myDeckData.findIndex(
            (i) => i.charNo === selectChar.charNo
          );
          //console.log('뭐야 ㅁㅊ', index);
          myDeckDataCopy2[index] = selectCharTemp2;
          setMyDeckData(myDeckDataCopy2);
          //console.log('이거 체크 좀 ', myDeckDataCopy2);
          setSelectChar(forReset);
          return characterPositions;
        } else {
          alert('중복 출전은 불가능합니다!');
          return characterPositions;
        }
      }
    }
  };

  const onDragLine = (e) => {
    if (e.target.childNodes[0] !== undefined) {
      let line = e.target.childNodes[0].data;
      let position = e.target.childNodes[1].data;
      updateCharacterPosition(line, Number(position), selectChar);
    } else {
      console.log('뭐야ㅁㅊ');
      console.log(e.target.parentNode);
      console.log(e.target.parentNode.childNodes[0]);
      console.log(e.target.parentNode.childNodes[2]);
      let line = e.target.parentNode.childNodes[0].data;
      let position = e.target.parentNode.childNodes[1].data;
      position = Number(position);
      let findPositionIndex = characterPositions.findIndex(
        (i) => i.Position === position
      );
      console.log(findPositionIndex);
      //characterPositions[findPositionIndex].htmlElem = <div></div>;
      console.log(characterPositions[findPositionIndex].charNo);
      console.log('왜 선택이 안되지 ', selectChar);
      updateCharacterPosition(line, position, selectChar);
    }
  };

  return (
    <div>
      <div
        className="DeckTable"
        style={{
          width: '1620px',
          border: '1px solid black',
        }}
      >
        <div
          style={{
            border: '1px solid black',
            overflow: 'auto',
            overflowWrap: 'normal',
          }}
        >
          {myDeckData.map((item) => {
            return (
              <div
                key={item.charNo}
                style={{ width: '200px', display: 'inline-block' }}
              >
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      border:
                        characterStatDetail.charNo === item.charNo &&
                        item.img !== ''
                          ? '2px solid red'
                          : '2px solid transparent',
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + `/img/${item.img}.png`}
                      style={{ height: '140px', position: 'relative' }}
                      alt={`${item.img}`}
                      onClick={() => onShowStatDetail(item.charNo)}
                      onDragStart={() => onDragCharacter(item)}
                    ></img>
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ width: '600px', display: 'inline-block' }}>
            <p>배치 유형</p>
            <form onChange={onChangePosition}>
              <input
                type="radio"
                name="position"
                id="heavyBack"
                value={'1-1-3'}
              ></input>
              <label htmlFor="heavyBack">1-1-3</label>
              <input
                type="radio"
                name="position"
                id="heavyMid"
                value={'1-3-1'}
              ></input>
              <label htmlFor="heavyMid">1-3-1</label>
              <input
                type="radio"
                name="position"
                id="balancedBack"
                value={'1-2-2'}
              ></input>
              <label htmlFor="balancedBack">1-2-2</label>
              <input
                type="radio"
                name="position"
                id="balancedMid"
                value={'2-1-2'}
              ></input>
              <label htmlFor="balancedMid">2-1-2</label>
              <input
                type="radio"
                name="position"
                id="balancedFront"
                value={'2-2-1'}
              ></input>
              <label htmlFor="balancedFront">2-2-1</label>
            </form>
          </div>
        </div>
      </div>
      <br></br>
      <div
        className="setPosition"
        style={{
          width: '1620px',
          border: '1px solid black',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div className="frontLine">
          <p>전열: 탱커 or 근접 딜러를 배치하세요</p>
          <div>
            <p>슬롯1</p>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[0] >= 1 ? 'block' : 'none',
              }}
              value={'front'}
            >
              {'front'}
              {1}
              {
                characterPositions.find((element) => element.Position === 1)
                  .htmlElem
              }
            </div>
            <p>슬롯2</p>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[0] >= 2 ? 'block' : 'none',
              }}
              value={'front'}
            >
              {'front'}
              {2}
              {
                characterPositions.find((element) => element.Position === 2)
                  .htmlElem
              }
            </div>
            <p>슬롯3</p>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[0] >= 3 ? 'block' : 'none',
              }}
              value={'front'}
            >
              {'front'}
              {3}
              {
                characterPositions.find((element) => element.Position === 3)
                  .htmlElem
              }
            </div>
          </div>
        </div>
        <div className="midLine">
          <p>중열: 근접 딜러 or 서포터를 배치하세요</p>
          <div>
            <p>슬롯1</p>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[1] >= 1 ? 'block' : 'none',
              }}
              value={'mid'}
            >
              {'mid'}
              {4}
              {
                characterPositions.find((element) => element.Position === 4)
                  .htmlElem
              }
            </div>
            <p>슬롯2</p>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[1] >= 2 ? 'block' : 'none',
              }}
              value={'mid'}
            >
              {'mid'}
              {5}
              {
                characterPositions.find((element) => element.Position === 5)
                  .htmlElem
              }
            </div>
            <p>슬롯3</p>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[1] >= 3 ? 'block' : 'none',
              }}
              value={'mid'}
            >
              {'mid'}
              {6}
              {
                characterPositions.find((element) => element.Position === 6)
                  .htmlElem
              }
            </div>
          </div>
        </div>
        <div className="backLine">
          <p>후열: 원거리 딜러 or 서포터를 배치하세요</p>
          <div>
            <p>슬롯1</p>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[2] >= 1 ? 'block' : 'none',
              }}
              value={'back'}
            >
              {'back'}
              {7}
              {
                characterPositions.find((element) => element.Position === 7)
                  .htmlElem
              }
            </div>
            <p>슬롯2</p>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[2] >= 2 ? 'block' : 'none',
              }}
              value={'back'}
            >
              {'back'}
              {8}
              {
                characterPositions.find((element) => element.Position === 8)
                  .htmlElem
              }
            </div>
            <p>슬롯3</p>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[2] >= 3 ? 'block' : 'none',
              }}
              value={'back'}
            >
              {'back'}
              {9}
              {
                characterPositions.find((element) => element.Position === 9)
                  .htmlElem
              }
            </div>
          </div>
        </div>
        <div className="sixManLine">
          <p>식스맨: 식스맨은 공격을 받지 않으며</p>
          <p>공격 스킬을 사용 할 수 없습니다</p>
          <p>전투중인 멤버와 교체되거나</p>
          <p> 서포팅 스킬을 사용할 수 있습니다</p>
          <div>
            <p>슬롯1</p>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{ height: '200px', backgroundColor: 'lightblue' }}
              value={'six'}
            >
              {'six'}
              {12}
              {
                characterPositions.find((element) => element.Position === 12)
                  .htmlElem
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeckSetting;
