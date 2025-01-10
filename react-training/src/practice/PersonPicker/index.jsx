import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const defaultPeople = [
  { name: "Astrid Jiang", selected: false },
  { name: "fei guan", selected: false },
  { name: "Huan Ma", selected: false },
  { name: "Hưng Phạm", selected: false },
  //   { name: "Jessie", selected: false },
  { name: "Kathy Bai", selected: false },
  { name: "Quan Ha", selected: false },
  { name: "Sanskar Thapa", selected: false },
  { name: "Wendy Wen", selected: false },
];

export default function PersonPicker() {
  const [people, setPeople] = useState(defaultPeople);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const _people = localStorage.getItem("people");
    if (_people) {
      setPeople(JSON.parse(_people));
    }
  }, []);

  useEffect(() => {
    const remains = people.filter((person) => !person.selected);
    if (remains.length === 0) {
      setPeople(defaultPeople);
      setWinner(null);
    }

    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  const handlePick = () => {
    // used to select a random person
    const remains = people.filter((person) => !person.selected);
    const index = Math.floor(Math.random() * remains.length);
    const selectedPerson = remains[index];
    setWinner(selectedPerson.name);
    setPeople(
      people.map((person) => {
        return person.name === selectedPerson.name
          ? { ...person, selected: true }
          : person;
      })
    );
  };

  return (
    <div>
      <h2>Person Picker</h2>
      <div>Lucky Volunteer: {winner}</div>
      <button on onClick={handlePick}>Pick Next</button>
      <ul>
        {people
          .filter((person) => !person.selected)
          .map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
      </ul>
    </div>
  );
}
