import { useContext } from "react";
import { MyContext } from "../Example";

const GrandChild = ({ value }) => {
  const contextValue = useContext(MyContext);
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>孫コンポーネント</h3>
      {/* {value} */}
      {contextValue}
    </div>
  );
};
export default GrandChild;
