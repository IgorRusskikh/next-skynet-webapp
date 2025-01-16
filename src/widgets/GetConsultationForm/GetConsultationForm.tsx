import { Button } from "@/shared/ui/Button/Button";
import InputWithLabel from "@/shared/InputWithLabel/InputWithLabel";
import styles from "./GetConsultationForm.module.css";
import { useState } from "react";

interface Props {
  nextStep: () => void;
}

const GetConsultationForm = ({ nextStep }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    question: "",
  });

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phone: e.target.value });
  };

  const onChangeQuestion = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, question: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.name && formData.phone && formData.question) {
      nextStep();
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <InputWithLabel
          label="Впишите ваше ФИО"
          placeholder="ФИО"
          value={formData.name}
          setValue={onChangeName}
        />
        <InputWithLabel
          label="Введите номер телефона"
          placeholder="+"
          value={formData.phone}
          setValue={onChangePhone}
        />
        <div className={styles.question}>
          <label htmlFor="question">Кратко опишите ваш вопрос</label>
          <textarea
            name="question"
            id="question"
            placeholder="Хочу узнать..."
            value={formData.question}
            onChange={onChangeQuestion}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <Button
            className={`${
              formData.name && formData.phone && formData.question
                ? styles.activeButton
                : ""
            }`}
          >
            Оставить заявку
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GetConsultationForm;
