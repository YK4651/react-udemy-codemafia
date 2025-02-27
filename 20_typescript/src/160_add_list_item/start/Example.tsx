import { useState } from "react";

type Todo = {
    name: string,
    id: number
}

const Example = () => {
    const [ input, setInput ] = useState("");
    const [ todo, setTodo ] = useState<Todo[]>([{name: "Todo1", id: 1}, {name: "Todo2", id: 2}]);

    const addTodo = () => {
        
    }
  return(
    <>
    <input type="text" value={input} onChange={(e)=> {setInput(e.target.value)}}></input>
    <button onClick={addTodo}>
        追加
    </button>
    <ul>
        <li>{todo}</li>
    </ul>
    </>
  )
};

export default Example;
