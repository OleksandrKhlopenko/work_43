import useFetch from "../hooks/UseFetch";

function Users() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h1>Users</h1>
      {isLoading ? <h1>Loading</h1> : null}
      {error ? <h2>something went wrong</h2> : null}
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;
