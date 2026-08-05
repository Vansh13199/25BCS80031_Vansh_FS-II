import { useState, useRef } from "react";

function App() {
  const [time, setTime] = useState({ hrs: 0x0, min: 0x0, sec: 0x0, milli: 0x0 });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  
  
  const changecolor = (color) => {
    document.body.style.backgroundColor = color;
  };
  




   

  

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        
        setTime((prev) => {
          let newMilli = prev.milli + 10;
          let newSec = prev.sec;
          let newMin = prev.min;
          let newHrs = prev.hrs;

          if (newMilli >= 1000) {
            newSec++;
            newMilli = 0;
          }
          if (newSec >= 60) {
            newMin++;
            newSec = 0;
          }
          if (newMin >= 60) {
            newHrs++;
            newMin = 0;
          }

          return { hrs: newHrs, min: newMin, sec: newSec, milli: newMilli };
        });
        
      }, 10);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime({ hrs: 0x0, min: 0x0, sec: 0x0, milli: 0x0 });
  };


  return (
    <>
      <h1>
        Stopwatch: {time.hrs}:{time.min}:{time.sec}.{Math.floor(time.milli / 10)}
      </h1>
      <button onClick={startTimer} >Start</button>
      <button onClick={stopTimer} >Stop</button>
      <button onClick={resetTimer}>Reset</button>
      <br /><br />
      <button onClick={() => changecolor("red")}>red</button>
      <button onClick={() => changecolor("green")}>green</button>
      <button onClick={() => changecolor("blue")}>blue</button>

    </>
  );
}

export default App;