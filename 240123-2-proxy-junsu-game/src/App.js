import CombatDemoTemp from './combat-demo';
import MoreSimpleDamage from './combat-demo-2';
import CombatDemo3 from './combat-demo-3';
import DamageCalculateDemo from './combat-demo-simplyfy';
import CombatDemoUpload from './combat-demo-for-upload';
import DeckSettingTemp from './deck-setting-demo';
import DeckSetting from './DeckSetting';
import CombatDemo from './CombatDemo';
import CombatDemo2 from './CombatDemo2';
import StoryDemo from './StoryDemo';
import EnemyPage from './EnemyDeck';
import BattlePrep from './BattleMaps/BattlePrep';
import BattleMap from './BattleMaps/BattleMap';
import BattleMapDetail from './BattleMaps/BattleMapDetail';

import React, { Component } from 'react';
// axios 추가
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import NotFound from './NotFound';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/DeckSetting" element={<DeckSetting />}></Route>
          <Route path="/CombatDemo" element={<CombatDemo />}></Route>
          <Route path="/CombatDemo2" element={<CombatDemo2 />}></Route>
          <Route path="/StoryDemo" element={<StoryDemo />}></Route>
          <Route path="/StoryDemo/:chapter/:ep" element={<StoryDemo />}></Route>
          <Route path="/EnemyPage" element={<EnemyPage />}></Route>
          <Route path="/BattleMap" element={<BattleMap />}></Route>
          <Route path="/BattleMap/:chapter/:ep" element={<BattleMapDetail />} />
          <Route path="/BattlePrep/:chapter/:ep" element={<BattlePrep />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
