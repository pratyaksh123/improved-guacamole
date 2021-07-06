import React from 'react'
import notactive from '../../assets/img/notactive.svg'
import './inActive.css'

const Inactive:React.FC = () => {
  return (
    <div className="App">
      <img src={notactive} className="App-logo" alt="logo" />
      <h5 className="current__message">This extenstion only works with Leetcode.com</h5>
    </div>
  )
}

export default Inactive
