import { useEffect, useState } from "react"

const DateMonth = () =>{
    const [mon, setMon] = useState("0");

    const currentMonth = () =>{
        const date = new Date();
        const month = String(date.getMonth());
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
        <>
            <h2>{mon}</h2>
        </>
    );
}

export default DateMonth;
