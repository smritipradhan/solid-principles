const TodosList = () => {
  const [todos, setTodos] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    async function getTodos() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const filtered = data.filter((todo) => todo.completed === false);
      const pattern = new RegExp(term, "g");
      const searched = filtered.filter((todo) => pattern.test(todo.title));
      setTodos(searched);
    }
    getTodos();
  }, [term]);

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
