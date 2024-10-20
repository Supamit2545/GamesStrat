import React from 'react'
import '../../assets/Styles/RainbowSix/R6Challenge.css'

const R6Challenge = () => {
    const RandomChallenge = () =>{
        const randombtn = document.getElementById('R6-Challenge-RandomBTN')
        const showtext = document.getElementById('R6-Challenge-ShowText')

        showtext.innerHTML = "Any Charator || Pistol Only"
    }

  return (
    <div className='R6-Challenge-Container'>
        <div className="R6-Challenge-Contents">
            <div className="R6-Challenge-Box">
                <span id='R6-Challenge-ShowText'></span>
            </div>
            <div className="R6-Challenge-RandomBTN-Box">
                <button id='R6-Challenge-RandomBTN' className='R6-Challenge-RandomBTN' onClick={RandomChallenge}>RANDOM CHALLENGE</button>
            </div>
        </div>
    </div>
  )
}

export default R6Challenge