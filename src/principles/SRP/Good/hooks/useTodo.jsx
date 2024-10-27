const useTodo = () => {
  const [todos, setTodos] = useState([]);

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

  return todos;
};

export default useTodo;
