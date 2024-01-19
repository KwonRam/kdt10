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
      HPcurrent: 99999,
      HPstat: 99999,
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

  const [position, setPosition] = useState('1-1-1');
  const [positionArray, setPositionArray] = useState([1, 1, 1]);

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
  const onDragLine = (e) => {
    console.log('drop position', e.target);
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
                        characterStatDetail.charNo === item.charNo
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
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[0] >= 1 ? 'block' : 'none',
              }}
              value="front"
            >
              <p>슬롯1</p>
            </div>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[0] >= 2 ? 'block' : 'none',
              }}
              value="front"
            >
              <p>슬롯2</p>
            </div>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[0] >= 3 ? 'block' : 'none',
              }}
              value="front"
            >
              <p>슬롯3</p>
            </div>
          </div>
        </div>
        <div className="midLine">
          <p>중열: 근접 딜러 or 서포터를 배치하세요</p>
          <div>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[1] >= 1 ? 'block' : 'none',
              }}
              value="mid"
            >
              <p>슬롯1</p>
            </div>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[1] >= 2 ? 'block' : 'none',
              }}
              value="mid"
            >
              <p>슬롯2</p>
            </div>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[1] >= 3 ? 'block' : 'none',
              }}
              value="mid"
            >
              <p>슬롯3</p>
            </div>
          </div>
        </div>
        <div className="backLine">
          <p>후열: 원거리 딜러 or 서포터를 배치하세요</p>
          <div>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[2] >= 1 ? 'block' : 'none',
              }}
              value="back"
            >
              <p>슬롯1</p>
            </div>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[2] >= 2 ? 'block' : 'none',
              }}
              value="back"
            >
              <p>슬롯2</p>
            </div>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{
                height: '200px',
                backgroundColor: 'lightblue',
                display: positionArray[2] >= 3 ? 'block' : 'none',
              }}
              value="back"
            >
              <p>슬롯3</p>
            </div>
          </div>
        </div>
        <div className="sixManLine">
          <p>식스맨: 식스맨은 공격을 받지 않으며</p>
          <p>공격 스킬을 사용 할 수 없습니다</p>
          <p>전투중인 멤버와 교체되거나</p>
          <p> 서포팅 스킬을 사용할 수 있습니다</p>
          <div>
            <div
              onDrop={(e) => onDragLine(e)}
              onDragOver={onDragOver}
              style={{ height: '200px', backgroundColor: 'lightblue' }}
              value="six"
            >
              <p>슬롯1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeckSetting;
