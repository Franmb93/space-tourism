import BackgroundImage from "./images/home/background-home-desktop.jpg"; 
import './App.scss';
import React from 'react';
import Home from "./components/Home";

import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <div className="App" style={{ backgroundImage:`url(${BackgroundImage})` }}>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/destination" element={<Home />}></Route>
          <Route path="/crew" element={<Home/>}></Route>
          <Route path="/technology" element={<Home/>}></Route>
        </Routes>    
      </header>
    </div>
  );
}

export default App;
