import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";

import { Container } from "@mui/material";
import data from "./api/data.json";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = todoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
  };

  const handleFilter = (id) => {
    let filtered = todoList.filter((task) => {
      return !task.complete;
    });
    setTodoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...todoList];
    copy = [...copy, { id: nanoid(), task: userInput, complete: false }];
    setTodoList(copy);
  };
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Header />
        <TodoForm addTask={addTask} />
        <TodoList
          todoList={todoList}
          handleToggle={handleToggle}
          handleFilter={handleFilter}
        />
      </Container>
    </>
  );
}

export default App;
