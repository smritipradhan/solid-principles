import { filterAndMatchedTodos } from "../utils/filterAndMatchTodos";
import { useState, useEffect } from "react";
import axios from "axios";

const useTodo = (term) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      console.log(term);
      const filteredAndMatchedTodos = filterAndMatchedTodos(data, term);
      console.log({ filteredAndMatchedTodos });
      setTodos(filteredAndMatchedTodos);
    }
    getTodos();
  }, [term]);

  return todos;
};

export default useTodo;
