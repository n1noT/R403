// import React, { useState } from 'react';




// function TimerCircle() {


//     function timer() {
//         const departMinutes = 5
//         let temps = departMinutes * 60

//         const timerElement = document.querySelector(".timer__display")

//         setInterval(() => {
//             let minutes = parseInt(temps / 60, 10)
//             let secondes = parseInt(temps % 60, 10)

//             minutes = minutes < 10 ? "0" + minutes : minutes
//             secondes = secondes < 10 ? "0" + secondes : secondes

//             timerElement.innerText = `${minutes}:${secondes}`
//             temps = temps <= 0 ? 0 : temps - 1
//         }, 1000)
//     }

//     timer();

//     return (
//         <div className="timer">
//             <div className="chrono">
//                 <div id="circle">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 436 436">
//                         <g id="timer-circle" data-name="Ellipse 1" fill="#61B0FF" stroke="#61B0FF" strokeWidth="10">
//                             <circle cx="218" cy="218" r="218" stroke="none" />
//                             <circle cx="218" cy="218" r="213" fill="none" />
//                         </g>
//                     </svg>
//                 </div>
//                 <div className="timer__display"></div>
//             </div>
//             <div className="timer__controls">
//                 <button id="stop" className="timer__button" ><img src="/stop.svg" alt="stop" className="timer__icon" /></button>
//                 <button id="play" className="timer__button" ><img src="/pause.svg" alt="pause" className="timer__icon" /></button>
//             </div>
//             <script type='module' src='timer.js'></script>
//         </div>

//     );
// }

// export default TimerCircle;

import React, { useState, useEffect } from "react";





export default function TimerCircle(props) {

    const { startingMinutes = 2, startingSeconds = 0 } = props;
    
    const [mins, setMinutes] = useState(startingMinutes);
    const [secs, setSeconds] = useState(startingSeconds);
    const [isRunning, setIsRunning] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    let circle = document.querySelector("#timer-circle");

    useEffect(() => {
        let sampleInterval;
        if (isRunning) {
            sampleInterval = setInterval(() => {
                if (secs > 0) {
                    setSeconds(secs - 1);
                }
                if (secs === 0) {
                    
                    setMinutes(mins - 1);
                    setSeconds(59);
                    if (mins === 0){
                        clearInterval()
                    }

                }
                circle.style.animationPlayState = "running";
            }, 1000);
        }
        return () => {
            
            clearInterval(sampleInterval);
        };
    }, [mins, secs, isRunning]);

    const handlePlayPause = () => {
        let circle = document.querySelector("#timer-circle");
        setIsRunning(!isRunning);
        if (!hasStarted) {
            setHasStarted(true);

        }
        else {
            console.log("blabla")
            circle.style.animationPlayState = hasStarted ? "paused" : "running";
        }
    };

    const handleReset = () => {
        window.location.reload();
    };

    return (
        <div>
            
            <div className="timer">
                <div id="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 436 436">
                        <g id="timer-circle" data-name="Ellipse 1" fill="#61B0FF" stroke="#61B0FF" strokeWidth="10">
                            <circle cx="218" cy="218" r="218" stroke="none" />
                            <circle cx="218" cy="218" r="213" fill="none" />
                        </g>
                    </svg>
                </div>
                <div className="timer__display" >
                    {!(mins && secs) && hasStarted ? (
                        ""
                    ) : (
                        <p className="compteur" >
                            {mins >= 0 ? `${mins < 10 ? `0${mins}` : mins}:` : '00:'}
                            {secs < 10 ? `0${secs}` : secs}
                        </p>
                    )}

                </div>
                <div className="timer__controls">
                <button id="stop" className="timer__button" onClick={handleReset}><img src="/stop.svg" alt="stop"
                    className="timer__icon" /></button>
                <button id="play" className="timer__button" onClick={handlePlayPause}><img src={isRunning ? "/pause.svg" : "/play.svg"} alt="pause"
                    className="timer__icon" /></button>
            </div>
            <img src={props.img} alt="" className="timer__image"></img>
            </div>
            
        </div>
    );
}

