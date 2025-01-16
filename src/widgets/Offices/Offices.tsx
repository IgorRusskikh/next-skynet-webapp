import { Dispatch, SetStateAction } from "react";

import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import InputWithLabel from "@/shared/InputWithLabel/InputWithLabel";
import styles from "./Offices.module.css";

interface Props<T> {
  step: number;
  showPoint: number;
  nextStep: Dispatch<void>;
  setFormData: Dispatch<SetStateAction<T>>;
}

const Offices = <T extends { address: string }>({
  step,
  nextStep,
  setFormData,
  showPoint,
}: Props<T>) => {
  return (
    <div
      className={`${styles.offices} ${
        showPoint === step
          ? styles.officesShown
          : step > showPoint
          ? ""
          : styles.officesHidden
      }`}
    >
      <div>
        <InputWithLabel
          label="Выберите офис для посещения"
          placeholder={"Поиск..."}
        >
          <div className={`${styles.icon}`}>
            <Image src="/scale.png" fill alt="Search" />
          </div>
        </InputWithLabel>

        <div className={`${styles.addresses}`}>
          <Addresses
            city="Москва"
            streets={["ул. улица, 18, офис 203"]}
            nextStep={nextStep}
            setFormData={setFormData}
          />
          <Addresses
            city="Москва"
            streets={["ул. улица, 18, офис 203"]}
            nextStep={nextStep}
            setFormData={setFormData}
          />
          <Addresses
            city="Москва"
            streets={["ул. улица, 18, офис 203"]}
            nextStep={nextStep}
            setFormData={setFormData}
          />
          <Addresses
            city="Москва"
            streets={["ул. улица, 18, офис 203"]}
            nextStep={nextStep}
            setFormData={setFormData}
          />
        </div>
      </div>

      <div className={`${styles.contactWithManager}`}>
        <p>Не нашли нужный офис?</p>
        <Button>Свяжитесь с менеджером</Button>
      </div>
    </div>
  );
};

interface IAddressesProps<T> {
  city: string;
  streets: string[];
  nextStep: () => void;
  setFormData: Dispatch<SetStateAction<T>>;
}

function Addresses<T extends { address: string }>({
  city,
  streets,
  nextStep,
  setFormData,
}: IAddressesProps<T>) {
  const onClick = (street: string) => {
    setFormData((prev) => ({ ...prev, address: street }));
  };

  return (
    <div className={`${styles.office}`}>
      <p className={`${styles.city}`}>{city}</p>

      <div className={`${styles.streets}`}>
        {streets.map((street, inx) => (
          <div
            className={`${styles.street}`}
            key={inx}
            onClick={() => {
              onClick(street);
              nextStep();
            }}
          >
            {street}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offices;
