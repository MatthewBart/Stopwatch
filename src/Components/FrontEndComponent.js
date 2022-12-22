import React from 'react';

// Handles stop watch front end
function FrontEndComponent(props) {
    // Only displays hour icon if it's reached 1 hour
    const hour = () => {
        if(props.time.hour===0){
            return '';
        }else{
            return <span>{(props.time.hour >=10)? props.time.hour: "0" + props.time.hour}</span>

        }
    }
    // Set up buttons
    return (
        <div>
            {hour()}
            <span>{(props.time.min >=10)? props.time.min: "0" + props.time.min}</span>&nbsp;:&nbsp;
            <span>{(props.time.sec >=10)? props.time.sec: "0" + props.time.sec}</span>&nbsp;:&nbsp;
            <span>{(props.time.milli >=10)? props.time.milli: "0" + props.time.milli}</span>&nbsp;:&nbsp;
        </div>
    )
    
}

export default FrontEndComponent;