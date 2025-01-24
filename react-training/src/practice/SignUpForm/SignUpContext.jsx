import React, { createContext, useContext, useState } from "react";

const SignUpContext = createContext();

export default function SignUpProvider({ children }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [preferences, setPreferences] = useState([
    { name: "JavaScript", value: false },
    { name: "Python", value: false },
    { name: "Ruby", value: false },
    { name: "Java", value: false },
  ]);

  const handleCheckPreferences = (e) => {
    setPreferences(
      preferences.map((preference) =>
        preference.name === e.target.name
          ? { ...preference, value: e.target.checked }
          : preference
      )
    );
  };

  return (
    <SignUpContext.Provider
      value={{ user, handleChange, preferences, handleCheckPreferences }}
    >
      {children}
    </SignUpContext.Provider>
  );
}

export const useSignUp = () => useContext(SignUpContext);
