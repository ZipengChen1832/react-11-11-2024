import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input";

function uuid() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );
}
interface Person {
  id: string;
  name: string;
  age: number;
  job: string;
  gender?: "M" | "F" | "O";
}

type PersonFormValues = Omit<Person, "id">;

const person1: Person = {
  id: uuid(),
  name: "John",
  age: 30,
  job: "Engineer",
  gender: "M",
};
const person2: Person = {
  id: uuid(),
  name: "Jane",
  age: 25,
  job: "Teacher",
  gender: "F",
};
const person3: Person = {
  id: uuid(),
  name: "Joe",
  age: 21,
  job: "Doctor",
  gender: "M",
};
const person4: Person = {
  id: uuid(),
  name: "Jenny",
  age: 21,
  job: "Doctor",
  gender: "F",
};

export default function People() {
  const [people, setPeople] = useState<Person[]>([
    person1,
    person2,
    person3,
    person4,
  ]);
  
  const [newPerson, setNewPerson] = useState<PersonFormValues>({
    name: "",
    age: 0,
    job: "",
  });

  // what element am I attaching the event listener to?
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPeople([
      ...people,
      {
        // this is a bad but temp solution
        id: uuid(),
        ...newPerson,
      },
    ]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewPerson({
      ...newPerson,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>People List</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Enter your name: "
          name="name"
          value={newPerson.name}
          onChange={handleChange}
        />
        <Input
          label="Enter your age: "
          name="age"
          value={newPerson.age.toString()}
          type="number"
          onChange={handleChange}
        />
        <Input
          label="Enter your job: "
          name="job"
          value={newPerson.job}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
      <ul>
        {people.map((person) => {
          const { id, name, age, job } = person;
          return (
            <li key={id}>
              <div>Name: {name}</div>
              <div>Age: {age}</div>
              <div>Job: {job}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
