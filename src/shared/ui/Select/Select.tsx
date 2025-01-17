"use client";

import { HTMLAttributes, JSX, useState } from "react";

import styles from "./Select.module.css";
import { useClickAway } from "@uidotdev/usehooks";

interface Props extends HTMLAttributes<HTMLDivElement> {
  setValue?: (value: string) => void;
  currentOption: (isOpen: boolean) => JSX.Element;
  options:
    | string[]
    | ((props: { setValue?: (value: string) => void }) => JSX.Element)[];
}

export default function Select({
  setValue,
  currentOption,
  options,
  className,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  const onSelect = (value: string) => {
    if (setValue) {
      setValue(value);
    }

    setIsOpen(false);
  };

  return (
    <div ref={selectRef} className={`${styles.select}`}>
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
            return (
              <Option
                key={inx}
                setValue={(value: string) => {
                  if (setValue) setValue(value);
                  setIsOpen(false);
                }}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
