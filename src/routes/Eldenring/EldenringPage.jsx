import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/Navbar'
import '../../assets/Styles/Eldenring/Eldenring.css'
import EldenringData from './Eldenring.json'

// Import Image
import EldenringCenterBG from '../../assets/img/Eldenring/EldenringCenterBG.jpg'
import ERKeyE from '../../assets/img/Eldenring/ER_Button_Icon_Keyboard_E.webp'


const EldenringPage = () => {
    const [isLoading , setIsLoading] = useState(false);
    const [DLC , setDLC] = useState();
    const [LinkMod ,setLinkMod] = useState('#')
    const [getCha , setGetCha] = useState(false)

    const TextintroBG = () => {
        const TextIntroBG = document.getElementById('TextIntroBG');
        const TextIntro = document.getElementById('TextIntro');

        TextIntro.addEventListener('mouseenter', () => {
            TextIntroBG.classList.add('active');
        })

        TextIntro.addEventListener('mouseleave', () => {
            TextIntroBG.classList.remove('active');
        })
    }
    const RandomChallenge = () => {
        const ERSTEXT = document.getElementById('ER-Random-Text');
        const Extra = document.getElementById('Extra-Random');
        const ChallengeName = document.getElementById('Detail-Challenge-Text1');
        const HowtoPlay = document.getElementById('Detail-Challenge-Text2');
        const DetailChallenge = document.getElementById('Detail-Challenge-Text3');
        const DetailDLC = document.getElementById('Detail-Challenge-Text4');
        const modimg = document.getElementById('mod-img');
        const DetailMod = document.getElementById('Detail-Mod');
        const LinkToMod = document.getElementById('LinkToMod');
        
        let x = Math.floor(Math.random() * EldenringData.Challenge.length);
        ERSTEXT.innerHTML = 'Loading...';
        Extra.innerHTML = 'Loading...';
        ChallengeName.innerHTML = 'Loading...';
        HowtoPlay.innerHTML = 'Loading...';
        DetailChallenge.innerHTML = 'Loading...';
        DetailDLC.innerHTML = 'Loading...';
        setTimeout(function(){
            ERSTEXT.innerHTML = EldenringData.Challenge[x].Name;
            ChallengeName.innerHTML = EldenringData.Challenge[x].Name;
            HowtoPlay.innerHTML = EldenringData.Challenge[x].How_to_play;
            DetailChallenge.innerHTML = EldenringData.Challenge[x].Detail;
            DetailDLC.innerHTML = EldenringData.Challenge[x].dlcNeeded;
            Extra.innerHTML = EldenringData.Challenge[x].Extra;
            modimg.src = EldenringData.Challenge[x].ImgMod;
            DetailMod.innerHTML = EldenringData.Challenge[x].DetailMod;
            setLinkMod(EldenringData.Challenge[x].LinkMod);

            if(EldenringData.Challenge[x].dlcNeeded  === 'Yes'){
                setDLC(true)
            }else{
                setDLC(false)
            }
        },900)

        console.log("Randomed Challenge");
    }

    const KeyPress = (event) =>{
        if(event.key == 'e'){
            RandomChallenge()
        }
    }
    

    useEffect(() => {
        TextintroBG()
        window.addEventListener('keydown', KeyPress);
        return () => {
            window.removeEventListener('keydown', KeyPress);
        };
    }, [])
    console.log(isLoading)

    return (
        <div className='ER-Container'>
            <div className="ER-Header">
                <Navbar />
            </div>
            <div className="ER-Body">
                <div>
                    <div className="TextIntros">
                        <img className='CenterBG' src={EldenringCenterBG} alt="" />
                        <p id='TextIntroBG' className='TextIntroBG'></p>
                        <p id='TextIntro' className='TextIntro' onClick={(e)=>{setGetCha(true)}}>Get Challenge</p>
                    </div>
                </div>
                <div id='RandomContent' className={`RandomContent ${getCha == true ? "  active":""}`}>
                    <div className="RandomCon-Left">
                        <div className="RandomCon-Left-Show">
                            <div className='RandomCon-Left-TopLine'></div>
                            <p id='ER-Random-Text' className='text-center text-white text-4xl font-bold font-mono'></p>
                            <div className='text-center text-white'>
                                <div className='RandomCon-Left-BotLine'></div>
                                <div className='flex justify-center space-x-5'>
                                    <img src={ERKeyE} alt="" width={40}/><p className='font-bold my-auto'> : Reroll</p><p className=' my-auto'>OR</p><button id='RandomBTN' className='font-bold border-2 border-white bg-blue-800 px-5 rounded-lg hover:bg-blue-500 transition-all my-auto' onClick={RandomChallenge}>Click to Reroll</button>
                                </div>
                                <div className='RandomCon-Left-BotLine'></div>
                            </div>
                        </div>
                        <p className='text-white text-4xl font-bold text-center underline'>Detail of Challenge</p>
                        <div className='Detail-Challenge-Show'>
                            <p>Name : <span id='Detail-Challenge-Text1' className='text-xl'></span></p>
                            <p>How to Play This Challenge : <span id='Detail-Challenge-Text2' className='text-xl'></span></p>
                            <p>Detail Challenge : <span id='Detail-Challenge-Text3' className='text-xl'></span></p>
                            <p>DLC : <span id='Detail-Challenge-Text4' className={DLC == true ? ("text-red-500"):("text-green-500")}></span></p>
                        </div>
                    </div>
                    <div className="RandomCon-Right">
                        <p className='text-center text-sky-500 font-bold text-5xl underline'>For FUN!</p>
                        <div className='LiveSplit'>
                            <div className='flex'>  
                                <img src="https://livesplit.org/images/icon.svg" alt="" width={50}/>
                                <p className='text-4xl text-white font-mono font-bold'>LiveSplit</p>
                            </div>
                            <div>
                                <p className='text-white'>LiveSplit is SpeedrunnerProgram to show howlong time played run or challenge This Program can split time.</p>
                            </div>
                            <div>
                                <a className='text-white font-bold text-3xl transition-all hover:text-black px-2 py-1 border-2 border-black rounded-lg bg-black hover:bg-gray-500' href="https://github.com/LiveSplit/LiveSplit/releases/download/1.8.29/LiveSplit_1.8.29.zip">Get LiveSplit</a>
                            </div>
                        </div>
                        <div className='Forfun-random-show'>
                            <p id='Extra-Random' className='text-center font-bold text-white text-3xl underline'></p>
                            <p className='text-white font-mono font-bold text-xl'></p>
                            <img className='mx-auto my-5' id='mod-img' src="" alt="" width={500}/>
                            <p id='Detail-Mod' className='text-white text-center mb-5'></p>
                            <div className='text-center'>
                                {LinkMod === "#" ? (
                                    <div></div>
                                ):(
                                    <a id='LinkToMod' href={LinkMod}><button className='border-2 border-sky-500 bg-blue-700 font-bold text-2xl px-3 py-1 hover:bg-blue-700 transition-all hover:text-white rounded-lg'>Download Mod</button></a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EldenringPage