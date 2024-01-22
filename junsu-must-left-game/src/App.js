import CombatDemoTemp from './combat-demo';
import MoreSimpleDamage from './combat-demo-2';
import CombatDemo3 from './combat-demo-3';
import DamageCalculateDemo from './combat-demo-simplyfy';
import CombatDemoUpload from './combat-demo-for-upload';
import DeckSettingTemp from './deck-setting-demo';
import DeckSetting from './DeckSetting';
import CombatDemo from './CombatDemo';
import BattleStart from './BattleStart';
import React, { Component } from 'react';
// axios 추가
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import NotFound from './NotFound';

function App() {
  // 서버에서 받은 데이터를 console로 찍어서 확인한다.
  useEffect(() => {
    axios
      .get('/api/test')
      .then((res) => console.log(res))
      .catch();
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/DeckSetting" element={<DeckSetting />}></Route>
          <Route path="/CombatDemo" element={<CombatDemo />}></Route>
          <Route path="/BattleStart" element={<BattleStart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
