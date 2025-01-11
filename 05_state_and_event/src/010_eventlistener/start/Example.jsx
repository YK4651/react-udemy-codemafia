const Example = () => {
  const clickHandler = () => {
    alert("Clicked");
  }
  return (
    <>
      <button onClick={clickHandler}>Click Me</button>
      
      <button onClick={()=> {
        alert("Using Arrow Function.");
      }}>
        Click Me
      </button>
    </>
  );
};

export default Example;
