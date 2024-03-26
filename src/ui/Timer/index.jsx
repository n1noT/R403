import React, { useState, useEffect, useRef } from 'react';

const TimerCircle = () => {
    const [timerInterval, setTimerInterval] = useState(null);
    const [timerPaused, setTimerPaused] = useState(false);
    const [display, setDisplay] = useState("02:00");



    useEffect(() => {
        const twoMinutes = 120;
        const circleRef = document.querySelector("#timer-circle")

        // Fonction pour démarrer le timer
        const startTimer = (duration) => {
            let timer = duration, minutes, seconds;
            const interval = setInterval(() => {
                if (!timerPaused) {
                    minutes = parseInt(timer / 60, 10);
                    seconds = parseInt(timer % 60, 10);

                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;

                    setDisplay(minutes + ":" + seconds);
                    circleRef.style.animationPlayState = "running"; // Démarrer l'animation du cercle
                    if (--timer < 0) {
                        stopTimer();
                    }
                }
            }, 1000);
            setTimerInterval(interval);
        };

        // Fonction pour mettre en pause ou reprendre le timer
        const togglePause = () => {
            const circleRef = document.querySelector("#timer-circle");
            setTimerPaused((prevState) => !prevState);
            if(!timerPaused){
                circleRef.style.animationPlayState = "paused";
            }
            else {
                circleRef.style.animationPlayState = "running";
            }
            
        };


        // Fonction pour arrêter le timer
        const stopTimer = () => {
            clearInterval(timerInterval);
            setTimerPaused(false);
            setDisplay("02:00");
            window.location.reload(); // Recharger la page pour réinitialiser le timer
        };

        const playButton = document.querySelector('#play');
        const stopButton = document.querySelector('#stop');

        playButton.addEventListener('click', () => {
            if (!timerInterval) {
                startTimer(twoMinutes);
            } else {
                togglePause();
            }
        });

        stopButton.addEventListener('click', stopTimer);

        return () => {
            if (timerInterval) clearInterval(timerInterval);
        };
    }, [timerInterval, timerPaused]);
    return (
        <div className="timer">
            <div id="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 436 436">
                    <g id="timer-circle" data-name="Ellipse 1" fill="#61B0FF" stroke="#61B0FF" strokeWidth="10">
                        <circle cx="218" cy="218" r="218" stroke="none" />
                        <circle cx="218" cy="218" r="213" fill="none" />
                    </g>
                </svg>
            </div>
            <div className="timer__display">{display}</div>
            <div className="timer__controls">
                <button id="stop" className="timer__button"><img src="./assets/stop.svg" alt="stop" className="timer__icon" /></button>
                <button id="play" className="timer__button"><img src="./assets/pause.svg" alt="pause" className="timer__icon" /></button>
            </div>
        </div>
    );
}

export default TimerCircle;
