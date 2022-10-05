import ToDoForm from "./components/ToDoLists/ToDoForm.js";
import ToDoLists from "./components/ToDoLists/ToDoLists.js";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });
  useEffect(() => {
    client.get().then((response) => {
      setToDoList(response.data);
    });
  }, []);

  const AddToDo = (text) => {
    setToDoList((prevobj) => {
      const textObj = [text, ...prevobj];
      return textObj;
    });
  };

  const DeleteList = (text) => {
    const arr = toDoList.filter((data) => {
      return data.title === text;
    });
    client.delete(`${arr[0].id}`);
    setToDoList(
      toDoList.filter((post) => {
        return post.id !== arr[0].id;
      })
    );
  };

  return (
    <>
      <ToDoForm AddToDo={AddToDo} />
      <ToDoLists DeleteToDo={DeleteList} CurrentToDoList={toDoList} />
    </>
  );
}

export default App;
