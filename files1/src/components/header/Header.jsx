import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' flex gap-4 p-4 border-b-2 border-solid border-black'>
        <Link to="/">Home</Link>
        <Link to="/contactus">Contact us</Link>
        <Link to="/signin">Sign in</Link>
    </div>
  )
}

export default Header