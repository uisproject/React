const UseState = () => {
  const [state, setState] = React.useState(0);
  // as far as i know that useState is like setting some values to state so we can manage it, let's try creating the counter

  const incrementFn = () => {
    setState((prev) => prev + 1);
    console.log(state); // so if you console this, the state will be sill 0
    // the thing you must know that useState is not sync, meaning if you setState it won't be change immediately until component is fully rerendered
    // unless you do this
    setState((prev) => {
      const result = prev + 1;
      console.log(result); // this will result 2
      return result;
    });
  };

  return (
    <div>
      {state}
      <button onClick={incrementFn}>Increment</button>
    </div>
  );
};
