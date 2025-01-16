import styles from "./HeaderWithoutLogo.module.css";

interface Props {
  children: React.ReactNode;
}

const HeaderWithoutLogo = ({ children }: Props) => {
  return (
    <header className={styles.header}>
      <h1>{children}</h1>
    </header>
  );
};

export default HeaderWithoutLogo;
