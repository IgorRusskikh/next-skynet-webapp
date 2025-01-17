import { ChangeEvent, Dispatch } from "react";

import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import InputWithLabel from "@/shared/InputWithLabel/InputWithLabel";
import { SetStateAction } from "react";
import styles from "./FtaUserType.module.css";

interface Props {
  formData: ftaFormData;
  setFormData: Dispatch<SetStateAction<ftaFormData>>;
  nextStep: () => void;
}

const FtaUserType = ({ formData, setFormData, nextStep }: Props) => {
  const userTypeOnClick = (type: "exporter" | "importer") => {
    setFormData((prev) => ({ ...prev, [type]: true }));
    nextStep();
  };

  const sendInvoiceOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, invoiceCity: e.target.value }));
  };

  const paymentPurposeOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, paymentPurpose: e.target.value }));
  };

  const continueOnClick = () => {
    if (formData.invoiceCity && formData.paymentPurpose) {
      nextStep();
    }
  };

  return (
    <div className={`${styles.ftaUserType}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.topContent}`}>
          <p>Вы экспортер или импортер?</p>

          <div className={`${styles.buttons}`}>
            <Button onClick={() => userTypeOnClick("exporter")}>
              Экспортер
              <div className={`${styles.arrow}`}>
                <Image src="/red-arrow.png" fill alt="Экспорт" />
              </div>
            </Button>
            <Button onClick={() => userTypeOnClick("importer")}>
              Импортер
              <div className={`${styles.arrow} ${styles.rotatedArrow}`}>
                <Image src="/red-arrow.png" fill alt="Импорт" />
              </div>
            </Button>
          </div>
        </div>

        <div className={`${styles.separator}`}>
          <p>или</p>
        </div>

        <div className={`${styles.bottomContent}`}>
          <InputWithLabel
            label="Впишите страну, куда отправляете инвойс"
            placeholder="Страна"
            value={formData.invoiceCity}
            setValue={sendInvoiceOnChange}
            containerClassName={`${styles.inputContainer}`}
          />

          <div className={`${styles.textArea}`}>
            <label htmlFor="textArea">Впишите назначение платежа</label>
            <textarea
              id="textArea"
              placeholder="Назначение платежа"
              value={formData.paymentPurpose}
              onChange={paymentPurposeOnChange}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.actions}`}>
        <Button
          onClick={continueOnClick}
          className={`${
            formData.invoiceCity && formData.paymentPurpose
              ? styles.activeButton
              : ""
          }`}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
};

export default FtaUserType;
