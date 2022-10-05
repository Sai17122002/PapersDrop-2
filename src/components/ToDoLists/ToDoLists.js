import ToDoList from "./ToDoList.js";
import React from "react";
function ToDoLists(props) {
  const ToDeleteToDo = (GoalText) => {
    props.DeleteToDo(GoalText);
  };
  let toDoContent = (
    <p style={{ textAlign: "center" }}>No ToDoList Available</p>
  );
  if (props.CurrentToDoList.length !== 0) {
    toDoContent = props.CurrentToDoList.map((toDo) => (
      <ToDoList ToDeleteToDo={ToDeleteToDo} key={toDo.id} text={toDo.title} />
    ));
  }
  return <React.Fragment>{toDoContent}</React.Fragment>;
}

export default ToDoLists;
