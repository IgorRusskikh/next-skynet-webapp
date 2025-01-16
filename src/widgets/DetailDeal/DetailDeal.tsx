import Image from "next/image";
import InputWithLabel from "@/shared/InputWithLabel/InputWithLabel";
import styles from "./DetailDeal.module.css";
import { useState } from "react";

interface Props {
  id: number | null;
  show: boolean;
}

const DetailDeal = ({ id, show }: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const [pay, setPay] = useState(0);
  const [get, setGet] = useState(1000);

  const handleCopy = async () => {
    const { copyToClipboard } = await import(
      "@/features/utils/copyToClipboard"
    );

    await copyToClipboard("M-123456", {
      onSuccess: () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      },
    });
  };

  return (
    <div
      className={`${styles.detailDeal} ${
        show ? styles.detailDealShown : styles.detailDealHidden
      }`}
    >
      <div className={`${styles.details}`}>
        <div className={`${styles.meta}`}>
          <p>Заявка на покупку 10.000 USDT</p>

          <div className={`${styles.id}`} onClick={handleCopy}>
            <span>ID: M-123456</span>
            <div className={`${styles.copyIcon}`}>
              <Image src={"/copy-red.png"} fill alt="copy" />
            </div>
          </div>
        </div>

        <div className={`${styles.content}`}>
          <InputWithLabel
            label="Вы отдаёте"
            placeholder="1.000.000"
            readOnly
            value={pay.toString()}
            className={`${styles.pay}`}
          >
            <span>RUB</span>
          </InputWithLabel>

          <InputWithLabel
            label="Вы отдаёте"
            placeholder="1.000.000"
            readOnly
            className={`${styles.get}`}
            containerClassName={`${styles.getContainer}`}
            value={get.toString()}
          >
            <span>RUB</span>
          </InputWithLabel>
        </div>
      </div>
    </div>
  );
};

export default DetailDeal;
