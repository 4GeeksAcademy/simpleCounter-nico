import React, {useState, useEffect} from "react";
import { Timer } from "./Timer";
import { BsFillPlayFill,BsPauseFill, BsStopFill} from "react-icons/bs";





export const CountDownTimer = () => {

const [hours, setHours] = useState(0);
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);
const [miliseconds, setMiliseconds] = useState(0);
const [isRunning, setIsRunning] = useState("null")


useEffect (() => {
    let interval;
    if (isRunning) {
        interval = setInterval(() => {
            if (miliseconds > 0) {
                setMiliseconds((miliseconds) => miliseconds - 1);
            } else if (seconds > 0) {
                setSeconds((seconds) => seconds -1);
                setMiliseconds(99);
            } else if (minutes > 0) {
                setMinutes((minutes) => minutes - 1);
                setSeconds(59);
                setMiliseconds(99);
            } else if(hours > 0){
                setHours((hours) => hours - 1);
                setMinutes(59);
                setSeconds(59);
                setMiliseconds(99);
            }
        }, 10);
    }
    return () => clearInterval(interval);
}, [miliseconds, seconds, minutes, hours, isRunning]);

function startTimer() {
    if(hours !== 0 || minutes !== 0 || seconds !== 0 || miliseconds !== 0){
        setIsRunning(true);
    }else{
        window.alert("Add Time")
    }
}

// Pause the Timer

function pauseTimer() {
    setIsRunning(false);
}

// Handlers

const changeSeconds = (e) => {
    setSeconds(e.target.value)
}

const changeMinutes = (e) => {
    setMinutes(e.target.value)
}

const changeHours = (e) => {
    setHours(e.target.value)
}
    return (
        <div>
            <h1>Happy Coding 2024!</h1>

            <Timer miliseconds={miliseconds} seconds={seconds} minutes={minutes} hours={hours} 
            changeSeconds={changeSeconds} changeMinutes={changeMinutes} changeHours={changeHours}
            />

            <br/>

            <button className="btn btn-success btn-lg">
                <BsFillPlayFill />
            </button>
            <button className="btn btn-warning btn-lg">
                <BsPauseFill />
            </button>
            <button className="btn btn-danger btn-lg">
                <BsStopFill />
            </button>
        </div>
    );
}