import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/Navbar'
import '../../assets/Styles/RainbowSix/RainbowSix.css'
import R6Strat from './R6Strat'
import R6Challenge from './R6Challenge'
import R6RCharactor from './R6RCharactor'

const RainbowSixPage = () => {
  const [R6BTN, setR6BTN] = useState();

  const HoverFunctions = () =>{
    useEffect(()=>{
      const R6btn = document.querySelectorAll('#R6BTN');
      
      R6btn.forEach((r6btn)=>{
        const bul = r6btn.querySelector ('#R6btnunderline');
        
        r6btn.addEventListener('mouseenter',()=>{
          bul.classList.add('cactive')
        })
        r6btn.addEventListener('mouseout',()=>{
          bul.classList.remove('cactive')
        })
      })
    },[])
  }

  const setActive = (index) =>{
    localStorage.setItem('active',index)
    setR6BTN(index)
  }

  const AutoSetActive = () =>{
    const Savetab = localStorage.getItem('active')
    const settab = Savetab ? parseInt(Savetab, 10):0;

    setR6BTN(settab)
  }
  useEffect(()=>{
    AutoSetActive()
  },[])
  HoverFunctions()

  return (
    <div className='RS-Container'>
      <div className="RS-Header">
        <Navbar/>
      </div>
      <div className="RS-Body">
        <div className="RS-Contents">
          <div className="R6-CateBTN space-x-5">
            <button id='R6BTN' className={`R6-btn ${R6BTN == 1 ? "active":""}`} onClick={(e)=>{setActive(1)}}>R6 Strat <span id='R6btnunderline'  className={`RSBTN-Underline ${R6BTN == 1 ? "active":""}`}></span></button>
            <button id='R6BTN' className={`R6-btn ${R6BTN == 2 ? "active":""}`} onClick={(e)=>{setActive(2)}}>R6 Challenge <span id='R6btnunderline'  className={`RSBTN-Underline ${R6BTN == 2 ? "active":""}`}></span></button>
            <button id='R6BTN' className={`R6-btn ${R6BTN == 3 ? "active":""}`} onClick={(e)=>{setActive(3)}}>R6 RandomCharacter  <span id='R6btnunderline'  className={`RSBTN-Underline ${R6BTN == 3 ? "active":""}`}></span></button>
          </div>
          <div className={`RS-Content ${R6BTN == 1 ? "active":""}`}>
            <R6Strat/>
          </div>
          <div className={`RS-Content ${R6BTN == 2 ? "active":""}`}>
            <R6Challenge/>
          </div>
          <div className={`RS-Content ${R6BTN == 3 ? "active":""}`}>
            <R6RCharactor/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RainbowSixPage