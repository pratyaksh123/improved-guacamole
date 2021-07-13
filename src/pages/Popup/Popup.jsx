import React, { useEffect, useState } from 'react'
import NoProblemPage from '../../Components/NoProblemsPage/NoProblemPage'
import FetchProblemData from '../../utils/fetchProblemData'
import isProblem from '../../utils/isProblem'
import ProblemsPage from './ProblemsPage/ProblemsPage'
import './Popup.css'

const Popup = () => {
  const [url, setUrl] = useState('')
  const [currentProblem, setCurrentProblem] = useState(null)

  useEffect(() => {
    chrome.tabs.query(
      {
        active: true,
        lastFocusedWindow: true,
      },
      (tabs) => {
        let tab = tabs[0]
        setUrl(tab.url)
        chrome.tabs.sendMessage(
          tab.id,
          { action: 'executeCode' },
          (response) => {
            setCurrentProblem(response.data)
          }
        )
      }
    )
  }, [])

  if (url !== '' && isProblem(url)) {
    console.log(currentProblem)
    return (
      <div>
        {currentProblem && (
          <ProblemsPage
            problemName={currentProblem.problemName}
            problemDifficulty={currentProblem.problemDifficulty}
            problemId={currentProblem.problemId}
          />
        )}
      </div>
    )
  } else {
    return <NoProblemPage />
  }
}

export default Popup
