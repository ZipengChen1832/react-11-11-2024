// TS is a superset of javascript

// Difference:
// JS is a scripting language, it can be run in any browser
// TS is compiled language, it needs to be compiled to JS before running in browser

// Every day types
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// When to use typescript? Or benefits?
// Typescript adds type safety to javascript
// Typescript takes longer to write in the short term, but saves time in the long run

const num: number = 1;
const str: string = "hello";
const bool: boolean = true;
const und: undefined = undefined;
const nulllll: null = null;

const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["a", "b", "c"];
const boolArr: boolean[] = [true, false, true];

// Differences between types and interfaces
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

type GenderType = "M" | "F" | null;
// interface Person {
//   id: string;
//   name: string;
//   age: number;
//   gender: GenderType;
// }

type Person = {
  id: string;
  name: string;
  age: number;
  gender: GenderType;
};

const person1: Person = { id: "1", name: "John", age: 30, gender: "M" };
const person2: Person = { id: "2", name: "Jane", age: 25, gender: "F" };
const person3: Person = { id: "3", name: "Joe", age: 21, gender: null };

const people: Person[] = [person1, person2];
// console.log(people);

function sum(a: number, b: number): number {
  return a + b;
}

// Other helpful links:
// Utility types: https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content
// Generics: https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content
