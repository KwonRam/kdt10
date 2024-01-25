import React from 'react';
import { BrowserRouter, Route, useParams } from 'react-router-dom';
import BattleMaps from './mapData.json';
import BattleMapList from './BattleMapList';
import BattleMapDetail from './BattleMapDetail';

function BattleMap() {
  let { map } = useParams();
  if (map === undefined) {
    map = '';
  }
  console.log(BattleMaps);
  console.log(map);
  return (
    <div>
      <h1>BattleMap</h1>
      <BrowserRouter>
        <Route exact path={map} element={<BattleMapList />} />
        <Route path={`${map}/:id`} element={<BattleMapDetail />} />
      </BrowserRouter>
    </div>
  );
}

export default BattleMap;
