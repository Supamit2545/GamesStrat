import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/Navbar'
import '../../assets/Styles/Eldenring/Eldenring.css'

// Import Image
import EldenringCenterBG from '../../assets/img/Eldenring/EldenringCenterBG.jpg'
import ERKeyE from '../../assets/img/Eldenring/ER_Button_Icon_Keyboard_E.webp'


const EldenringPage = () => {
    const [isLoading , setIsLoading] = useState(false);

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
        let x = Math.floor(Math.random() * 10);
        ERSTEXT.innerHTML = 'Loading...';
        Extra.innerHTML = 'Loading...';
        setTimeout(function(){
            ERSTEXT.innerHTML = "เลขที่สุดล่าสุดคือ : " + x;
            Extra.innerHTML = "ExtraRandomNum : " + x;
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
                        <p id='TextIntro' className='TextIntro'>Get Challenge</p>
                    </div>
                </div>
                <div id='RandomContent' className="RandomContent active">
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
                            <p>Name : <span>Hello</span></p>
                            <p>How to Play This Challenge : <span>Hello</span></p>
                            <p>Detail Challenge : </p>
                        </div>
                    </div>
                    <div className="RandomCon-Right">
                        <p className='text-center text-white font-bold text-5xl underline'>For FUN!</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EldenringPage