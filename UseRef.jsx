const UseRef = () => {
  const refContainer = React.useRef(null);
  const divContainer = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(refContainer.current.value);
    console.log(divContainer.current.attributes);
  };

  React.useEffect(() => {
    console.log(refContainer);
    refContainer.current.focus();
    divContainer.current.focus();
  });

  return (
    <div className="container">
      <React.Fragment>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input type="text" ref={refContainer} />
            <button type="submit">Submit</button>
          </div>
        </form>
        <div ref={divContainer}>Hello World</div>
      </React.Fragment>
    </div>
  );
};
