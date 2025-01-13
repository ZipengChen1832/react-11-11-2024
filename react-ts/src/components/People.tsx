import { FormEvent, useState } from "react";

interface Person {
  id: string;
  name: string;
  age: number;
}

type PersonFormValues = Omit<Person, "id">;

const person1: Person = { id: "1", name: "John", age: 30 };
const person2: Person = { id: "2", name: "Jane", age: 25 };
const person3: Person = { id: "3", name: "Joe", age: 21 };

export default function People() {
  const [people, setPeople] = useState<Person[]>([person1, person2, person3]);
  const [newPerson, setNewPerson] = useState<PersonFormValues>({
    name: "",
    age: 0,
  });

  // what element am I attaching the event listener to?
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPeople([
      ...people,
      {
        // this is a bad but temp solution
        id: Math.random().toString(),
        ...newPerson,
      },
    ]);
  };

  return (
    <div>
      <h2>People List</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            value={newPerson.name}
            onChange={(e) =>
              setNewPerson({ ...newPerson, name: e.target.value })
            }
          />
        </label>
        <label>
          Age:{" "}
          <input
            value={newPerson.age}
            onChange={(e) =>
              setNewPerson({ ...newPerson, age: Number(e.target.value) })
            }
          />
        </label>
        <button>Submit</button>
      </form>
      <ul>
        {people.map((person) => {
          const { id, name } = person;
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
}
