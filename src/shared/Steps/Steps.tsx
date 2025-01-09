import { HTMLAttributes } from "react";
import styles from "./Steps.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  steps?: number;
  currentStep: number;
}

export default function Steps({ steps = 1, currentStep }: Props) {
  return (
    <div className={`${styles.container}`}>
      <p className={`${styles.header}`}>Покупка USDT</p>

      <div
        className={`${styles.steps}`}
        style={{
          gridTemplateColumns: `repeat(${steps}, 1fr)`,
        }}
      >
        {Array.from({ length: steps }).map((_, inx) => (
          <div
            key={inx}
            className={`${styles.step} ${
              inx <= currentStep ? styles.active : styles.default
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
