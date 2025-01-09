import { HTMLAttributes } from "react";
import styles from "./Button.module.css";

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
};
