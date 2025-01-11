import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {
    // オブジェクトで渡されたStateはオブジェクトで返す必要がある。
    // 大量の要素を持つオブジェクトを扱う場合、全てを記述することは煩雑なので、スプレッド演算子を使う。
    // ...オブジェクト名でコピーを作成し、カンマで区切って更新したいものだけを記述する。
    setPerson({ ...person, name: e.target.value });
  };
  const changeAge = (e) => {
    setPerson({ name: person.name, age: e.target.value });
  };
  const resetBtn = () => {
    setPerson(personObj);
  };

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>

      <input type="text" value={person.name} onChange={changeName} />
      <br />
      <input type="number" value={person.age} onChange={changeAge} />
      <br />
      <button onClick={resetBtn}>Reset</button>
    </>
  );
};

export default Example;
