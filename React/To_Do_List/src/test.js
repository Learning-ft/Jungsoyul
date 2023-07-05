import { useState, useEffect } from "react";

// const Test = () =>{
//     const [timer,setTimer] = useState("0000");

//     const currentTimer = () =>{
//         const date = new Date(year);
//         const hours = String(date.getHours()).padStart(2, "0");
//         const minutes = String(date.getMinutes()).padStart(2, "0");
//         const seconds = String(date.getSeconds()).padStart(2, "0");
//         setTimer(`${date}`)
//     }

//     const startTimer = () => {
//         setInterval(currentTimer, 1000)
//     }
    
//     startTimer()

//     return(
//         <>
//             <span>{timer}</span>
//         </>
//     )
// }


const Test = () => {
  const [timerDay, setTimerDay] = useState("0");

  const currentDay = () => {
    const date = new Date();
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const day = daysOfWeek[date.getDay()];
    setTimerDay(day);
  }

  useEffect(() => {
    currentDay();
    const interval = setInterval(currentDay, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>{timerDay}</h2>
    </div>
  );
};



export default Test;