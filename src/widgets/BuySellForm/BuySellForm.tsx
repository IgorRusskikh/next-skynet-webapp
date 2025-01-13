import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import { Button } from "@/shared/ui/Button";
import InputWithLabel from "@/shared/InputWithLabel/InputWithLabel";
import { formData } from "@/types/usdtFormData";
import styles from "./BuySellForm.module.css";

interface Props {
  verification?: boolean;
  formData: formData;
  setFormData: Dispatch<SetStateAction<usdtFormData>>;
  nextStep: () => void;
}

const currencies: currency[] = ["RUB", "USD", "EURO"];

const BuySellForm = ({
  verification,
  formData,
  setFormData,
  nextStep,
}: Props) => {
  const [recieve, setRecieve] = useState("");

  const onClickCurrency = (currency: currency) => {
    setFormData((prev) => ({ ...prev, currency }));
  };

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, amount: evt.target.value };
    });
    setRecieve(evt.target.value);
  };

  const nextButtonOnclick = () => {
    if (formData.amount) {
      nextStep();
    }
  };

  return (
    <div className={`${styles.form}`}>
      <div>
        <div className={`${styles.currenciesContainer}`}>
          <p>Вы отдаёте</p>

          <div className={`${styles.currencies}`}>
            {currencies.map((currency, inx) => (
              <Button
                key={inx}
                className={`${
                  formData.currency === currency ? styles.activeCurrency : ""
                }`}
                onClick={() => onClickCurrency(currency)}
              >
                {currency}
              </Button>
            ))}
          </div>
        </div>

        <div className={`${styles.amounts}`}>
          <InputWithLabel
            type="number"
            label="Введите сумму"
            placeholder="0"
            value={formData.amount.toString()}
            setValue={onChange}
          >
            <span>{formData.currency}</span>
          </InputWithLabel>

          <InputWithLabel
            type="number"
            label="Вы получаете"
            placeholder="0"
            value={recieve}
          >
            <span>USDT</span>
          </InputWithLabel>
        </div>
      </div>

      <div className={`${styles.nextButton}`}>
        {verification && (
          <p>
            Вы неверифицированный пользователь. Для запроса фиксации курса
            необходимо верифицироваться или приехать лично в офис.
          </p>
        )}
        <Button
          onClick={nextButtonOnclick}
          className={`${formData.amount ? styles.buttonActive : ""}`}
        >
          Запросить {verification ? "верификацию" : "фикс"}
        </Button>
      </div>
    </div>
  );
};

export default BuySellForm;
