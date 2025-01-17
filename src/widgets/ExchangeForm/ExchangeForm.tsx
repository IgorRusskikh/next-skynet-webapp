"use client";

import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import Select from "@/shared/ui/Select/Select";
import styles from "./ExchangeForm.module.css";
import { usePreloader } from "@/shared/contexts/PreloaderContext";
import { useRouter } from "next/navigation";

export default function ExchangeForm() {
  const router = useRouter();

  const { setIsLoaded, setPreloaderTimeout } = usePreloader();

  const onClickPurchase = () => {
    setIsLoaded(false);
    setPreloaderTimeout(1000);
    setTimeout(() => router.push("/purchase"), 400);
  };

  const onClickSale = () => {
    setIsLoaded(false);
    setPreloaderTimeout(1000);
    setTimeout(() => router.push("/sale"), 400);
  };

  return (
    <div className={`${styles.form}`}>
      <div className={`${styles.rate}`}>
        <div className={`${styles.col}`}>
          <label htmlFor="currency">Валюты</label>
          <div id="currency" className={`${styles.switcher}`}>
            <Select
              currentOption={CurrentCurrency}
              options={["1 USD", "1 EURO"]}
              className={`${styles.select}`}
            />
          </div>
        </div>

        <div className={`${styles.col}`}>
          <label htmlFor="amount">Купить</label>
          <p id="amount" className={`${styles.amount}`}>
            0,0096USDTs
          </p>
        </div>
      </div>

      <div className={`${styles.actions}`}>
        <Button onClick={onClickPurchase}>
          Купить USDT{" "}
          <div className={`${styles.arrow}`}>
            <Image src="/red-arrow.png" fill alt="Buy" />
          </div>
        </Button>
        <Button onClick={onClickSale}>
          Продать USDT
          <div className={`${styles.arrow} ${styles.rotatedArrow}`}>
            <Image src="/red-arrow.png" fill alt="Sell" />
          </div>
        </Button>
      </div>
    </div>
  );
}

function CurrentCurrency(isOpen: boolean) {
  return (
    <>
      <span>1 RUB</span>
      <div
        className={`${styles.dropdownArrow} ${
          isOpen ? styles.arrowOpen : styles.arrowClose
        }`}
      >
        <Image src="/dropdown-arrow.png" fill alt="" />
      </div>
    </>
  );
}
