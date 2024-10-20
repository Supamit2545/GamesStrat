import React, { useState } from 'react'
import "../../assets/Styles/RainbowSix/R6Strat.css"
// Import MUI
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// Import IMG
import DualBlade from '../../assets/img/RainbowSixPage/dualsword.png'
import Rook from '../../assets/img/RainbowSixPage/Rook.png'
const R6Strat = () => {
    const [TeamSelection, setTeamSelection] = useState('');
    const [R6BTN, setR6BTN] = useState(0);
    return (
        <div className='R6-Strat-Container'>
            <div className="R6-Strat-contents space-y-10">
                <div className="R6-Strat-RandomBox">
                    <p id='R6-Strat-RandomText' className='R6-Strat-RandomText'></p>
                </div>
                <div className='R6-Strat-TeamSelector'>
                    <div className='flex space-x-10 justify-center'>
                        <button className={`R6-Strat-TeamBTN ${TeamSelection === 'Attacker' ? 'active' : ''}`} id='Dota2-Team-Radio' value="Attacker" label="" onClick={(e) => { setTeamSelection(e.target.value) }}>Attacker <img className='dualbladeicon' src={DualBlade} alt="" /> <span id='R6StratUnderline' className={`R6StratUnderline ${TeamSelection === 'Attacker' ? "active" : ""}`}></span></button>
                        <button className={`R6-Strat-TeamBTN ${TeamSelection === 'Defender' ? 'active' : ''}`} id='Dota2-Team-Radio' value="Defender" label="" onClick={(e) => { setTeamSelection(e.target.value) }}><img className='Rookicon' src={Rook} alt="" /> Defenders <span id='R6StratUnderline' className={`R6StratUnderline ${TeamSelection === 'Defender' ? "active" : ""}`}></span></button>
                    </div>
                </div>
                <div className="R6-Strat-Randombtns text-center">
                    <button id='R6-Strat-BTN' className='R6-Strat-BTN'>Random Strat</button>
                </div>
            </div>
        </div>
    )
}

export default R6Strat