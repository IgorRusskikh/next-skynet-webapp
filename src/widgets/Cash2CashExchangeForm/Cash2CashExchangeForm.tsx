import {
  Dispatch,
  FormEvent,
  FormEventHandler,
  HTMLAttributes,
  SetStateAction,
} from "react";

import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import Input from "@/shared/ui/Input/Input";
import Select from "@/shared/ui/Select/Select";
import styles from "./Cash2CashExchangeForm.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  step: number;
  nextStep: () => void;
  formData: cashToCashFormData;
  setFormData: Dispatch<SetStateAction<cashToCashFormData>>;
}

const pointStep = 7;

const Cash2CashExchangeForm = ({
  step,
  nextStep,
  formData,
  setFormData,
  className,
}: Props) => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <div
      className={`${styles.formWrapper} ${
        step === pointStep
          ? styles.formWrapperShown
          : step > pointStep
          ? ""
          : styles.formWrapperHidden
      } ${className}`}
    >
      <form action="" className={`${styles.form}`} onSubmit={onSubmit}>
        <div className={`${styles.fields}`}>
          <fieldset className={`${styles.fieldSet}`}>
            <label htmlFor="give">Вы отдаёте в [городе]</label>
            <Select
              currentOption={(isOpen) => CurrentOption(isOpen, "RUB")}
              options={["1"]}
              className={`${styles.select}`}
            />
            <Input placeholder="0">
              <div className={`${styles.inputCurrency}`}>RUB</div>
            </Input>
          </fieldset>

          <fieldset className={`${styles.fieldSet} ${styles.secondFieldSet}`}>
            <label htmlFor="give">Вы отдаёте в [городе]</label>
            <Select
              currentOption={(isOpen) => CurrentOption(isOpen, "USD")}
              // @ts-expect-error: comment for now
              options={[DollarOption, EuroOption]}
              className={`${styles.select}`}
            />
            <Input placeholder="0">
              <div className={`${styles.inputCurrency}`}>USD</div>
            </Input>
          </fieldset>

          <p className={`${styles.description}`}>
            Представлен ориентировочный расчет, точный расчет вам предоставит
            менеджер
          </p>
        </div>

        <div className={`${styles.actions}`}>
          <p>
            Вы неверифицированный пользователь. Для запроса расчета необходимо
            верифицироваться или приехать лично в офис.
          </p>

          <Button>Запросить верификацию</Button>
        </div>
      </form>
    </div>
  );
};

function CurrentOption(isOpen: boolean, currency: string) {
  return (
    <div className={`${styles.currentOption}`}>
      <div className={`${styles.currency}`}>
        <div className={`${styles.currencyIcon}`}>
          <Image src={"/ruble.png"} fill alt="Ruble" />
        </div>
        <span>{currency}</span>
      </div>

      <div
        className={`${styles.arrowIcon} ${
          isOpen ? styles.arrowIconOpen : styles.arrowIconClose
        }`}
      >
        <Image
          src={"/dropdown-arrow-gray.png"}
          fill
          alt={isOpen ? "Close" : "Open"}
        />
      </div>
    </div>
  );
}

function DollarOption() {
  return (
    <div className={`${styles.option}`}>
      <div className={`${styles.currency}`}>
        <div className={`${styles.currencyIcon}`}>
          <Image src={"/dollar.png"} fill alt="Ruble" />
        </div>
        <span>USD</span>
      </div>
    </div>
  );
}

function EuroOption() {
  return (
    <div className={`${styles.option}`}>
      <div className={`${styles.currency}`}>
        <div className={`${styles.currencyIcon}`}>
          <Image src={"/euro.png"} fill alt="Ruble" />
        </div>
        <span>USD</span>
      </div>
    </div>
  );
}

export default Cash2CashExchangeForm;
