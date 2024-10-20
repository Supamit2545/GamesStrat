import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/Styles/Navbar/Navbar.css"

const Navbar = () => {
  return (
    <nav className='flex h-20 px-5'>
      <div className='nav-left my-auto'>
        <Link to={'/'}>
          <div className=' flex'>
            <img src="" alt="" />
            <p className='text-white text-4xl font-bold'>Supamit'S Demo</p>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar