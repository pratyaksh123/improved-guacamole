import React from 'react'
import { Button } from '@material-ui/core'
import './ProblemsPage.css'

function ProblemsPage() {
  
  return (
    <div className="page">
      <div className="question__headingLeft">
        <div className="question__number">420</div>
        <div className="question__tag">
          <button className="easy_green">Easy</button>
        </div>
      </div>
      <div className="questions__headingRight">
        <div className="profile"></div>
      </div>
      <div className="question">Two Sum</div>
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
