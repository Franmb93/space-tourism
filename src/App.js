import BackgroundImage from "./images/home/background-home-desktop.jpg"; 
import './App.scss';
import React from 'react';
import Navbar from './components/navbar';
import TextBody from './components/TextBody';
import Circle from './components/Circle';


function App() {

  const homeText = {
    pretitle: 'SO, YOU WANT TO TRAVEL TO',
    title: 'SPACE',
    text: 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!'
  }

  return (
    <div className="App" style={{ backgroundImage:`url(${BackgroundImage})` }}>
      <header className="App-header">
        <Navbar></Navbar>
        <TextBody info={homeText}></TextBody>
        <Circle></Circle>
      </header>
    </div>
  );
}

export default App;
