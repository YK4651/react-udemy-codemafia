import "./Expression.css"
const Expression = () => {
    const title = "Expression";
    const hello = (arg) => `${arg} Function`;
    return (
        <div className={title.toLowerCase()}>
            <h3>Hello {title}</h3>
            <h3>{hello("Hello")}</h3>
            {<h3>Hello JSX</h3>}
        </div>
    );
};

export default Expression;