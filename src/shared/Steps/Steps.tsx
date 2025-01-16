import { HTMLAttributes } from "react";
import styles from "./Steps.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  steps?: number;
  currentStep: number;
  showSteps?: boolean;
}

export default function Steps({
  title,
  steps = 1,
  currentStep,
  showSteps = true,
}: Props) {
  return (
    <div className={`${styles.container}`}>
      <p className={`${styles.header}`}>{title}</p>

      <div
        className={`${styles.steps} ${showSteps ? "" : styles.hideSteps}`}
        style={{
          gridTemplateColumns: `repeat(${steps}, 1fr)`,
        }}
      >
        {Array.from({ length: steps }).map((_, inx) => (
          <div
            key={inx}
            className={`${styles.step} ${
              inx <= currentStep - 1 ? styles.stepActive : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
