// so this hook is interesting to me that you can use the function from the child and be used at parents component
// the logic is passing the ref from parent to child and set the functions to it so we can use it on the parent side component
// let's try creating custom counter
const UseImperativeHandle = () => {
  const ref = React.useRef();

  return (
    <div>
      <Counter ref={ref} />
      <button
        onClick={() => {
          ref.current.increment();
        }}
      >
        What is the count?
      </button>
    </div>
  );
};

// use forwardRef to inherit the ref from the parent to child
const Counter = React.forwardRef((props, ref) => {
  const [counter, setCounter] = React.useState(0);

  //   passing function to imperativeHandle so it can be used at parent componentt
  React.useImperativeHandle(ref, () => ({
    increment,
    yell: () => alert(counter),
  }));

  const increment = () => setCounter(counter + 1);

  return (
    <div>
      <button onClick={increment}>click</button>
      <h2>Count: {counter}</h2>
    </div>
  );
});
