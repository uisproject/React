const SomethingContext = React.createContext();
// this can be use for CustomContext and based on last experience you can send react component into provider value,
// you can use this to avoid drilling props too

const UseContext = () => {
  const data = {
    name: "Charles Xavier",
  };

  return (
    <SomethingContext.Provider value={data}>
      <DisplayComponent />
    </SomethingContext.Provider>
  );
};

const DisplayComponent = () => {
  const dataContext = React.useContext(SomethingContext);

  return <div>My name is {dataContext.name}</div>;
};
