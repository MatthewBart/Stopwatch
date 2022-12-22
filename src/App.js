import './App.css';
import FrontEndComponent from './Components/FrontEndComponent';
import ButtonComponent from './Components/ButtonComponent';
import React, {useState} from 'react';


function App() {
  // Define time and set time const
  const[time, setTime]=useState({milli:0,sec:0,min:0,hour:0});

  // Functions to start, stop, resume, and restart the timer
  // sets status to show different buttons depending on the current
  // state of the timer
  const start = () => {run(); setStatus(1);setInterV(setInterval(run,10));};
  const stop = () => {clearInterval(interV);setStatus(2);};
  const resume = () => start();
  const restart = () => {clearInterval(interV);setStatus(0); setTime({milli:0, sec:0, min:0, hour:0});};
  const [interV, setInterV] = useState();
  const [status, setStatus] = useState(0);

  // Define time variables
  var updatedMilli = time.milli, updatedSec = time.sec, updatedMin = time.min, updatedHour = time.hour;

  // Updates the timer
  // Updates time based on whether the maximum milliseconds/seconds/minutes
  // Updates milli seconds and constantly updates timer
  const run = () => {
    if(updatedMin === 60){
      updatedHour++;
      updatedMin=0;
    }
    if(updatedSec === 60){
      updatedMin++;
      updatedSec=0;
    }
    if(updatedMilli === 100){
      updatedSec++;
      updatedMilli=0;
    }
    updatedMilli++;
    return setTime({milli:updatedMilli, sec:updatedSec, min:updatedMin, hour:updatedHour});
  }
  // Define frontEnd and Buttons based off the provided components
  return (

    <div className="App">
      <div className="clock">
        <div classname="stopwatch">
          <FrontEndComponent time={time}/>
          <ButtonComponent status={status} resume={resume} stop={stop} start={start} restart={restart}/>
        </div>
      </div>
    </div>
  );
};

export default App;
