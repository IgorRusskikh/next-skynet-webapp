import { ChangeEvent, Dispatch, FormEvent } from "react";

import { Button } from "@/shared/ui/Button";
import InputWithLabel from "@/shared/InputWithLabel/InputWithLabel";
import { SetStateAction } from "react";
import styles from "./FtaForm.module.css";

interface Props {
  formData: ftaFormData;
  setFormData: Dispatch<SetStateAction<ftaFormData>>;
  step: number;
  nextStep: () => void;
  verification?: boolean;
}

const currencies: currency[] = ["RUB", "USD", "EURO", "USDT"];

const FtaForm = ({
  formData,
  setFormData,
  step,
  nextStep,
  verification,
}: Props) => {
  const onClickCurrency = (currency: currency) => {
    setFormData((prev) => ({ ...prev, payCurrency: currency }));
  };

  const payAmountOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, payAmount: e.target.value }));
  };

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.payAmount) {
      nextStep();
    }
  };

  return (
    <div
      className={`${styles.ftaForm} ${
        step === 2
          ? styles.ftaFormVisible
          : step > 2
          ? ""
          : styles.ftaFormHidden
      }`}
    >
      <form className={`${styles.form}`} onSubmit={onSubmit}>
        <div className={`${styles.pay}`}>
          <p className={`${styles.payTitle}`}>Вы отдаёте</p>
          <div className={`${styles.currencies}`}>
            {currencies.map((currency, inx) => (
              <Button
                key={inx}
                className={`${
                  formData.payCurrency === currency ? styles.activeCurrency : ""
                }`}
                onClick={(evt) => {
                  evt.preventDefault();
                  onClickCurrency(currency);
                }}
              >
                {currency}
              </Button>
            ))}
          </div>

          <InputWithLabel
            label="Введите сумму"
            placeholder="0"
            value={formData.payAmount}
            setValue={payAmountOnChange}
          >
            <div className={`${styles.payCurrency}`}>
              {formData.payCurrency}
            </div>
          </InputWithLabel>
        </div>

        <div className={`${styles.actions}`}>
          {verification && (
            <p>
              Вы неверифицированный пользователь. Для запроса фиксации курса
              необходимо верифицироваться или приехать лично в офис.
            </p>
          )}
          <Button
            className={`${formData.payAmount ? styles.activeButton : ""}`}
          >
            Подтвердить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FtaForm;
