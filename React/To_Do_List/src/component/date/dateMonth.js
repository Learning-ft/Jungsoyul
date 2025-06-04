import { styled } from "styled-components";
import { useEffect, useState } from "react"

const DateMonth = () =>{
    const [mon, setMon] = useState("0");

    const currentMonth = () =>{
        const date = new Date();
        const month = String("0" + (date.getMonth() + 1)).slice(-2);
        setMon(`${month}`);
    }

    useEffect(() =>{
        currentMonth();
        const interval = (setInterval, 1000);

        return () =>{
            clearInterval(interval);
        };
    }, []);

    return(
        <Month>
            <DM>{mon}</DM>
        </Month>
    );
}

const Month = styled.div`
    display: inline-block;
`;

const DM = styled.h3`
    margin: 0;
    font-size: 3rem;
    font-weight: 400;
`;

export default DateMonth;
