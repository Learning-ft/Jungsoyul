import { styled } from "styled-components";
import { useState } from "react";
import TodoBoard from "../component/list/TodoBoard";

const List = () =>{
    const [inputValue, setInputValue] = useState('  ');//input 정보
    const [todoList, setTodoList] = useState([]);//리스트 전체 받아오기


    const addItem = () =>{
        setTodoList([...todoList,inputValue])//todoList는 유지하되, 새로운 inputValue넣기
    }

    const onKeyUp = e => {
        if(e.key === 'Enter'){
            setInputValue('  ');
            addItem();
        }
    };

    
    return(
        <Memo>
                <input className="todo-insert"
                value={inputValue}
                type="text"
                placeholder="    Add your new todo"
                onChange={(e)=>setInputValue(e.target.value)}
                onKeyUp={onKeyUp}
                />

            <TodoBoard todoList={todoList}/>
        </Memo>
    );
};

const Memo = styled.div`
    margin: 0 auto;
    width: 700px;
    height: 622px;
    border: 1px solid #000;
    border-radius: 2%;
`

export default List;