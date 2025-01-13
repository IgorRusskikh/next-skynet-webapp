"use client";

import { HTMLAttributes, useEffect, useState } from "react";

import { Button } from "@/shared/ui/Button";
import Header from "@/shared/Header/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./SuccessfullRequest.module.css";
import { useRouter } from "next/navigation";

interface Props extends HTMLAttributes<HTMLDivElement> {
  operation?: "purchase" | "sale";
  verification?: boolean;
  code: string;
  amount: number;
  currency: string;
  manager: string;
  show?: boolean;
}

const SuccessfulRequest = ({
  operation = "purchase",
  verification,
  code,
  amount,
  currency,
  manager,
  show,
  className,
}: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const copyToClipboard = async () => {
    if (!isClient) return;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } else {
        fallbackCopyTextToClipboard(code);
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div
      className={`${styles.successfullScreen} ${
        show ? styles.successfullScreenShown : styles.successfullScreenHidden
      }`}
    >
      <Header hideSwitcher />

      <div className={`${styles.content} ${className}`}>
        <div className={`${styles.codeInput}`} onClick={copyToClipboard}>
          {code.split("").map((digit, inx) => (
            <div key={inx} className={`${styles.input}`}>
              {digit}
            </div>
          ))}
          <div className={`${styles.iconWrapper}`}>
            <div className={`${styles.copyIcon}`}>
              <Image
                src={"/copy.png"}
                fill
                alt={isCopied ? "Copied" : "Copy code"}
              />
            </div>
          </div>
        </div>

        <div className={`${styles.descriptionBlock}`}>
          <p className={`${styles.title}`}>
            Заявка на {operation === "purchase" ? "покупку" : "продажу"}{" "}
            {amount} {currency} {verification && "и верификацию"} успешно
            создана
          </p>
          <p className={`${styles.description}`}>
            Сохраните данный код, это ваш ключ безопасности по данной сделке. В
            ближайшее время с Вами свяжется{" "}
            {verification ? `ваш менеджер @${manager}` : "наш менеджер."}
          </p>
        </div>

        <div className={`${styles.successButton}`}>
          <Button onClick={() => router.push("/")}>Готово</Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulRequest;
