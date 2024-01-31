import React from 'react';
import { Link } from 'react-router-dom';
import { Route, useParams } from 'react-router-dom';
import BattleMaps from './mapData';
import BattleMapDetail from './BattleMapDetail';

function BattleMap() {
  return (
    <div>
      <h1>BattleMap</h1>
      <ul>
        <Link to="/BattleMap/chapter0/0">
          <li>0장 0챕(테스트 맵)</li>
        </Link>
        <Link to="/BattleMap/chapter1/1">
          <li>1장 1챕</li>
        </Link>
        <Link to="/BattleMap/chapter1/2">
          <li>1장 2챕</li>
        </Link>
        <Link to="/BattleMap/chapter1/3">
          <li>1장 3챕</li>
        </Link>
        <Link to="/BattleMap/chapter2/1">
          <li>2장 1챕</li>
        </Link>
        <Link to="/BattleMap/chapter2/2">
          <li>2장 2챕</li>
        </Link>
        <Link to="/BattleMap/chapter2/3">
          <li>2장 3챕</li>
        </Link>
      </ul>
    </div>
  );
}

export default BattleMap;
