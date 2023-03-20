import useFetch from "../hooks/UseFetch";

const Todo = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <div>
      <h1>Todo</h1>
      {isLoading ? <h1>Loading</h1> : null}
      {error ? <h2>something went wrong</h2> : null}
      {data.length > 0 && data.map((todo) => <p key={todo.id}>{todo.title}</p>)}
    </div>
  );
};

export default Todo;
