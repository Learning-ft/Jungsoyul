import { useEffect, useState } from "react"

const DateDay = () => {
    const [week, setWeek] = useState("");

    const currentDay = () =>{
        const date = new Date();
        const weeks = ['일', '월', '화', '수', '목', '금', '토'];
        const day = weeks[date.getDay()];
        setWeek(`${day}`);
    }

    useEffect(() =>{
        currentDay();
        const interval = (setInterval, 1000);

        return() =>{
            clearInterval(interval);
        }
    },[]);

    return(
        <>
            <h2>{week}</h2>
        </>
    )
}

export default DateDay;