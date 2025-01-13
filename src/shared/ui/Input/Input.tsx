import { ChangeEvent, Dispatch, HTMLAttributes, SetStateAction } from "react";

import styles from "./Input.module.css";

interface Props extends HTMLAttributes<HTMLInputElement> {
  type?: "text" | "number";
  placeholder?: string;
  value?: string;
  setValue?: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  children,
  type = "text",
  placeholder,
  value,
  setValue,
  className,
  ...props
}: Props) {
  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(evt);
    }
  };

  return (
    <div
      className={`${styles.inputWrapper} ${className}`}
      tabIndex={1}
      {...props}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(evt) => onChange(evt)}
      />
      {children}
    </div>
  );
}
