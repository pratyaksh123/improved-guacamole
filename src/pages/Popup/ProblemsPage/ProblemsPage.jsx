import React from 'react'
import { Button } from '@material-ui/core'
import './ProblemsPage.css'
import DifficultyButton from '../../../Components/DifficultyButton/DifficultyButton'

function ProblemsPage({ problemName, problemId, problemDifficulty }) {
  return (
    <div className="page">
      <div className="question__headingLeft">
        <div className="question__number">{problemId}</div>
        <div className="question__tag">
          <DifficultyButton variant={problemDifficulty} />
        </div>
      </div>
      <div className="questions__headingRight">
        <div className="profile"></div>
      </div>
      <div className="question">{problemName}</div>
      <div className="buttons">
        <div className="first__button">
          <Button className="btna" variant="contained" color="secondary">
            Add Hints
          </Button>
        </div>
        <div className="second__button">
          <Button className="btnb" variant="contained" color="primary">
            Add Approach
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProblemsPage
