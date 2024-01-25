import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BattleMaps from './mapData.json';

function BattleMapList() {
  let { map } = useParams();
  return (
    <div>
      <h2>BattleMap List</h2>
      <ul>
        {BattleMaps.map(({ id, name }) => (
          <li key={id}>
            <Link to={`${map.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BattleMapList;
