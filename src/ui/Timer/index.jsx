import React, { useState } from 'react';

function TimerCircle() {
    const [display, setDisplay] = useState('02:00');
    const [timerPaused, setTimerPaused] = useState(false);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [timerInterval, setTimerInterval] = useState(null);

    if(timerPaused == true){
        return 
    }
    
    // Fonction pour démarrer le timer
    function startTimer(duration) {
        let circle = document.querySelector("#timer-circle");
        let timer = duration;
        setTimerInterval(setInterval(function () {
            if (!timerPaused) {
                let minutes = parseInt(timer / 60, 10);
                let seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                circle.style.animationPlayState = "running";
                setDisplay(minutes + ":" + seconds);
                if (--timer < 0) {
                    stopTimer();
                }
            }
        }, 1000));
    }

    // Fonction pour mettre en pause ou reprendre le timer
    function togglePause() {
        let circle = document.querySelector("#timer-circle");
        console.log("est cliqué")
        setTimerPaused(true);
        if (!timerPaused){
            circle.style.animationPlayState = "paused" ;
        }
        else{
            circle.style.animationPlayState = "running" ;
        }
    }

    // Fonction pour arrêter le timer
    function stopTimer() {
        clearInterval(timerInterval);
        setTimerPaused(false);
        setDisplay("02:00");
        setIsTimerRunning(false);
    }

    function handlePlayButtonClick() {
        if (!isTimerRunning) {
            startTimer(120); // 2 minutes
            setIsTimerRunning(true);
        } else {
            togglePause();
        }
    }

    function handleStopButtonClick() {
        stopTimer();
    }

    return (
        <div className="timer">
            <div className="chrono">
                <div id="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 436 436">
                        <g id="timer-circle" data-name="Ellipse 1" fill="#61B0FF" stroke="#61B0FF" strokeWidth="10">
                            <circle cx="218" cy="218" r="218" stroke="none" />
                            <circle cx="218" cy="218" r="213" fill="none" />
                        </g>
                    </svg>
                </div>
                <div className="timer__display">{display}</div>
            </div>
            <div className="timer__controls">
                <button id="stop" className="timer__button" onClick={handleStopButtonClick}><img src="./assets/stop.svg" alt="stop" className="timer__icon" /></button>
                <button id="play" className="timer__button" onClick={handlePlayButtonClick}><img src="./assets/pause.svg" alt="pause" className="timer__icon" /></button>
            </div>
        </div>
    );
}

export default TimerCircle;
