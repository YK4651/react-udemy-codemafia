import "./Child.css";
import react from 'react'

const Child = () => {
  return (
    <react.Fragment>
    <div className="component">
      <h3>Hello Component</h3>
    </div>
    <h3>Hello Fragment</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quidem doloribus nobis harum, expedita sit rerum repellendus quibusdam omnis, exercitationem ratione distinctio id. Maxime eum aliquid aliquam veniam impedit sint!</p>
    </react.Fragment>
  );
};

export default Child;
