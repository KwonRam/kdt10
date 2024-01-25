import React from 'react';
import BattleMaps from './mapData.json';
import { useParams } from 'react-router-dom';

function BattleMapDetail() {
  let { map } = useParams();
  const BattleMap = BattleMaps.find((i) => i.id === map.id);
  return (
    <div>
      <h2>User Detail</h2>
      <dt>BattleMaps id</dt>
      <dd>{BattleMap.id}</dd>
      <dt>name</dt>
      <dd>{BattleMap.name}</dd>
    </div>
  );
}

export default BattleMapDetail;
