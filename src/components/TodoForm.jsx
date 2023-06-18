import React, { useState } from "react";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <Box>
      <Input
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Enter a task..."
        autoFocus
        fullWidth={true}
      />
      <Button
        type="submit"
        onClick={handleSubmit}
        variant="contained"
        style={{ marginTop: "10px" }}
        color="success"
      >
        Submit
      </Button>
    </Box>
  );
};

export default TodoForm;
