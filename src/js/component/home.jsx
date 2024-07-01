import React, { useEffect, useState } from "react";
import { Timer } from "./Timer";

const Home = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 59) {
          setMinutes(prevMinutes => {
            if (prevMinutes === 59) {
              setHours(prevHours => prevHours + 1);
              return 0;
            } else {
              return prevMinutes + 1;
            }
          });
          return 0;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  function calculateDigit(value, placeValue) {
    return Math.floor((value / placeValue) % 10);
  }

  return (
    <div className="text-center">
      <Timer 
        thousandsDigit={calculateDigit(hours, 10)}
        hundredsDigit={calculateDigit(hours, 1)}
        tensDigit={calculateDigit(minutes, 10)}
        onesDigit={calculateDigit(minutes, 1)}
        secondsTensDigit={calculateDigit(seconds, 10)}
        secondsOnesDigit={calculateDigit(seconds, 1)}
      />
    </div>
  );
};

export default Home;
