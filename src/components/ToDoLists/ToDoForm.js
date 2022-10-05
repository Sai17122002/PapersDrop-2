import Card from "../UI/Card.js";
import styles from "./ToDoForm.module.css";
import Button from "../UI/Button.js";
import { useState } from "react";

function ToDoForm(props) {
  const [value, setValue] = useState("");
  const InputHandler = (e) => {
    setValue(e.target.value);
  };

  const FormHandler = (e) => {
    e.preventDefault();
    if (value !== "") {
      const ValueObject = { title: value, id: Math.random().toString() };
      setValue("");
      props.AddToDo(ValueObject);
    }
  };
  return (
    <Card className={styles["form-wrapper"]}>
      <form onSubmit={FormHandler}>
        <h2>To Do List</h2>
        <input type="text" onChange={InputHandler} value={value} />
        <Button>Add ToDo</Button>
      </form>
    </Card>
  );
}

export default ToDoForm;
