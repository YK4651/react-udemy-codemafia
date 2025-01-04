import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`;
    
    return (
        <>
            {/* <Child color="" />
            <Child color="red" /> */}
            <Child 
                num={123}
                fn={hello("Props")}
                bool
                obj={{ name: "Tom", age : 18}}
            />
        </>
    )
}

export default Example;
