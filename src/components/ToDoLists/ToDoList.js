import "./ToDoList.css";
import Card from "../UI/Card.js";

function ToDoList(props) {
  const DeleteToDo = (e) => {
    props.ToDeleteToDo(e.target.textContent);
  };
  return (
    <Card onClick={DeleteToDo} className="toDo-list">
      {props.text}
    </Card>
  );
}

export default ToDoList;
