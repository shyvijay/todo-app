import React from "react";
import Todo from "./Todo";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
const TodoList = ({ todoList, handleToggle, handleFilter }) => {
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        ))}
      </ul>
      <Button
        style={{ marginTop: "20px" }}
        onClick={handleFilter}
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
      >
        Clear completed
      </Button>
    </div>
  );
};

export default TodoList;
