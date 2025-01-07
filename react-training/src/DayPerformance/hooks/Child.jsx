import React from "react";

function Child({ info }) {
  console.log("Child rendering");

  return (
    <div>
      <h3>Child Component</h3>
      <div>Name: {info.name}</div>
      <div>Age: {info.age}</div>
    </div>
  );
}

export default React.memo(Child);
