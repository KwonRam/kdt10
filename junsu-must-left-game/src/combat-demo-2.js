function MoreSimpleDamage() {
  const jhonnaSimple = (attack, defense) => {
    let hit = true;
    if (hit) {
      // 명중했을 때 데미지 계산
      let damage = attack;
      console.log('공격력 스탯 ', damage);

      // 크리티컬 여부 판정
      //let criticalChance = selectedCharacter.critical;
      //const critical = Math.random() < criticalChance;

      /*if (critical) {
        // 크리티컬 데미지 적용
        damage *= 1.5; // 예시로 크리티컬일 때 데미지를 2배로 증가시킴
        console.log('critical');
      }*/

      // 방어력 선언
      //let defense = 0;

      // 방어 수치에 따른 데미지 감소
      /*if (selectedCharacter.isMagic === true) {
        defense = selectedEnemy.magicResist;
        console.log('마법방어 ', defense);
      } else {
        defense = selectedEnemy.physicResist;
        console.log('물리방어 ', defense);
      }*/

      //데미지 공식
      //대미지 = 공격력 * (1 - 방어율) - 방어상수
      //방어율 = 방어력 / (1 + 방어력)
      //방어상수 계산은 어케하지
      let defenseConstant = defense - damage; //방어상수
      defenseConstant = Math.max(0, defenseConstant);
      console.log(defenseConstant, '방어상수');
      let defenseRate = defense / (1 + defense); //방어율
      console.log(defenseRate, '방어율');
      damage = damage * (1 - defenseRate) - defenseConstant * 0.3 + 1; //데미지계산

      // 음수 데미지 방지
      damage = Math.max(0, damage);

      // 데미지를 정수로 소숫점 0.75 이상 올림
      let damageFloored = Math.floor(damage);
      if (damage - damageFloored < 0.75) {
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
      console.log('최종 데미지 ', damage);

      // 타겟의 현재 HP 차감
      //enemyCharacter.HPcurrent -= damage;

      // 음수 HP 방지
      //enemyCharacter.HPcurrent = Math.max(0, enemyCharacter.HPcurrent);
    } else {
      console.log('회피');
    }
  };

  const runJhonnaSimple = () => {
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        jhonnaSimple(i, j);
      }
    }
  };

  return (
    <div>
      <button onClick={() => runJhonnaSimple()}>해 줘</button>
    </div>
  );
}

export default MoreSimpleDamage;
