"use client";

import { HTMLAttributes, JSX, useState } from "react";

import styles from "./Select.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  setValue?: (value: string) => void;
  currentOption: (isOpen: boolean) => JSX.Element;
  options: string[] | [() => JSX.Element];
}

export default function Select({
  setValue,
  currentOption,
  options,
  className,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  const onSelect = (value: string) => {
    if (setValue) {
      setValue(value);
    }
  };

  return (
    <div className={`${styles.select}`}>
      <div className={`${styles.currentOption} ${className}`} onClick={onClick}>
        {currentOption(isOpen)}
      </div>

      <div
        className={`${styles.options} ${isOpen ? styles.open : styles.close}`}
      >
        {options.map((Option, inx) => {
          if (typeof Option === "string") {
            return (
              <div
                key={inx}
                className={`${styles.option}`}
                onClick={() => onSelect(Option)}
              >
                <p>{Option}</p>
              </div>
            );
          } else {
            return <Option key={inx} />;
          }
        })}
      </div>
    </div>
  );
}
