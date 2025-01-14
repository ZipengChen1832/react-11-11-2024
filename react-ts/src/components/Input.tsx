import { ChangeEvent } from "react";

interface InputProps {
  label: string;
  name: string;
  value: string;
  type: "string" | "number";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  value,
  onChange,
  type,
  name,
}: InputProps) {
  return (
    <label>
      {label}
      {type === "number" ? (
        <input type="number" name={name} value={value} onChange={onChange} />
      ) : (
        <input name={name} value={value} onChange={onChange} />
      )}
    </label>
  );
}

Input.defaultProps = {
  type: "string",
};
