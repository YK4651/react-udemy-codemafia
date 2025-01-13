import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  const shuffle = () => {
    const newNums = [...nums];
    const val = newNums.pop();
    newNums.unshift(val);
    setNums(newNums);
  };
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>Shuffle</button>
    </>
  );
};

export default Example;
