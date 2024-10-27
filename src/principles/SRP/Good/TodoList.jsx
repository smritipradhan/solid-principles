import React from "react";

const TodoList = () => {
  const todos = useTodo();

  const renderTodos = () => {
    return todos.map((todo) => {
      return <li>{`ID: ${todo.id}, Title: ${todo.title}`}</li>;
    });
  };

  return <ul>{renderTodos()}</ul>;
};

export default TodoList;
