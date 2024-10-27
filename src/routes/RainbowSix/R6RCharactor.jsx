import React, { useEffect, useState } from 'react'
import '../../assets/Styles/RainbowSix/R6Charactor.css'
import DualBlade from '../../assets/img/RainbowSixPage/dualsword.png'
import Rook from '../../assets/img/RainbowSixPage/Rook.png'
import R6data from "./R6data.json"

const R6RCharactor = () => {
    const [Team, setTeam] = useState('');
    const [Guntype, setGuntype] = useState('');
    const [ChaATK, setChaATK] = useState(Math.floor(Math.random() * R6data.R6Charactor.Charactor.Attacker.length));
    const [ChaDEF, setChaDEF] = useState(Math.floor(Math.random() * R6data.R6Charactor.Charactor.Defender.length));

    const randomCharactor = () => {
        if(!Team){
            alert('Please select team first!')
        }else{
            const RandomBTN = document.getElementById('R6RCharactor-RandomBTN');
            const RandomBox = document.getElementById('R6RCharactor-Show-Box');
            const RandomChaIMG = document.getElementById('R6RCharactor-Show-img');
            const RandomChaName = document.getElementById('R6RCharactor-Show-name');
    
            if (Team == 'attacker') {
                let AttackerNunRandom = Math.floor(Math.random() * R6data.R6Charactor.Charactor.Attacker.length);
                RandomChaIMG.src = R6data.R6Charactor.Charactor.Attacker[ChaATK].img;
                RandomChaName.innerHTML = R6data.R6Charactor.Charactor.Attacker[ChaATK].name;
                setChaATK(AttackerNunRandom)
            }
            if (Team == 'defender') {
                let DefenderNunRandom = Math.floor(Math.random() * R6data.R6Charactor.Charactor.Defender.length);
                RandomChaIMG.src = R6data.R6Charactor.Charactor.Defender[ChaDEF].img;
                RandomChaName.innerHTML = R6data.R6Charactor.Charactor.Defender[ChaDEF].name;
                setChaDEF(DefenderNunRandom)
            }
    
            RandomBox.classList.add('active');
    
            GunRandom()
            ScopeRandom()
            BarrelRandom()
            GripRandom()
            LaserRandom()
        }
    }
    const GunRandom = () => {
        const RandomPrimaryGun = document.getElementById('Loadout-slot1');
        const RandomPrimaryGunText = document.getElementById('Loadout-slot1-name');
        const RandomSecGun = document.getElementById('Loadout-slot1-sub');
        const RandomSecGunText = document.getElementById('Loadout-slot1-sub-name');
        if (Team == 'attacker') {
            let PriGunRandom = Math.floor(Math.random() * R6data.R6Charactor.Charactor.Attacker[ChaATK].gun.Primary.length);
            let SubGunRandom = Math.floor(Math.random() * R6data.R6Charactor.Charactor.Attacker[ChaATK].gun.Secondary.length);
            setGuntype(R6data.R6Charactor.Charactor.Attacker[ChaATK].gun.Primary[PriGunRandom].type)
            RandomPrimaryGun.src = R6data.R6Charactor.Charactor.Attacker[ChaATK].gun.Primary[PriGunRandom].img
            RandomPrimaryGunText.innerHTML = R6data.R6Charactor.Charactor.Attacker[ChaATK].gun.Primary[PriGunRandom].name
            RandomSecGun.src = R6data.R6Charactor.Charactor.Attacker[ChaATK].gun.Secondary[SubGunRandom].img
            RandomSecGunText.innerHTML = R6data.R6Charactor.Charactor.Attacker[ChaATK].gun.Secondary[SubGunRandom].name
        }
        if (Team == 'defender') {
            let PriGunRandom = Math.floor(Math.random() * R6data.R6Charactor.Charactor.Defender[ChaDEF].gun.Primary.length);
            let SubGunRandom = Math.floor(Math.random() * R6data.R6Charactor.Charactor.Defender[ChaDEF].gun.Secondary.length);
            setGuntype(R6data.R6Charactor.Charactor.Defender[ChaDEF].gun.Primary[PriGunRandom].type)
            RandomPrimaryGun.src = R6data.R6Charactor.Charactor.Defender[ChaDEF].gun.Primary[PriGunRandom].img
            RandomPrimaryGunText.innerHTML = R6data.R6Charactor.Charactor.Defender[ChaDEF].gun.Primary[PriGunRandom].name
            RandomSecGun.src = R6data.R6Charactor.Charactor.Defender[ChaDEF].gun.Secondary[SubGunRandom].img
            RandomSecGunText.innerHTML = R6data.R6Charactor.Charactor.Defender[ChaDEF].gun.Secondary[SubGunRandom].name
        }
    }

    const ScopeRandom = () => {
        const scope = ["RedDot", "Holo", "Reflex", "IronSight", "Magnified"]
        let randomtext = scope[Math.floor(Math.random() * scope.length)]
        const RandomSight = document.getElementById('SightShow');
        const RandomSightName = document.getElementById('SightShowName');
        // let ScopeRandom = Math.floor(Math.random() * R6data.R6Charactor.ATTACHMENT.scope.Holo.length)
        if (randomtext == 'IronSight') {
            let Rdrandom = Math.floor(Math.random() * R6data.R6Charactor.ATTACHMENT.scope.IronSight.length)
            RandomSight.src = R6data.R6Charactor.ATTACHMENT.scope.IronSight[Rdrandom].img
            RandomSightName.innerHTML = R6data.R6Charactor.ATTACHMENT.scope.IronSight[Rdrandom].name
        }
        if (randomtext == 'RedDot') {
            let Rdrandom = Math.floor(Math.random() * R6data.R6Charactor.ATTACHMENT.scope.RedDot.length)
            RandomSight.src = R6data.R6Charactor.ATTACHMENT.scope.RedDot[Rdrandom].img
            RandomSightName.innerHTML = R6data.R6Charactor.ATTACHMENT.scope.RedDot[Rdrandom].name
        }
        if (randomtext == 'Holo') {
            let Holorandom = Math.floor(Math.random() * R6data.R6Charactor.ATTACHMENT.scope.Holo.length)
            RandomSight.src = R6data.R6Charactor.ATTACHMENT.scope.Holo[Holorandom].img
            RandomSightName.innerHTML = R6data.R6Charactor.ATTACHMENT.scope.Holo[Holorandom].name
        }
        if (randomtext == 'Reflex') {
            let RFrandom = Math.floor(Math.random() * R6data.R6Charactor.ATTACHMENT.scope.Reflex.length)
            RandomSight.src = R6data.R6Charactor.ATTACHMENT.scope.Reflex[RFrandom].img
            RandomSightName.innerHTML = R6data.R6Charactor.ATTACHMENT.scope.Reflex[RFrandom].name
        }
        if (randomtext == 'Magnified') {
            let MFrandom = Math.floor(Math.random() * R6data.R6Charactor.ATTACHMENT.scope.Magnified.length)
            RandomSight.src = R6data.R6Charactor.ATTACHMENT.scope.Magnified[MFrandom].img
            RandomSightName.innerHTML = R6data.R6Charactor.ATTACHMENT.scope.Magnified[MFrandom].name
        }
    }
    const BarrelRandom = () => {
        const BarrelShow = document.getElementById('BarrelShow');
        const BarrelShowText = document.getElementById('BarrelShowText');
        let x = Math.floor(Math.random() * R6data.R6Charactor.ATTACHMENT.barrel.length)
        BarrelShow.src = R6data.R6Charactor.ATTACHMENT.barrel[x].img
        BarrelShowText.innerHTML = R6data.R6Charactor.ATTACHMENT.barrel[x].name
    }
    const GripRandom = () => {
        const GripShow = document.getElementById('GripShow');
        const GripShowText = document.getElementById('GripShowText');
        let x = Math.floor(Math.random() * R6data.R6Charactor.ATTACHMENT.grip.length)
        GripShow.src = R6data.R6Charactor.ATTACHMENT.grip[x].img
        GripShowText.innerHTML = R6data.R6Charactor.ATTACHMENT.grip[x].name
    }
    const LaserRandom = () => {
        const LaserShow = document.getElementById('LaserShow');
        const LaserShowText = document.getElementById('LaserShowText');
        let x = Math.floor(Math.random() * R6data.R6Charactor.ATTACHMENT.leser.length)
        LaserShow.src = R6data.R6Charactor.ATTACHMENT.leser[x].img
        LaserShowText.innerHTML = R6data.R6Charactor.ATTACHMENT.leser[x].name
    }

    const AutoHideATT = () => {
        const test = document.getElementById('test')

        if (Guntype == "SHIELD") {
            test.classList.add('hidden')
        } else {
            if (test.classList == "hidden") {
                test.classList.remove('hidden')
            }
        }
    }
    useEffect(() => {
        AutoHideATT()
    }, [Guntype])

    return (
        <div className='R6RCharactor-Container'>
            <div className="R6RCharactor-Contents">
                <div id='R6RCharactor-Show-Box' className="R6RCharactor-Show-Box">
                    <div className=''>
                        <img id='R6RCharactor-Show-img' className='R6RCharactor-Show-img' src="" />
                        <p id='R6RCharactor-Show-name' className='text-white text-center text-4xl font-bold bg-gray-500'></p>
                    </div>
                    <div className="R6RCharactor-Show-Loadout" id='Loadout'>
                        <div className=''>
                            <img id='Loadout-slot1' className="Loadout-slot1" alt='Gun' src='' />
                            <p id='Loadout-slot1-name' className='Loadout-slot1-name'>asdas</p>
                            <img id='Loadout-slot1-sub' className='Loadout-slot1-sub' src="" alt="" />
                            <p id='Loadout-slot1-sub-name' className='Loadout-slot1-sub-name'></p>
                        </div>
                        <div id='test'>
                            <div className='R6RCharactor-Attentment'>
                                <div className="Loadout-slot2">
                                    <img id='SightShow' src="" alt="" />
                                    <p id='SightShowName'></p>
                                </div>
                                <div className="Loadout-slot3">
                                    <img id='BarrelShow' src="" alt="" />
                                    <p id='BarrelShowText'></p>
                                </div>
                                <div className="Loadout-slot4">
                                    <img id='GripShow' src="" alt="" />
                                    <p id='GripShowText'></p>
                                </div>
                                <div className="Loadout-slot5">
                                    <img id='LaserShow' src="" alt="" />
                                    <p id='LaserShowText'></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='R6-Strat-TeamSelector mt-10'>
                    <div className='flex space-x-10 justify-center'>
                        <button className={`R6-Strat-TeamBTN ${Team == 'attacker' ? 'active' : ''}`} id='Dota2-Team-Radio' value="attacker" label="" onClick={(e) => { setTeam(e.target.value) }}>Attacker <img className='dualbladeicon' src={DualBlade} alt="" /> <span id='R6StratUnderline' className={`R6StratUnderline ${Team === 'attacker' ? "active" : ""}`}></span></button>
                        <button className={`R6-Strat-TeamBTN ${Team == 'defender' ? 'active' : ''}`} id='Dota2-Team-Radio' value="defender" label="" onClick={(e) => { setTeam(e.target.value) }}><img className='Rookicon' src={Rook} alt="" /> Defenders <span id='R6StratUnderline' className={`R6StratUnderline ${Team === 'defender' ? "active" : ""}`}></span></button>
                    </div>
                </div>
                <div className="R6RCharactor-RandomBTN-Box">
                    <button id='R6RCharactor-RandomBTN' className="R6RCharactor-RandomBTN" onClick={randomCharactor}>Random</button>
                </div>
            </div>
        </div>
    )
}

export default R6RCharactor