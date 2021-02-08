import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className='navbar d-flex'>
      <Link className='h3' to='/'>Math Magicians</Link>
      <div className='d-flex'>
        <Link to='/'>Home</Link>
        <Link className='px-2 mx-2 border-left border-right' to='/calculator'>Calculator</Link>
        <Link to='/quote'>Quote</Link>
      </div>
    </nav>
  )
}

export default Navbar