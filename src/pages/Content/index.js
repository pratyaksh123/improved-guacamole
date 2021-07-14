import isProblem from '../../utils/isProblem'
import FetchProblemData from '../../utils/fetchProblemData'

const URL = window.location.toString()
const check = isProblem(URL)
// let problem = null

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  fetchProblemFromDOM().then((t) => {
    sendResponse(t)
  })

  return true
})

async function fetchProblemFromDOM() {
  return new Promise((resolve, reject) => {
    console.log('Starting to Execute content script')
    console.log(`Contenet script ${Math.random()}`)
    var jsInitChecktimer = setInterval(checkForJS_Finish, 111)

    function checkForJS_Finish() {
      if (
        document.getElementsByClassName('css-v3d350') !== undefined &&
        document.getElementById('timer-difficulty') !== null
      ) {
        clearInterval(jsInitChecktimer)
        const problemData =
          document.getElementsByClassName('css-v3d350')[0].textContent
        const problemDifficulty =
          document.getElementById('timer-difficulty').firstElementChild
            .textContent
        const problem = FetchProblemData(problemData, problemDifficulty)
        resolve({ data: problem })
      }
    }
  })
}

if (check) {
  window.addEventListener('load', fetchProblemFromDOM, false)
  fetchProblemFromDOM()
}
