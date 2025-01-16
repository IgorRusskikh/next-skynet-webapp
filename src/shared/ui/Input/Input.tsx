import { ChangeEvent, Dispatch, HTMLAttributes, SetStateAction } from "react";

import styles from "./Input.module.css";

interface Props extends HTMLAttributes<HTMLInputElement> {
  type?: "text" | "number" | "date";
  placeholder?: string;
  value?: string;
  setValue?: (evt: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

export default function Input({
  children,
  type = "text",
  placeholder,
  value,
  setValue,
  className,
  readOnly = false,
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
        readOnly={readOnly}
      />
      {children}
    </div>
  );
}
