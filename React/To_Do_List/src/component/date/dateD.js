import { styled } from "styled-components";
import { useEffect, useState } from "react";

const DateD = () =>{
    const [day, setDay] = useState("00");

    const currentDate = () => {
        const date = new Date();
        const dDay = String("0" + date.getDate()).slice(-2);
        setDay(`${dDay}`);
    }

    useEffect(() => {
        currentDate();
        const interval = (setInterval, 1000);

        return() =>{
            clearInterval(interval);
        }
    }, []);

    return(
        <>
            <D>{day}</D>
        </>
    );
}

const D = styled.div`
    font-size: 10rem;
    font-weight: 300;
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 12%;
`

export default DateD;