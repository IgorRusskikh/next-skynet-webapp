import { ChangeEvent, Dispatch, FormEvent } from "react";

import { Button } from "@/shared/ui/Button";
import InputWithLabel from "@/shared/InputWithLabel/InputWithLabel";
import { SetStateAction } from "react";
import styles from "./OrderPassForm.module.css";

interface Props {
  formData: orderPassFormData;
  setFormData: Dispatch<SetStateAction<orderPassFormData>>;
  step: number;
  nextStep: () => void;
  className?: string;
}

const OrderPassForm = ({
  formData,
  setFormData,
  className,
  step,
  nextStep,
}: Props) => {
  const fullNameOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, fullName: e.target.value }));
  };

  const phoneOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, phone: e.target.value }));
  };

  const birthDateOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setFormData((prev) => ({ ...prev, birthDate: date }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.fullName && formData.phone && formData.birthDate) {
      nextStep();
    }
  };

  return (
    <div
      className={`${styles.orderPassForm} ${
        step === 3 ? styles.formShown : step > 3 ? "" : styles.formHidden
      }`}
    >
      <form className={`${styles.form}`} onSubmit={onSubmit}>
        <div>
          <InputWithLabel
            label="Впишите ваше ФИО"
            placeholder="ФИО"
            value={formData.fullName}
            setValue={fullNameOnChange}
          />
          <InputWithLabel
            label="Введите номер телефона"
            placeholder="+"
            value={formData.phone}
            setValue={phoneOnChange}
          />
          <InputWithLabel
            type="date"
            label="Выберите дату Вашего рождения"
            placeholder="дд/мм/гггг"
            value={
              formData.birthDate instanceof Date &&
              !isNaN(formData.birthDate.getTime())
                ? formData.birthDate.toISOString().split("T")[0]
                : ""
            }
            setValue={birthDateOnChange}
          />
        </div>
        <div className={`${styles.actions}`}>
          <Button
            className={`${
              formData.fullName && formData.phone && formData.birthDate
                ? styles.activeButton
                : ""
            }`}
          >
            Заказать пропуск
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OrderPassForm;
