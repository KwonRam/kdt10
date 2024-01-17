import { useState } from 'react';

function DamageCalculateDemo() {
  let [selectedCharacter, setSelectedCharacter] = useState({
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
  });

  let [selectedEnemy, setSelectedEnemy] = useState({
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
    activeSkillSecond: '내가 동경한 사람은',
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
  });

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
        damage *= 1.5; // 예시로 크리티컬일 때 데미지를 2배로 증가시킴
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

  const onRunFight = () => {
    let a,
      b = {
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

    let arrayTemp = [a, b];
    arrayTemp = damageCalculation(selectedCharacter, selectedEnemy);

    setSelectedCharacter(arrayTemp[0]);
    setSelectedEnemy(arrayTemp[1]);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '500px', display: 'flex' }}>
        아군
        <div>
          <img
            src={process.env.PUBLIC_URL + `/img/${selectedCharacter.img}.png`}
            style={{ width: '120px' }}
            alt={`${selectedCharacter.img}`}
          ></img>
        </div>
        <div>
          <div>이름 {selectedCharacter.charName}</div>
          <div>
            HP {selectedCharacter.HPcurrent}/{selectedCharacter.HPstat}
          </div>
          <div>데미지 유형 {selectedCharacter.isMagic ? '마법' : '물리'}</div>
          <div>물리방어 {selectedCharacter.physicResist}</div>
          <div>마법방어 {selectedCharacter.magicResist}</div>
          <div>공격력 {selectedCharacter.attack}</div>
          <div>속도 {selectedCharacter.speed}</div>
          <div>명중 {selectedCharacter.accuracy}</div>
          <div>회피 {selectedCharacter.evasion}</div>
          <div>크리티컬 {selectedCharacter.critical}</div>
        </div>
      </div>
      <button onClick={() => onRunFight()}>싸워라</button>
      <div style={{ width: '500px', display: 'flex' }}>
        적군
        <div>
          <img
            src={process.env.PUBLIC_URL + `/img/${selectedEnemy.img}.png`}
            style={{ width: '120px' }}
            alt={`${selectedEnemy.img}`}
          ></img>
        </div>
        <div>
          <div>이름 {selectedEnemy.charName}</div>
          <div>
            HP {selectedEnemy.HPcurrent}/{selectedEnemy.HPstat}
          </div>
          <div>데미지 유형 {selectedCharacter.isMagic ? '마법' : '물리'}</div>
          <div>물리방어 {selectedEnemy.physicResist}</div>
          <div>마법방어 {selectedEnemy.magicResist}</div>
          <div>공격력 {selectedEnemy.attack}</div>
          <div>속도 {selectedEnemy.speed}</div>
          <div>명중 {selectedEnemy.accuracy}</div>
          <div>회피 {selectedEnemy.evasion}</div>
          <div>크리티컬 {selectedEnemy.critical}</div>
        </div>
      </div>
    </div>
  );
}
export default DamageCalculateDemo;
