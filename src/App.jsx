import { useState } from 'react'
import './App.css'
import './assets/Styles/Home/Home.css'
import Navbar from './layout/Navbar'
import { Link } from 'react-router-dom'

// Image Import
import background from './assets/Homeimg/bg1.jpg'
import Dota2 from './assets/img/GameslistPage/Dota2Logo.jpg'
import Eldenring from './assets/img/GameslistPage/EldenringLogo.png'
import R6Logo from './assets/img/GameslistPage/R6Logo.png'
import Fortnite from './assets/img/GameslistPage/FortniteLogo.png'
import Minecraft from './assets/img/GameslistPage/MinecraftLogo.png'

function App() {
  let i = 0;
  let images = []
  images[0] = "https://github.com/Supamit2545/GamesStrat/blob/main/src/assets/Homeimg/bg1.jpg?raw=true";
  images[1] = "https://github.com/Supamit2545/GamesStrat/blob/main/src/assets/Homeimg/bg2.jpg?raw=true";
  images[2] = "https://github.com/Supamit2545/GamesStrat/blob/main/src/assets/Homeimg/bg3.jpg?raw=true";
  const AutoChangeBG = () => {
    const bgmain = document.querySelector('main');
    if (bgmain) {
      bgmain.style.backgroundImage = `url(${images[i]})`;
      i++;
      if (i >= images.length) {
        i = 0;
      }
    }
    setTimeout(AutoChangeBG, 10000);
  };
  AutoChangeBG()

  return (
    <main className='main'>
      <div className="home-header">
        <Navbar/>
      </div>
      <div className="home-body">
        <div className='home-body-container'>
          <div className="home-body-container-left">
            <div className="home-left-text">
              <h6 className='home-left-text1 h-40'>𝓦𝓮𝓵𝓬𝓸𝓶𝓮</h6>
              <p className='home-left-text2'>to</p>
              <div className="home-left-text3">
                <span className='text-red-400'>GameStrat</span> <span>&</span> <span className='text-cyan-500'>Challenge</span>
              </div>
            </div>
            <div className='home-left-btn ml-24 '>
              <Link to="/Gameslist"><button className='left-btn-btn'>Let's GO</button></Link>
            </div>
          </div>
          <div className="home-body-container-right">
            <div className='Home-Right-Pictures'>
              <img className='Home-Right-Pic1' src={R6Logo} alt="" />
              <img className='Home-Right-Pic2' src={Eldenring} alt="" />
              <img className='Home-Right-Pic3' src={Fortnite} alt="" />
              <img className='Home-Right-Pic4' src={Minecraft} alt="" />
              <img className='Home-Right-PicCenter' src={Dota2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
