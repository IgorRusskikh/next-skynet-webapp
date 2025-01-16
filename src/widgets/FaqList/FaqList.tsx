"use client";

import { useRef, useState } from "react";

import styles from "./FaqList.module.css";

const FaqList = () => {
  return (
    <div className={`${styles.faqList}`}>
      {Array.from({ length: 10 }).map((_, index) => (
        <FaqItem
          key={index}
          title={`${index + 1}. Вопрос`}
          answer={`Ответ ${index + 1}`}
        />
      ))}
    </div>
  );
};

interface FaqItemProps {
  title: string;
  answer: string;
}

function FaqItem({ title, answer }: FaqItemProps) {
  const answerRef = useRef<HTMLParagraphElement>(null);
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <div className={`${styles.faqItem}`}>
      <div className={`${styles.itemHeader}`} onClick={handleClick}>
        <p className={`${styles.itemTitle}`}>{title}</p>{" "}
        <div className={`${styles.itemIcon}`}>
          <div className={`${styles.horLine}`}></div>
          <div
            className={`${styles.verLine} ${isShown ? styles.verLineOpen : ""}`}
          ></div>
        </div>
      </div>

      <div
        className={`${styles.answerContainer} ${
          isShown ? styles.itemAnswerShown : styles.itemAnswerHidden
        }`}
        style={{
          maxHeight: isShown ? `${answerRef.current?.scrollHeight}px` : "0px",
        }}
        ref={answerRef}
      >
        <p className={`${styles.itemAnswer}`}>{answer}</p>
      </div>
    </div>
  );
}

export default FaqList;
