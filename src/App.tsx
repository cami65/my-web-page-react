import React from 'react';
import './App.scss';
import {Header} from './pages/Header/Header'

import {Logos} from './pages/Logos/Logos'
import { Hiw } from './pages/Hiw/Hiw';
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Logos/>
        <Hiw/>
      </main>
    </div>
  );
}

export default App;




