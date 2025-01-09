import Image from "next/image";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <LocaleSwitcher />

      <div>
        <div className={`${styles.logo}`}>
          <Image src={"/logo.png"} fill alt="SKYNET" />
        </div>
      </div>
    </header>
  );
}
