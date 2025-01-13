import { ChangeEvent, Dispatch, HTMLAttributes, SetStateAction } from "react";

import Input from "../ui/Input/Input";
import styles from "./InputWithLabel.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string;
  placeholder: string;
  type?: "text" | "number";
  value?: string;
  setValue?: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputWithLabel({
  children,
  label,
  placeholder,
  type,
  value,
  setValue,
  className,
}: Props) {
  return (
    <div className={`${styles.searchForm}`}>
      <label htmlFor="input">{label}</label>

      <Input
        id="input"
        className={`${styles.input} ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        setValue={setValue}
      >
        {children}
      </Input>
    </div>
  );
}
