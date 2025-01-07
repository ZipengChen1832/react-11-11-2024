import React from "react";

function Child2({ count }) {
  console.log("Child 2 rendering");

  return (
    <div
      style={{ border: "1px solid red", padding: "20px", marginTop: "10px" }}
    >
      {/* count is a necessary update before DOM is updated*/}
      <h2>Child 2: {count}</h2>
      <div>gets count state from parent</div>
    </div>
  );
}

// React.memo is a higher order component that memoizes the component
// it only re-renders when the props change
export default React.memo(Child2)

// React.memo has a 2nd argument
// a comparison function that compares the old props and new props
// then it decides if the component should re-render
// could do deep or custom comparison
