const testWrapper = document.querySelector('#test-area');
const testArea = document.querySelector('#test-area');
const originText = document.querySelector('#origin-text p').innerHTML;
const resetbtn = document.querySelector('#reset');
const theTimer = document.querySelector('.timer');
var timer = [0, 0, 0, 0];
var interval;
var timerRunning = false;
//leadingZero
function leadingZero(time){
  if(time<=9)
  {
    time="0"+time;
  }
  return time;
}
//timer
function runTime() {
  let currentTime = leadingZero(timer[0])+ ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
  theTimer.innerHTML = currentTime;
  timer[3]++;
  timer[0] = Math.floor((timer[3] / 100) / 60);
  timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
      }

      //Start function
      function start() {
        let textExtendLength = testArea.value.length;
        if (textExtendLength === 1 && !timerRunning) {
          timerRunning=true;
          interval= setInterval(runTime, 10);
        }
        console.log(textExtendLength);
      }
      //spellCheck
      function spellCheck() {
        let textEntered = testArea.value;
        let originTextMatch = originText.substring(0,textEntered.length);
        if(textEntered == originText)
        {
          clearInterval(interval);
          testWrapper.style.borderColor="#1C7C54";
        }else if(textEntered==originTextMatch)
        {
            testWrapper.style.borderColor="#43f2Ff";
        }else{
          testWrapper.style.borderColor="#E84558";

        }
      }

      function reset() {
        clearInterval(interval);
        interval=null;
        timer=[0,0,0,0];
        timerRunning=false;
        testArea.value="";
        theTimer.innerHTML="00:00:00";
        testWrapper.style.borderColor=" #8D99AE";

      }
      //EventListners
      testArea.addEventListener("keyup", start, false); testArea.addEventListener("keyup", spellCheck, false); resetbtn.addEventListener("click", reset, false);
