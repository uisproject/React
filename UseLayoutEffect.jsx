// so useLayoutEffect is similar to regular useEffect but the difference is the useEffect is rendered when the dom is painted/rendered, and it run asynchronously while the useLayoutEffect, it renders before the dom is rendered or painted and it runs synchronously

const UseLayoutEffect = () => {
  const refContainer = React.useRef(null);
  const [position, setPosition] = React.useState(0);

  //   React.useEffect(() => {
  //     setPosition(50);
  //     refContainer.current.style.top = `${position}px`;
  //     console.log("rendered");
  //   }, [position]);

  React.useLayoutEffect(() => {
    setPosition(50);
    refContainer.current.style.top = `${position}px`;
    console.log("rendered");
  }, [position]);

  //   you might not see the difference between them but the actual what's happening here is the "Hi" will be paint fist at inherit position and then it will move down to 50px down (useEffect)

  //   while the useLayoutEffect since it runs synchronously it will set to 50px down

  return (
    <div
      ref={refContainer}
      style={{
        position: "absolute",
        backgroundColor: "red",
        display: "inline-block",
        color: "white",
      }}
    >
      Hi
    </div>
  );
};
