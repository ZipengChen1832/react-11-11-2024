import React from "react";

const getId = (() => {
  let id = 0;
  return () => id++;
})();

const people = [
  { id: getId(), name: "John", age: 25 },
  { id: getId(), name: "Jane", age: 24 },
  { id: getId(), name: "Jack", age: 26 },
];
export default function Fragment() {
  return (
    <div>
      <h1>Example</h1>
      {people.map((person) => {
        return (
          <React.Fragment key={person.id}>
            <div className="person__name">Name: {person.name}</div>
            <div className="person__age">Age: {person.age}</div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
