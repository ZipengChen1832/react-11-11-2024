import React, { Fragment } from "react";
import { useSignUp } from "./SignUpContext";

export default function Page2({ onPrev }) {
  const { preferences, handleCheckPreferences } = useSignUp();

  return (
    <Fragment>
      <h1>Sign up Page 2</h1>
      <ul>
        {preferences.map((preference) => (
          <li key={preference.name}>
            <input
              type="checkbox"
              name={preference.name}
              checked={preference.value}
              onChange={handleCheckPreferences}
            />
            <label htmlFor={preference.name}>{preference.name}</label>
          </li>
        ))}
      </ul>
      <button onClick={onPrev}>Prev</button>
      <button>Submit</button>
    </Fragment>
  );
}
