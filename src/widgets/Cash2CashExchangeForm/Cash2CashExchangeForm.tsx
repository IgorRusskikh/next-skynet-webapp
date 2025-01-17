import {
  ChangeEvent,
  Dispatch,
  FormEvent,
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
  const onClickPayCurrency = (currency: string) => {
    if (formData.payCurrency !== currency) {
      setFormData((prev) => ({ ...prev, payCurrency: currency }));
    }
  };

  const onChangePayAmount = (evt: ChangeEvent<HTMLInputElement>) => {
    const payAmount = evt.target.value;
    const getAmount = payAmount.length ? String(parseFloat(payAmount) * 2) : "";
    setFormData((prev) => ({ ...prev, payAmount, getAmount }));
  };

  const onClickGetCurrency = (currency: string) => {
    if (formData.getCurrency !== currency) {
      setFormData((prev) => ({ ...prev, getCurrency: currency }));
    }
  };

  const onChangeGetAmount = (evt: ChangeEvent<HTMLInputElement>) => {
    const getAmount = evt.target.value;
    const payAmount = getAmount.length ? String(parseFloat(getAmount) / 2) : "";
    setFormData((prev) => ({ ...prev, payAmount, getAmount }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      parseFloat(formData.payAmount) > 0 &&
      parseFloat(formData.getAmount) > 0
    ) {
      nextStep();
    }
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
            <label htmlFor="pay">Вы отдаёте в {formData.cityPay}</label>
            <Select
              currentOption={(isOpen) =>
                CurrentOption(isOpen, formData.payCurrency)
              }
              options={[RubleOption, DollarOption, EuroOption]}
              className={`${styles.select}`}
              setValue={onClickPayCurrency}
            />
            <Input
              id="pay"
              placeholder="0"
              value={formData.payAmount.toString()}
              setValue={onChangePayAmount}
            >
              <div className={`${styles.inputCurrency}`}>
                {formData.payCurrency}
              </div>
            </Input>
          </fieldset>

          <fieldset className={`${styles.fieldSet} ${styles.secondFieldSet}`}>
            <label htmlFor="get">Вы получаете в {formData.cityGet}</label>
            <Select
              currentOption={(isOpen) =>
                CurrentOption(isOpen, formData.getCurrency)
              }
              options={[RubleOption, DollarOption]}
              className={`${styles.select}`}
              setValue={onClickGetCurrency}
            />
            <Input
              id="get"
              placeholder="0"
              value={formData.getAmount}
              setValue={onChangeGetAmount}
            >
              <div className={`${styles.inputCurrency}`}>
                {formData.getCurrency}
              </div>
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

          <Button
            className={`${
              parseFloat(formData.payAmount) > 0 &&
              parseFloat(formData.getAmount) > 0
                ? styles.activeButton
                : ""
            }`}
          >
            Запросить верификацию
          </Button>
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

interface IOptionProps {
  setValue?: (value: string) => void;
}

function RubleOption({ setValue }: IOptionProps) {
  return (
    <div
      className={`${styles.option}`}
      onClick={() => setValue && setValue("RUB")}
    >
      <div className={`${styles.currency}`}>
        <div className={`${styles.currencyIcon}`}>
          <Image src={"/ruble.png"} fill alt="Ruble" />
        </div>
        <span>RUB</span>
      </div>
    </div>
  );
}

function DollarOption({ setValue }: IOptionProps) {
  return (
    <div
      className={`${styles.option}`}
      onClick={() => setValue && setValue("USD")}
    >
      <div className={`${styles.currency}`}>
        <div className={`${styles.currencyIcon}`}>
          <Image src={"/dollar.png"} fill alt="Ruble" />
        </div>
        <span>USD</span>
      </div>
    </div>
  );
}

function EuroOption({ setValue }: IOptionProps) {
  return (
    <div
      className={`${styles.option}`}
      onClick={() => setValue && setValue("EURO")}
    >
      <div className={`${styles.currency}`}>
        <div className={`${styles.currencyIcon}`}>
          <Image src={"/euro.png"} fill alt="Euro" />
        </div>
        <span>EURO</span>
      </div>
    </div>
  );
}

export default Cash2CashExchangeForm;
