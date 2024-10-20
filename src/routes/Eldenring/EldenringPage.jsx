import React, { useEffect } from 'react'
import Navbar from '../../layout/Navbar'
import '../../assets/Styles/Eldenring/Eldenring.css'

// Import Image
import EldenringCenterBG from '../../assets/img/Eldenring/EldenringCenterBG.jpg'

const TextintroBG = () =>{
    const TextIntroBG = document.getElementById('TextIntroBG');
    const TextIntro = document.getElementById('TextIntro');

    TextIntro.addEventListener('mouseenter',()=>{
        TextIntroBG.classList.add('active');
    })
    
    TextIntro.addEventListener('mouseleave',()=>{
        TextIntroBG.classList.remove('active');
    })
}
useEffect(()=>{
    TextintroBG()
},[])

const EldenringPage = () => {
  return (
    <div className='ER-Container'>
        <div className="ER-Header">
            <Navbar/>
        </div>
        <div className="ER-Body">
            <img className='CenterBG' src={EldenringCenterBG} alt="" />
            <div className="TextIntros">
                <p id='TextIntroBG' className='TextIntroBG'></p>
                <p id='TextIntro' className='TextIntro'>Get Challenge</p>
            </div>
        </div>
    </div>
  )
}

export default EldenringPage