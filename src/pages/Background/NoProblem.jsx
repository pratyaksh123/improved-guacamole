import React from 'react'
import logo from '../../assets/img/noproblem.svg'
import './NoProblem.css'

const NoProblem = () => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h4 className="current__messageTop">No Problems Scheduled for today.</h4>
      <h4 className="current__messageBottom">Do some new ones or take a break 💛</h4>
    </div>
  )
}

export default NoProblem
