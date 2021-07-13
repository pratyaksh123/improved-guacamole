import './style.css'
import React from 'react'

const Button = ({ variant }) => {
  function renderSwitch(e) {
    switch (e) {
      case 'Easy':
        return 'easy'
      case 'Hard':
        return 'hard'
      case 'Medium':
        return 'medium'
    }
  }

  return <button className={'base ' + renderSwitch(variant)}>{variant}</button>
}

export default Button
