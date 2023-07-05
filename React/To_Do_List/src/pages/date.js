import styled from 'styled-components'
import DateDay from "../component/date/dateDay";
import DateMonth from "../component/date/dateMonth";
import DateYear from "../component/date/dateYear";

const Date = () =>{
    return(
        <>
            <DateYear/>
            <DateDay/>
            <DateMonth/>
        </>
    );
}

export default Date;

// const DateYear = styled.h1`
//     font-size: 1rem;
// `