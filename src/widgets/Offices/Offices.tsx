import {
  ChangeEvent,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from "react";

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
  const [search, setSearch] = useState("");
  const [offices, setOffices] = useState<ReactElement[]>([
    <Addresses
      key="Москва"
      city="Москва"
      streets={["ул. улица, 18, офис 203"]}
      nextStep={nextStep}
      setFormData={setFormData}
    />,
    <Addresses
      key="Уфа"
      city="Уфа"
      streets={["ул. улица, 18, офис 203"]}
      nextStep={nextStep}
      setFormData={setFormData}
    />,
    <Addresses
      key="Майами"
      city="Майами"
      streets={["ул. улица, 18, офис 203"]}
      nextStep={nextStep}
      setFormData={setFormData}
    />,
    <Addresses
      key="Дубай"
      city="Дубай"
      streets={["ул. улица, 18, офис 203"]}
      nextStep={nextStep}
      setFormData={setFormData}
    />,
    <Addresses
      key="Дубай"
      city="Дубай"
      streets={["ул. улица, 18, офис 203"]}
      nextStep={nextStep}
      setFormData={setFormData}
    />,
    <Addresses
      key="Дубай"
      city="Дубай"
      streets={["ул. улица, 18, офис 203"]}
      nextStep={nextStep}
      setFormData={setFormData}
    />,
  ]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

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
          value={search}
          onChange={onChangeSearch}
        >
          <div className={`${styles.icon}`}>
            <Image src="/scale.png" fill alt="Search" />
          </div>
        </InputWithLabel>

        <div className={`${styles.addresses}`}>{offices}</div>
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
