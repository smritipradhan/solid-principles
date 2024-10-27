import React from "react";
import useTodo from "./hooks/useTodo";
import { useState } from "react";

const TodoList = () => {
  const [term, setTerm] = useState("");
  const todos = useTodo(term);

  const renderTodos = () => {
    return todos.map((todo) => {
      return <li>{`ID: ${todo.id}, Title: ${todo.title}`}</li>;
    });
  };

  return (
    <div>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
      <ul>{renderTodos()}</ul>
    </div>
  );
};

export default TodoList;
