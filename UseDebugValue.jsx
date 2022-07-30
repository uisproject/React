const ChildComponent = ({ counter }) => {
  return <div>{counter}</div>;
};

const useCounter = () => {
  const [counter, setCounter] = React.useState(0);

  React.useDebugValue(counter, () => `Counter: ${counter}`);

  React.useEffect(() => {
    const timing = window.setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => {
      window.clearInterval(timing);
    };
  }, [counter]);

  return { counter };
};

const UseDebugValue = () => {
  const { counter } = useCounter();

  return (
    <div>
      <ChildComponent counter={counter} />
    </div>
  );
};
