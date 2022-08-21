import React from "react";
import Addtask from "./Addtask";
import Task from "./Task";
import "./ToDoList.css";
import { useSelector } from "react-redux";
function ListTask() {
  // Set the todo day
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  // get the state todos from the store
  const todos = useSelector((state) => state.todos);

  return (
    <div className="listTask-div">
      <div className="bg-div">
        <h1>Todo List</h1>
        <h4>{date}</h4>
        <Addtask />
        {todos.map((todo) => (
          <Task task={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default ListTask;
