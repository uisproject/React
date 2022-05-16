const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "addcounter":
        return { count: state.count + action.value };
        break;

      default:
        return state.count;
        break;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, { count: 0 });

  const addCounter = (value) => {
    dispatch({ type: "addcounter", value: value });
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCounter(-1)}>-</button>
        <h1>{state.count}</h1>
        <button onClick={() => addCounter(1)}>+</button>
      </div>
    </React.Fragment>
  );
};
