import React from 'react';
import BattleMaps from './mapData';
import { useParams } from 'react-router-dom';

function BattleMapDetail() {
  let { chapter, ep } = useParams();
  console.log(chapter, ep);
  //console.log(BattleMaps);
  //console.log(BattleMaps.BattleMaps);
  const BattleMap = BattleMaps.BattleMaps.find((i) => i.chapter === chapter);
  return (
    <div>
      <h2>User Detail</h2>
      <p>Battle Chapter {chapter} </p>
      <p>Battle Episode {ep} </p>
      <p>name {BattleMap.name}</p>
    </div>
  );
}

export default BattleMapDetail;
