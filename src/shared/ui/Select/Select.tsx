"use client";

import { HTMLAttributes, JSX, useState } from "react";

import styles from "./Select.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  currentOption: (isOpen: boolean) => JSX.Element;
  options: string[] | JSX.Element[];
}

export default function Select({ currentOption, options, className }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${styles.select}`}>
      <div className={`${styles.currentOption} ${className}`} onClick={onClick}>
        {currentOption(isOpen)}
      </div>

      <div
        className={`${styles.options} ${isOpen ? styles.open : styles.close}`}
      >
        <div className={`${styles.option}`}>
          {options.map((option, inx) => {
            if (typeof option === "string") {
              return <p key={inx}>{option}</p>;
            } else {
              return <option key={inx} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
