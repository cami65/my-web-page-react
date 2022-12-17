import React from 'react';
import './App.scss';
import {Header} from './pages/Header/Header'
import {Logos} from './pages/Logos/Logos'
import { Hiw } from './pages/Hiw/Hiw'
import {Properties} from './pages/Properties/Properties'
import { Cont } from './pages/Cont/Cont';
import { Newslatter } from './pages/Newslatter/Newslatter';
import {Footer} from './pages/Footer/Footer' ;


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Logos/>
        <Hiw/>
        <Properties/>
        <Cont/>
        <Newslatter/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;




