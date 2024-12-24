import React from 'react';
import LinkButton from './components/LinkButton';
import ProfileImage from './components/ProfileImage';
import Images from './assets/apple.png';
import AppleIcon from './assets/apple2.png';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <main>
        <h1>
          Apple Stream Tv
          <img src={AppleIcon} alt="Apple Icon" className="icon" />
        </h1>
        <ProfileImage src={Images} alt="Profile" />
        <h1>Free live stream</h1>
        <LinkButton url="https://whomeenoaglauns.com/4/8685760" text="Football Stream"/>
        <LinkButton url="https://www.profitablecpmrate.com/s99hsyay2?key=e0ebf2ace4d775d12331a4c1440a2acb" text="Live Movies" />
       <LinkButton url="https://whomeenoaglauns.com/4/8685760" text="XXX VIDEO WEB" />
        <LinkButton url="https://www.profitablecpmrate.com/bmfikw080n?key=0c1a475b6b55492f334ba63ce955ffac" text="Apple music" />
        {/* Menambahkan DirectLink yang disembunyikan */}
        <iframe
          src="https://whomeenoaglauns.com/4/8696460"
          style={{ display: 'none' }}
          title="profitablecpmrate-directlink"
        ></iframe>
        <h2>Apple Stream © 2024 Design By Idin Iskandar </h2>
      </main>
    </div>
  );
};

export default App;
