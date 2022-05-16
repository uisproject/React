const UseEffect = () => {
  const [state, setState] = React.useState(null);
  const [nState, setNstate] = React.useState(null);

  // a lot of things can be used here
  React.useEffect(() => {
    //   this will render every time components are being rendered
    console.log("isRendered");

    // be careful if you do this, otherwise it will cause infinite loop because it's always calling the timeout and there are some other things that might cause infinite loop as well
    // const x = setTimeout(() => {
    //   setNstate((prev) => prev + 1);
    // }, 500);
  });

  //   you can create useEffect as many as you want
  React.useEffect(() => {
    console.log("this is 2nd useEffect");
  }, [nState]); // this is called dependency, so logically this useEffect will be called when the state of the dependency is changed

  // useEffect is usually for fetching data like this
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      Open Console Panel
      <button
        onClick={() => {
          setState((prev) => prev + 1);
        }}
      >
        Render Component
      </button>
      <button
        onClick={() => {
          setNstate((prev) => prev + 1);
        }}
      >
        Call 2nd useEffect
      </button>
    </div>
  );
};
