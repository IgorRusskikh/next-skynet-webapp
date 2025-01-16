"use client";

import { ChangeEvent, Dispatch, useState } from "react";

import { Button } from "@/shared/ui/Button/Button";
import InputWithLabel from "@/shared/InputWithLabel/InputWithLabel";
import { SetStateAction } from "react";
import styles from "./OrderDetail.module.css";

interface Props {
  formData: orderPassFormData;
  setFormData: Dispatch<SetStateAction<orderPassFormData>>;
}

const OrderDetail = ({ formData, setFormData }: Props) => {
  const [edit, setEdit] = useState(false);
  const [initialFormData, setInitialFormData] = useState({ ...formData });

  const switchEdit = (evt: React.FormEvent) => {
    evt.preventDefault();
    setEdit(!edit);
  };

  const cancelEdit = (evt: React.FormEvent) => {
    evt.preventDefault();
    setFormData(initialFormData);
    setEdit(false);
  };

  const onChangeOffice = (e: ChangeEvent<HTMLInputElement>) => {
    if (edit) {
      setFormData((prev) => ({ ...prev, address: e.target.value }));
    }
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    if (edit) {
      setFormData((prev) => ({ ...prev, fullName: e.target.value }));
    }
  };

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    if (edit) {
      setFormData((prev) => ({ ...prev, phone: e.target.value }));
    }
  };

  const birthDateOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    if (edit) {
      setFormData((prev) => ({ ...prev, birthDate: date }));
    }
  };

  return (
    <div className={`${styles.orderDetail}`}>
      <form className={`${styles.orderData}`}>
        <p>Заявка на пропуск 04.12.2024</p>

        <div className={`${styles.orderStatus}`}>
          <p>На рассмотрении</p>
        </div>

        <div className={`${styles.orderInfo}`}>
          <InputWithLabel
            label="Вы выбрали офис"
            placeholder="Введите адрес"
            value={formData.address}
            setValue={onChangeOffice}
            containerClassName={`${styles.orderInfoInput}`}
            readOnly={!edit}
          />
          <InputWithLabel
            label="Ваше ФИО"
            placeholder="Введите ФИО"
            value={formData.fullName}
            setValue={onChangeName}
            containerClassName={`${styles.orderInfoInput}`}
            readOnly={!edit}
          />
          <InputWithLabel
            label="Ваш номер телефона"
            placeholder="Введите номер телефона"
            value={formData.phone}
            setValue={onChangePhone}
            containerClassName={`${styles.orderInfoInput}`}
            readOnly={!edit}
          />
          <InputWithLabel
            label="Ваша дата рождения"
            placeholder="дд/мм/гггг"
            type="date"
            value={
              formData.birthDate instanceof Date &&
              !isNaN(formData.birthDate.getTime())
                ? formData.birthDate.toISOString().split("T")[0]
                : ""
            }
            setValue={birthDateOnChange}
            containerClassName={`${styles.orderInfoInput}`}
            readOnly={!edit}
          />
        </div>

        <div className={`${styles.actions}`}>
          <Button
            className={`${styles.confirmButton} ${styles.activeButton}`}
            onClick={(evt) => switchEdit(evt)}
          >
            {edit ? "Сохранить" : "Отредактировать"}
          </Button>
          <Button
            className={`${styles.cancelButton} ${styles.cancelButton}`}
            onClick={(evt) => cancelEdit(evt)}
          >
            Отменить изменения
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OrderDetail;
