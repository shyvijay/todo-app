import React from "react";

const Todo = ({ todo }) => {
  return (
    <li className={todo.complete ? "strike" : ""}>
      {todo.task} {todo.id}
    </li>
  );
};

export default Todo;
