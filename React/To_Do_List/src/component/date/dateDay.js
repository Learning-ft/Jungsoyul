import { styled } from "styled-components";
import { useEffect, useState } from "react"

const DateDay = () => {
    const [week, setWeek] = useState("");

    const currentDay = () =>{
        const date = new Date();
        const weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
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
        <Day>
            <DD>{week}</DD>
        </Day>
    )
}

const Day = styled.div`
    display: inline-block;
    margin: 0 3%;
`;

const DD = styled.h2`
    margin: 0;
    font-size: 3rem;
    font-weight: 400;
`;

export default DateDay;