import React from 'react'
import logo from '../../assets/img/logo.svg'
import Greetings from '../../containers/Greetings/Greetings'
import './inActive.css'

const Inactive = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This Extension Only works on Leetcode.com</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  )
}

export default Inactive
