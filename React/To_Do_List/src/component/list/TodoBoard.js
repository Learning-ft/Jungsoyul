import React from "react";
import TodoItem from "./TodoItem";


function TodoBoard(props){


    return(
        <>
        {props.todoList.map((item)=><TodoItem item={item}/>)}
        </>
    );
}

export default TodoBoard;