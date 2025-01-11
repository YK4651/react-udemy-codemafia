import { useState } from "react";
// const Example = () => {
//   let valArry = useState(0);
//   return (
//     <>
//       <input 
//       type="text"
//       onChange={(e) => {
//         const setFn = valArry[1];
//         setFn(e.target.value);
//       }} /> = {valArry[0]}
//     </>
//   );
// };

// useStateを使用する時、分割代入を使用して記述くることがおおい。
const Example = () => {
  let [val, setFn] = useState(0);
  return (
    <>
      <input 
      type="text"
      onChange={(e) => {
        setFn(e.target.value);
      }} /> = {val}
    </>
  );
};

export default Example;
