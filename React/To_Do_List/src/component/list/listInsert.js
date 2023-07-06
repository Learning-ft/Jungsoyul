import { useState } from "react";
import { styled } from "styled-components";

const ListInsert=()=> {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] =useState([]);
    const onChange = (e) =>setTodo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if (todo === ""){
            return;
        }
        setTodos((currentArray) => [todo, ...currentArray]);
        setTodo("");
    }

    return(
        <>
            <MdAdd onSubmit={onSubmit}>
                <Input onChange={onChange} value={todo} type="text" placeholder="Add your new todo" />
                <button>추가</button>
            
            <ul>
                {todos.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </MdAdd>
        </>
    );
}

const MdAdd = styled.div`
    width: 650px;
    height: 50px;
    margin: 30px auto;
    border-radius: 50px;
    background-color: #D9D9D9;
`

const Input = styled.input`
    width: 95%;
    font-size: 1.1rem;
    margin: 15px;
    background-color: inherit;
`

export default ListInsert;
