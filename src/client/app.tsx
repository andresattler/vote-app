import * as React from 'react'
import {
  BrowserRouter as Router,
  Route
  } from 'react-router-dom'

import './style.scss'
import Nav from './components/Nav/'
import Header from './components/Header/'
import Home from './components/Home/'
import Login from './components/Login'

const App = () =>
  <Router>
    <React.Fragment>
      <Nav />
      <Header />
      <main>
        <Route exact path='/' comonent={Home} />
        <Route path='/login' component={Login} /> 
        <Route path='/sign-up' component={Login} />
      </main>
      <footer>coded with passion by Andre Sattler</footer>
    </React.Fragment>
  </Router>
export default App
