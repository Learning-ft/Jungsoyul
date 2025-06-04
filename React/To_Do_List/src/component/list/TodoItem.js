import React, { useState } from "react";

function TodoItem(props){
    const [isChecked, setIsChecked] = useState(false);

    function CheckBoxChange(){
        setIsChecked(!isChecked);
    }

    function CheckDelChange(){
        const todoList = document.getElementById("todoList");

        if(todoList.style.display === "none"){
            todoList.style.display = "block";
        }else {
            todoList.style.display = "none";
        }
    }


    
    return (
        <div className="todoList" id="todoList">
            <div className={`todo-item ${isChecked ? 'txt' : ''}`}>
            <button className={`checkbox ${isChecked ? 'checked' : ''}`} onClick={CheckBoxChange} />
            {props.item}
            </div>
            <div className= "todo-del" onClick={CheckDelChange}/>
        </div>
      );
}

export default TodoItem;