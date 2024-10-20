import React, { useEffect } from 'react'
import Navbar from '../../layout/Navbar'
import '../../assets/Styles/GamesListPage/GameList.css'
import { Link } from 'react-router-dom'
// import data
import GamelistData from './Gamelist.json'


// IMPORT AOS
import AOS from 'aos'
import "aos/dist/aos.css"

const Gamelist = () => {
    const GamesList = GamelistData.Gamelist

    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div>
            <div className="Gameslist-Header">
                <Navbar />
            </div>
            <div className='Gameslist-Body'>
                <div className="">
                    {GamesList.length > 0 ? (
                        <div className='Gameslist-Cards'>
                            {GamesList.map((GL, index) => (
                                <div id='Gameslist-Card' className={`Gameslist-Card`} key={index} data-aos="fade-left">
                                    <Link to={GL.gamelink}>
                                        <img className={`Gameslist-Card-img`} src={GL.gameimg}/>
                                        <p className='Gameslist-Card-name'>{GL.gamename}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p>No Games List</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Gamelist