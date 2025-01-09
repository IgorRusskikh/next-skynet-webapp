"use client";

import Image from "next/image";
import Select from "../ui/Select/Select";
import styles from "./LocaleSwitcher.module.css";

export default function LocaleSwitcher() {
  return (
    <div className={`${styles.switcher}`}>
      <Select
        currentOption={CurrentLocale}
        options={["i"]}
        className={`${styles.select}`}
      />
    </div>
  );
}

function CurrentLocale(isOpen: boolean) {
  return (
    <>
      <span>RU</span>
      <div
        className={`${styles.dropdownArrow} ${
          isOpen ? styles.arrowOpen : styles.arrowClose
        }`}
      >
        <Image src="/dropdown-arrow-black.png" fill alt="" />
      </div>
    </>
  );
}
