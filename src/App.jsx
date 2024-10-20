import { useState } from 'react'
import './App.css'
import './assets/Styles/Home/Home.css'
import Navbar from './layout/Navbar'
import { Link } from 'react-router-dom'

// Image Import
import background from './assets/Homeimg/bg1.jpg'

function App() {
  let i = 0;
  let images = []
  images[0] = "src/assets/Homeimg/bg1.jpg";
  images[1] = "src/assets/Homeimg/bg2.jpg";
  images[2] = "src/assets/Homeimg/bg3.jpg";
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
              <h6 className='home-left-text1'>WELCOME</h6>
              <p className='home-left-text2'>to</p>
              <div className="home-left-text3">
                <span className='text-red-400'>GameStrat</span> <span>&</span> <span className='text-cyan-500'>Challenge</span>
              </div>
            </div>
            <div className='home-left-btn'>
              <Link to="/Gameslist"><button className='left-btn-btn'>Let's GO</button></Link>
            </div>
          </div>
          <div className="home-body-container-right">

          </div>
        </div>
      </div>
    </main>
  )
}

export default App
