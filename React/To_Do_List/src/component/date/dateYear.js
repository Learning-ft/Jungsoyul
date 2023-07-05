import {useEffect, useState} from "react";

const DateYear = () =>{
    const [timerYear,setTimerYear] = useState("0000");

    const currentYear = () =>{
        const date = new Date();
        const year = String(date.getFullYear())
        setTimerYear(`${year}`)
    }

    useEffect(() =>{
        currentYear();
        const interval = setInterval(currentYear, 1000);
        //1초마다 반복되는 함수를 만든것, 여기서 연도를 나타내는 것이니까 잘 안보이는게 당연.
   
        return() =>{
            clearInterval(interval);
            //cleanup함수로 정리
        }
    }, []);

    return(
        <>
            <h1>{timerYear}<span>ToDo</span></h1>
        </>
    )
}

export default  DateYear;