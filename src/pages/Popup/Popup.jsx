import React, { useEffect, useState } from 'react'
import logo from '../../assets/img/logo.svg'
import './Popup.css'

const Popup = () => {
  const [url, setUrl] = useState('')

  useEffect(()=>{
    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
  }, (tabs) => {
      let tab = tabs[0];
      setUrl(tab.url);
  });

  },[])
  return (
    <div className="App">
      <header className="App-header">
      {url && url.match("https://leetcode.com/problems/*") && (<p> Problem Detected !</p>)}
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
