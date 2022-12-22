import React from 'react';

// Handles button interface
function ButtonComponent(props) {
    return (
        // Each button calls to either start, stop, resume or reset
        // the timer
        // Each button sets a status so different buttons are displayed
        // depending on the current state
        <div>
            {(props.status===0)?
            <button className = "startButton"
            onClick={props.start}>Start</button>: ""}
            
            {(props.status===1)?
            <div>
                <button className = "stopButton"
                onClick={props.stop}>Stop</button>
                <button className = "restartButton"
                onClick={props.restart}>Restart</button>
            </div> : ""}

            {(props.status===2)?
            <div>
                <button className = "resumeButton"
                onClick={props.resume}>Resume</button>
                <button className = "restartButton"
                onClick={props.restart}>Restart</button>
            </div> : ""}

        </div> 
    )
    
}

export default ButtonComponent;