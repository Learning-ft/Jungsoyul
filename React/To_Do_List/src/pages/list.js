import { styled } from "styled-components";
import ListInsert from "../component/list/listInsert";
// import ListItem from "../component/list/listItem";


const List = () =>{
    return(
        <>
            <Memo>
            <ListInsert/>
            {/* <ListItem/> */}
            </Memo>
        </>
    );
}

const Memo = styled.div`
    margin: 0 auto;
    width: 700px;
    height: 622px;
    border: 1px solid #000;
    border-radius: 2%;
`

export default List;