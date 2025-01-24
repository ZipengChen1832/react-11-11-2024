import React, { Fragment } from "react";
import { useSignUp } from "./SignUpContext";

export default function Page1({ onNext }) {
  const { user, handleChange } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <Fragment>
      <h1>Sign up Page 1</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </Fragment>
  );
}
