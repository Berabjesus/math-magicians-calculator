import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return(
    <section className='d-flex flex-column align-items-center'>
      <h2>404 Page Not Found</h2>
      <Link className='btn btn-info' to='/'>Go To Home</Link>
    </section>
  )
}

export default Error