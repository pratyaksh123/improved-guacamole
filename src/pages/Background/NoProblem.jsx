import React from 'react'
import logo from '../../assets/img/noproblem.svg'
import './NoProblem.css'

const NoProblem = () => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h5 className="text">No Problems Scheduled for today.</h5>
      <h5 className="text2">Do some new ones or take a break 💛</h5>
    </div>
  )
}

export default NoProblem
