import React, { useEffect, useState } from 'react'
import NoProblemPage from '../../Components/NoProblemsPage/NoProblemPage'
import FetchProblemData from '../../utils/fetchProblemData'
import isProblem from '../../utils/isProblem'

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
        chrome.tabs.sendMessage(tab.id, { action: 'executeCode' },(response)=>{
          console.log(response)
          setCurrentProblem(response.data)
        });
      }
    )
  }, [])

  if (url !== '' && isProblem(url)){
    return (
      <div className="App">
        <p>Problem</p>
        {currentProblem && (<p>{currentProblem.problemName}</p>)}
        {currentProblem && (<p>{currentProblem.problemId}</p>)}
        {currentProblem && (<p>{currentProblem.problemDifficulty}</p>)}
      </div>
    )
  } else {
    return <NoProblemPage />
  }
}

export default Popup
