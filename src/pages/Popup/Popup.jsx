import React, { useEffect, useState } from 'react'
import NoProblemPage from '../../Components/NoProblemsPage/NoProblemPage'
import isProblem from '../../utils/isProblem'

const Popup = () => {
  const [url, setUrl] = useState('')

  useEffect(() => {
    console.log("HI")
    chrome.tabs.query(
      {
        active: true,
        lastFocusedWindow: true,
      },
      (tabs) => {
        let tab = tabs[0]
        setUrl(tab.url)
      }
    )
  }, [])

  if (url !== '' && isProblem(url)) {
    return (
      <div className="App">
        <p>Problem</p>
      </div>
    )
  } else {
    return <NoProblemPage />
  }
}

export default Popup
