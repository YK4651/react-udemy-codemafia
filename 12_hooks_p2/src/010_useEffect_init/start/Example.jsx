import { useEffect } from "react";
import { useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []);
  useEffect(() => {
    // document.title = "counter" + time;
  }, [time]);
  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example;
