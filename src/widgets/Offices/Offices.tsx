import React, { Dispatch, SetStateAction } from "react";

import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import InputWithLabel from "@/shared/InputWithLabel/InputWithLabel";
import styles from "./Offices.module.css";
import { usdtFormData } from "@/types/usdtFormData";

interface Props {
  nextStep: Dispatch<void>;
  setFormData: Dispatch<SetStateAction<usdtFormData>>;
}

const Offices = ({ nextStep, setFormData }: Props) => {
  return (
    <div className={`${styles.offices}`}>
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

interface IAddressesProps {
  city: string;
  streets: string[];
  nextStep: () => void;
  setFormData: Dispatch<SetStateAction<usdtFormData>>;
}

function Addresses({ city, streets, nextStep, setFormData }: IAddressesProps) {
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
