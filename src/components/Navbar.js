import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className='logo'>Coaches Valley AI</h1>
        <ul>
            <Link to={"/app"}><button className='li'>Dashboard</button></Link>
            <Link to={"/register"}><button className='li'>Signin/Signup</button></Link>
             {/* <Link to={""}>
                <button className='logout'>Log out</button>
            </Link> */}
        </ul>
    </div>
  )
}

export default Navbar