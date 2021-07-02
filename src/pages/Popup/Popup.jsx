import React, { useEffect, useState } from 'react'
import logo from '../../assets/img/logo.svg'
// import './Popup.css'
import NoProblemPage from "../../Components/NoProblemsPage/NoProblemPage"

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
      {url && url.match("https://leetcode.com/problems/*") && (<p> Problem Detected !</p>)}
       <NoProblemPage/>
    </div>
  )
}

export default Popup
