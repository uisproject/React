// using memo, so the Todos component should not re-render since neither the todos state nor the addTodo function are changing when the count is incremented.
// This is because of something called "referential equality".
// Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.

// useCallback hook to prevent the function from being recreated unless necessary.
// Use the useCallback Hook to prevent the Todos component from re-rendering needlessly:

const UseCallback = () => {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = React.useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

const Todos = React.memo(({ todos, addTodo }) => {
  console.log("child render");
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
});
