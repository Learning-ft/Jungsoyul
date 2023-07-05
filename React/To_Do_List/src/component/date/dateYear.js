import styled from 'styled-components';
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
        <Year>
            <YD>{timerYear}</YD>
            <YD_span>ToDo</YD_span>
        </Year>
    );
}

const Year = styled.div`
    margin: 3% 3% 0 3%;
    padding: 0;
    display: block;
`

const YD = styled.h2`
    margin: 0;
    line-height: 5rem;
    font-size: 5rem;
    display: inline-block;
`
const YD_span = styled.span`
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
`

export default  DateYear;