import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
  return (
    <div>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      <ul>
        <Link to="/DeckSetting">
          <li>덱 셋팅</li>
        </Link>
        <Link to="/CombatDemo">
          <li>전투 데모</li>
        </Link>
        <Link to="/CombatDemo2">
          <li>전투 데모 2</li>
        </Link>
        <Link to="/StoryDemo">
          <li>스토리 데모</li>
        </Link>
        <Link to="/BattleMap">
          <li>BattleMap</li>
        </Link>
      </ul>
    </div>
  );
};

export default Main;
