import { useState } from "react";

const Example = () => {
  const [val1, setval1] = useState(0);
  const [val2, setval2] = useState(10);
  const [val3, setval3] = useState(100);
  return (
    <>
      <p>ボタンを{val1}回押しました。</p>
      <button
        onClick={() => {
          let fstBtn = val1 + 1;
          setval1(fstBtn);
        }}
      >
        Button A
      </button>

      <p>ボタンを{val2}回押しました。</p>
      <button
        onClick={() => {
          //   let sndBtn = val2 + 5;
          setval2(val2 + 5);
        }}
      >
        Button B
      </button>

      <p>ボタンを{val3}回押しました。</p>
      <button
        onClick={() => {
          let trdBtn = val3 + 10;
          setval3(trdBtn);
        }}
      >
        Button C
      </button>
    </>
  );
};

export default Example;
