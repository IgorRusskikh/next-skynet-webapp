import { ChangeEvent, HTMLAttributes } from "react";

import Input from "../ui/Input/Input";
import styles from "./InputWithLabel.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string;
  placeholder: string;
  type?: "text" | "number" | "date";
  value?: string;
  setValue?: (evt: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  containerClassName?: string;
}

export default function InputWithLabel({
  children,
  label,
  placeholder,
  type,
  value,
  setValue,
  className,
  containerClassName,
  readOnly = false,
}: Props) {
  return (
    <div className={`${styles.searchForm} ${containerClassName}`}>
      <label htmlFor="input">{label}</label>

      <Input
        id="input"
        className={`${styles.input} ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        readOnly={readOnly}
      >
        {children}
      </Input>
    </div>
  );
}
