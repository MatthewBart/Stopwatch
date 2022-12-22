window.onload = function() {
  var Interval;
  var seconds = 0
  var tens = 0
  var append = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var startButton= document.getElementById("start")
  var stopButton = document.getElementById("stop")
  var clearButton = document.getElementById("reset")
  
  
  startButton.onClick = function(){
    clearInterval(Interval);
    Interval = setInterval(timer,10);
  }
  
  stopButton.onClick = function(){
    clearInterval(Interval);
  }
  
  
  clearButton.onClick = function(){
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    append.innerHTML = tens;
    appendSeconds.innerHTML=seconds;
  }
  

  function timer(){
    tens++;
    if(tens<=9){ append.innerHTML="0"+tens;}
    if(tens>9){ append.innerHTML=tens;}
    if(tens>99){console.log("Seconds"); seconds++;
    appendSeconds.innerHTML="0"+seconds; tens=0;
    append.innerHTML="0"+0}
    if(seconds>9){appendSeconds.innterHTML=seconds;}
  }

return (
<div class = "Stopwatch">
    <h1>Stop Watch</h1>
    <script src="/stopwatch.js"></script>
    <p>
        <span id="seconds">00</span>:<span id="tens"></span>
    </p>
    <button id="start"><h3>Start</h3></button>
    <button id="stop"><h3>Stop</h3></button>
    <button id="reset"><h3>Reset</h3></button>
</div>
)
}
