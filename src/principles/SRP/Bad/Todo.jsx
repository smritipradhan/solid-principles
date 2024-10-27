import axios from "axios";
import { useEffect, useState } from "react";

const TodosPage = () => {
  const [todos, setTodos] = useState([]);

  // 1. Fetching data
  useEffect(() => {
    async function getTodos() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const firstTen = data.slice(0, 10);
      setTodos(firstTen);
    }
    getTodos();
  }, []);

  // 2. data is rendered in list
  const renderTodos = () => {
    return todos.map((todo) => {
      return <li>{`ID: ${todo.id}, Title: ${todo.title}`}</li>;
    });
  };

  // 3. Showing a structured UI
  return (
    <div>
      <h1>My Todos:</h1>
      <ul>{renderTodos()}</ul>
    </div>
  );
};

export default TodosPage;
