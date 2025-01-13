import Image from "next/image";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import styles from "./Header.module.css";

interface Props {
  hideSwitcher?: boolean;
}

export default function Header({ hideSwitcher }: Props) {
  if (hideSwitcher) {
    return (
      <header key={"header"} className={`${styles.headerWithoutSwitcher}`}>
        <div>
          <div className={`${styles.logo}`}>
            <Image src={"/logo.png"} fill alt="SKYNET" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header key={"header"} className={`${styles.header}`}>
      <LocaleSwitcher />

      <div>
        <div className={`${styles.logo}`}>
          <Image src={"/logo.png"} fill alt="SKYNET" />
        </div>
      </div>
    </header>
  );
}
