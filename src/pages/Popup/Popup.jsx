import React from 'react'
import logo from '../../assets/img/logo.svg'
import './Popup.css'

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Extension is ready to use !
        </a>
      </header>
    </div>
  )
}

export default Popup
