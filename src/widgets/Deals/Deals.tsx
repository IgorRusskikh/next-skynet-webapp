"use client";

import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import styles from "./Deals.module.css";
import { useState } from "react";

interface Props {
  setDeal: (id: string) => void;
}

const Deals = ({ setDeal }: Props) => {
  const [activeDeals, setActiveDeals] = useState<"active" | "inactive">(
    "active"
  );

  const onClick = (id: number) => {
    setDeal(id.toString());
  };

  return (
    <div className={`${styles.dealsContainer}`}>
      <div className={`${styles.filters}`}>
        <Button
          className={`${styles.filter} ${
            activeDeals === "active" ? styles.activeFilter : ""
          }`}
          onClick={() => setActiveDeals("active")}
        >
          <div className={`${styles.filterDot}`}></div>
          <span>Активные сделки</span>
        </Button>
        <Button
          className={`${styles.filter} ${
            activeDeals === "inactive" ? styles.activeFilter : ""
          }`}
          onClick={() => setActiveDeals("inactive")}
        >
          <div className={`${styles.folderIcon}`}>
            <Image src="/gray-folder.png" fill alt="Folder" />
          </div>
          <span>Архивные сделки</span>
        </Button>
      </div>

      <div className={`${styles.deals}`}>
        <ActiveDeals
          className={`${
            activeDeals === "active"
              ? styles.activeDealsShown
              : styles.archivedDealsHidden
          }`}
          onClick={onClick}
        />
        <ArchivedDeals
          className={`${
            activeDeals === "inactive"
              ? styles.archivedDealsShown
              : styles.activeDealsHidden
          }`}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

interface IDealsProps {
  className?: string;
  onClick?: (id: number) => void;
}

function ActiveDeals({ className, onClick }: IDealsProps) {
  return (
    <div className={`${styles.dealsList} ${className}`}>
      {Array.from({ length: 10 }).map((_, index) => (
        <button
          key={index}
          className={`${styles.deal}`}
          onClick={() => onClick?.(index)}
        >
          <div className={`${styles.dealIcon}`}>
            <Image src="/inner-links/wallet.png" fill alt="Cash2Cash" />
          </div>{" "}
          <span>Покупка 10.000 USDT</span>
        </button>
      ))}
    </div>
  );
}

function ArchivedDeals({ className, onClick }: IDealsProps) {
  return (
    <div className={`${styles.dealsList} ${className}`}>
      {Array.from({ length: 100 }).map((_, index) => (
        <button
          key={index}
          className={`${styles.deal}`}
          onClick={() => onClick?.(index)}
        >
          <div className={`${styles.dealIcon}`}>
            <Image src="/inner-links/wallet.png" fill alt="Cash2Cash" />
          </div>{" "}
          <span>Покупка 10.000 USDT</span>
        </button>
      ))}
    </div>
  );
}

export default Deals;
