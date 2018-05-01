import * as React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const Nav = () =>
  <nav className='navigation'>
    <div className='navigation-group'>
      <h2>Voteinator</h2>
      <Link to='/'>Home</Link>
    </div>
    <div className='navigation-group'>
      <Link to='/sign-up'>Sign up</Link>
      <Link to='/login'>Login</Link>
    </div>
  </nav>

export default Nav
