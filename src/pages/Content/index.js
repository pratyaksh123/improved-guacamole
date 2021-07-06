import isProblem from '../../utils/isProblem'
import FetchProblemData from "../../utils/fetchProblemData"

const URL = window.location.toString()
const check = isProblem(URL)

if (check) {
    window.addEventListener("load", myMain, false);

    function myMain(evt) {
        var jsInitChecktimer = setInterval(checkForJS_Finish, 111);

        function checkForJS_Finish() {
            if (document.getElementsByClassName('css-v3d350') !== undefined && document.getElementById("timer-difficulty") !== null) {
                clearInterval(jsInitChecktimer);
                const problemData = document.getElementsByClassName('css-v3d350')[0].textContent
                const problemDifficulty = document.getElementById("timer-difficulty").firstElementChild.textContent
                const problem = FetchProblemData(problemData, problemDifficulty)
                chrome.storage.sync.set({ currentProblem: problem }, function () {
                    console.log('Value is set to ' + value);
                });
            }
        }
    }
}


