import DateDay from "../component/date/dateDay";
import DateMonth from "../component/date/dateMonth";
import DateYear from "../component/date/dateYear";
import DateD from "../component/date/dateD";

const Date = () =>{
    return(
        <>
            <DateYear/>
            <DateDay/>
            <DateMonth/>
            <DateD/>
        </>
    );
}

export default Date;

