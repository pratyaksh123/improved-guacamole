import isProblem from '../../utils/isProblem'

const URL = window.location.toString()
const check = isProblem(URL)

if (check) {
    window.addEventListener("load", myMain, false);

    function myMain(evt) {
        var jsInitChecktimer = setInterval(checkForJS_Finish, 111);

        function checkForJS_Finish() {
            if (document.getElementsByClassName('css-v3d350') != undefined) {
                clearInterval(jsInitChecktimer);
                const problemData = document.getElementsByClassName('css-v3d350')[0].textContent
                console.log(problemData)
            }
        }
    }
}


