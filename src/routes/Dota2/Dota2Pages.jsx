import React, { useEffect, useState } from 'react';
import Navbar from '../../layout/Navbar';
import "../../assets/Styles/Dota2Page/Dota2.css";
// Import MUI
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// Import Json
import DotaRandom from './Dota2.json';

const Dota2Pages = () => {
  const [TeamSelection, setTeamSelection] = useState("");
  const [RoleSelection, setRoleSelection] = useState("All");
  const [isLoading , setLoading] = useState(false);
  const [ChallengeLoading , setChallengeLoading] = useState(false);

  const RandomStrat = ()=>{
    const randomStrat = document.getElementById('randomStrat');
    const DetailStrat = document.getElementById('DetailStrat');
    let x = Math.floor(Math.random() * DotaRandom.Strat.Team.length);
    let y = Math.floor(Math.random() * DotaRandom.Strat.Duo.length);
    let z = Math.floor(Math.random() * DotaRandom.Strat.Solo.length);

    try{
      setLoading(true)
      randomStrat.classList.add('fade');
      DetailStrat.classList.add('fade');
      if(TeamSelection == 'Team'){
        randomStrat.innerHTML = [DotaRandom.Strat.Team[x].content];
        DetailStrat.innerHTML = [DotaRandom.Strat.Team[x].details];
      }
      if(TeamSelection == 'Duo'){
        randomStrat.innerHTML = [DotaRandom.Strat.Duo[y].content];
        DetailStrat.innerHTML = [DotaRandom.Strat.Duo[y].details];
      }
      if(TeamSelection == 'Solo'){
        randomStrat.innerHTML = [DotaRandom.Strat.Solo[z].content];
        DetailStrat.innerHTML = [DotaRandom.Strat.Solo[z].details];
      }
    }catch{
      console.log("Error Please Try Again Later");
    }finally{
      setLoading(false);
      setTimeout(function(){
        randomStrat.classList.remove('fade');
        DetailStrat.classList.remove('fade');
      },1000);
    }

  }
  const RandomChallenge = async () =>{
    const ChallengeBtn = document.getElementById('Challenge-random-btn');
    const ChallengeShowText = document.getElementById('Challenge-Random');
    let Allrandom = Math.floor(Math.random() * DotaRandom.Challenge.ALL.length);
    let HardsupRandom = Math.floor(Math.random() * DotaRandom.Challenge.HardSupport.length);
    let SoftsupRandom = Math.floor(Math.random() * DotaRandom.Challenge.SoftSupport.length);
    let OfflaneRandom = Math.floor(Math.random() * DotaRandom.Challenge.Offlane.length);
    let MidlaneRandom = Math.floor(Math.random() * DotaRandom.Challenge.Mid.length);
    let CarryRandom = Math.floor(Math.random() * DotaRandom.Challenge.Carry.length);
    setChallengeLoading(true);
    
    
    ChallengeShowText.classList.add('fade');
    ChallengeShowText.classList.add('hidden');
    setTimeout(function(){
      setChallengeLoading(false);
    },990)
    setTimeout(function(){
      if(RoleSelection == 'All'){
        ChallengeShowText.innerHTML = [DotaRandom.Challenge.ALL[Allrandom].ChallengeName];
      }
      if(RoleSelection == 'Hard_Support'){
        ChallengeShowText.innerHTML = [DotaRandom.Challenge.HardSupport[HardsupRandom].ChallengeName];
      }
      if(RoleSelection == 'Soft_Support'){
        ChallengeShowText.innerHTML = [DotaRandom.Challenge.SoftSupport[SoftsupRandom].ChallengeName];
      }
      if(RoleSelection == 'OffLane'){
        ChallengeShowText.innerHTML = [DotaRandom.Challenge.Offlane[OfflaneRandom].ChallengeName];
      }
      if(RoleSelection == 'MidLane'){
        ChallengeShowText.innerHTML = [DotaRandom.Challenge.Mid[MidlaneRandom].ChallengeName];
      }
      if(RoleSelection == 'Carry'){
        ChallengeShowText.innerHTML = [DotaRandom.Challenge.Carry[CarryRandom].ChallengeName];
      }
      ChallengeShowText.classList.remove('fade');
      ChallengeShowText.classList.remove('hidden');
    },999);
  }

  return (
    <div className='Dota2-Container'>
      <div className="Dota2-Header">
        <Navbar />
      </div>
      <div className="Dota2-Body">
        <div className='Dota2-warning space-y-5'>
          <p className='Dota2-warning-text text-red-500 font-bold text-2xl'>! Warning !</p>
          <p className='text-2xl font-bold text-white'>Please do not use it to play in Ranked Mode.</p>
        </div>
        <div className="Dota2-Contents">
          <div className="Dota2-LeftContent">
            <div className="Dota2-Strat">
              <p className='text-white font-bold text-4xl text-center mt-5 underline'>Dota 2 Strat</p>
              <div className='Dota2-Strat-RandomBox'>
                <div className='my-10'>
                  <p className='Randomed text-4xl font-bold' id='randomStrat'>RANDOM STRAT</p>
                </div>
                <p className='centerline'></p>
                <div className='mt-10'>
                  <p></p>
                  <p className='Randomed text-4xl font-bold' id='DetailStrat'>DOTA 2</p>
                </div>
              </div>
              <div className='font-bold'>
                <FormControl className=''>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                    <div className='Dota2-Strat-TeamSelector space-x-5'>
                      <FormControlLabel className={`Dota2-Strat-TeamRaio ${TeamSelection == 'Team' ? 'selected' : ''}`} id='Dota2-Team-Radio' value="Team" control={<Radio />} label="TEAM" onChange={(e) => { setTeamSelection(e.target.value) }} />
                      <FormControlLabel className={`Dota2-Strat-TeamRaio ${TeamSelection == 'Duo' ? 'selected' : ''}`} id='Dota2-Team-Radio' value="Duo" control={<Radio />} label="Duo" onChange={(e) => { setTeamSelection(e.target.value) }} />
                      <FormControlLabel className={`Dota2-Strat-TeamRaio ${TeamSelection == 'Solo' ? 'selected' : ''}`} id='Dota2-Team-Radio' value="Solo" control={<Radio />} label="Solo" onChange={(e) => { setTeamSelection(e.target.value) }} />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <button className='strat-random-btn' onClick={(e)=>{RandomStrat()}}>
              {isLoading ? (
                <p>Loading</p>
              ):(
                <p className='strat-random-btntext'>Random Strat</p>
              )}
            </button>
          </div>
          <div className="Dota2-RightContent">
            <div className="Dota2-Challenge">
              <div className="Dota2-Challenge-Content">
                <p className='text-4xl text-white font-bold underline'>Dota 2 Challenge</p>
                <div className="Dota2-Challenge-Randombox">
                  {ChallengeLoading ? (
                    <p className='Challenge-Random text-gray-500'>Loding...</p>  
                  ):(
                    <p className='Challenge-Random' id='Challenge-Random'>Random Challenge for fun :D</p>
                  )}
                </div>
                <div className=''>
                  <FormControl className=''>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                      <div className='Dota2-Strat-TeamSelector '>
                        <FormControlLabel className={`Dota2-Strat-TeamRaio ${RoleSelection == 'All' ? 'selected' : ''}`} id='Dota2-Team-Radio' value="All" checked={RoleSelection == 'All'} control={<Radio />} label="All" onChange={(e) => { setRoleSelection(e.target.value) }} />
                        <FormControlLabel className={`Dota2-Strat-TeamRaio ${RoleSelection == 'Hard_Support' ? 'selected' : ''}`} id='Dota2-Team-Radio' value="Hard_Support" control={<Radio />} label="Hard_Support" onChange={(e) => { setRoleSelection(e.target.value) }} />
                        <FormControlLabel className={`Dota2-Strat-TeamRaio ${RoleSelection == 'Soft_Support' ? 'selected' : ''}`} id='Dota2-Team-Radio' value="Soft_Support" control={<Radio />} label="Soft_Support" onChange={(e) => { setRoleSelection(e.target.value) }} />
                        <FormControlLabel className={`Dota2-Strat-TeamRaio ${RoleSelection == 'OffLane' ? 'selected' : ''}`} id='Dota2-Team-Radio' value="OffLane" control={<Radio />} label="OffLane" onChange={(e) => { setRoleSelection(e.target.value) }} />
                        <FormControlLabel className={`Dota2-Strat-TeamRaio ${RoleSelection == 'MidLane' ? 'selected' : ''}`} id='Dota2-Team-Radio' value="MidLane" control={<Radio />} label="MidLane" onChange={(e) => { setRoleSelection(e.target.value) }} />
                        <FormControlLabel className={`Dota2-Strat-TeamRaio ${RoleSelection == 'Carry' ? 'selected' : ''}`} id='Dota2-Team-Radio' value="Carry" control={<Radio />} label="Carry" onChange={(e) => { setRoleSelection(e.target.value) }} />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div>
                  <button className='Challenge-random-btn' id='Challenge-random-btn' onClick={RandomChallenge}>Random Challenge</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dota2Pages