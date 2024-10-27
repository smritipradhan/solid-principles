export const filterAndMatchedTodos = (data, term) => {
  const filtered = data.filter((todo) => todo.completed === false);
  const pattern = new RegExp(term, "g");
  const matchedTodos = filtered.filter((todo) => pattern.test(todo.title));
  return matchedTodos;
};
