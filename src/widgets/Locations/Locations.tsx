"use client";

import {
  Dispatch,
  HTMLAttributes,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import InputWithLabel from "@/shared/InputWithLabel/InputWithLabel";
import styles from "./Locations.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  step: number;
  nextStep: Dispatch<void>;
  setFormData: Dispatch<SetStateAction<cashToCashFormData>>;
}

const Locations = ({ step, nextStep, setFormData, className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const onClickContinentPay = (continent: string) => {
    nextStep();
    setFormData((prev) => ({ ...prev, continentPay: continent }));
  };

  const onClickCountryPay = (country: string) => {
    nextStep();
    setFormData((prev) => ({ ...prev, countryPay: country }));
  };

  const onClickCityPay = (city: string) => {
    nextStep();
    setFormData((prev) => ({ ...prev, cityPay: city }));
  };

  const onClickContinentGet = (continent: string) => {
    nextStep();
    setFormData((prev) => ({ ...prev, continentGet: continent }));
  };

  const onClickCountryGet = (country: string) => {
    nextStep();
    setFormData((prev) => ({ ...prev, countryGet: country }));
  };

  const onClickCityGet = (city: string) => {
    nextStep();
    setFormData((prev) => ({ ...prev, cityGet: city }));
  };

  const labels = [
    "География отдачи кэша",
    "Выберите страну отдачи кэша",
    "Выберите город отдачи кэша",
    "География получения кэша",
    "Выберите страну получения кэша",
    "Выберите город получения кэша",
  ];

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <InputWithLabel label={labels[step - 1]} placeholder={"Поиск..."}>
        <div className={`${styles.icon}`}>
          <Image src="/scale.png" fill alt="Search" />
        </div>
      </InputWithLabel>

      <div ref={containerRef} className={`${styles.container} ${styles.a}`}>
        <LocationsList
          step={step}
          locations={Array(6).fill("Евразия")}
          locationOnClick={onClickContinentPay}
          className={`${styles.continents}`}
        />

        <LocationsList
          step={step}
          locations={Array(50).fill("Евразия")}
          locationOnClick={onClickCountryPay}
          containerRef={containerRef}
          className={`${styles.absoluteList} ${
            step === 2
              ? styles.absoluteListShown
              : step > 2
              ? styles.absoluteListPrev
              : styles.absoluteListHidden
          }`}
        />

        <LocationsList
          step={step}
          locations={Array(50).fill("Евразия")}
          locationOnClick={onClickCityPay}
          containerRef={containerRef}
          className={`${styles.absoluteList} ${
            step === 3
              ? styles.absoluteListShown
              : step > 3
              ? styles.absoluteListPrev
              : styles.absoluteListHidden
          }`}
        />

        <LocationsList
          step={step}
          locations={Array(5).fill("Евразия")}
          locationOnClick={onClickContinentGet}
          containerRef={containerRef}
          className={`${styles.absoluteList} ${
            step === 4
              ? styles.absoluteListShown
              : step > 4
              ? styles.absoluteListPrev
              : styles.absoluteListHidden
          }`}
        />

        <LocationsList
          step={step}
          locations={Array(50).fill("Евразия")}
          locationOnClick={onClickCountryGet}
          containerRef={containerRef}
          className={`${styles.absoluteList} ${
            step === 5
              ? styles.absoluteListShown
              : step > 5
              ? styles.absoluteListPrev
              : styles.absoluteListHidden
          }`}
        />

        <LocationsList
          step={step}
          locations={Array(10).fill("Евразия")}
          locationOnClick={onClickCityGet}
          containerRef={containerRef}
          className={`${styles.absoluteList} ${
            step === 6
              ? styles.absoluteListShown
              : step > 6
              ? styles.absoluteListPrev
              : styles.absoluteListHidden
          }`}
        />
      </div>

      <div
        className={`${styles.contactWithManager} ${
          step === 3 || step === 6
            ? styles.contactWithManagerShown
            : styles.contactWithManagerHidden
        }`}
      >
        <p>Не нашли нужный город?</p>
        <Button>Свяжитесь с менеджером</Button>
      </div>
    </div>
  );
};

interface ILocationsListProps extends HTMLAttributes<HTMLDivElement> {
  step: number;
  locations: string[];
  locationOnClick: (inx: string) => void;
  containerRef?: RefObject<HTMLDivElement | null>;
}

function LocationsList({
  step,
  locations,
  locationOnClick,
  className,
  containerRef,
}: ILocationsListProps) {
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef?.current) {
      const setHeight = () => {
        if (containerRef?.current) {
          if (containerRef.current.firstChild) {
            const style = window.getComputedStyle(
              containerRef.current.firstChild as Element
            );

            setContainerHeight(
              (containerRef.current.clientHeight -
                parseFloat(style.marginTop)) *
                (step === 3 || step === 6 ? 0.9 : 1)
            );

            console.log(
              parseFloat(style.marginTop),
              containerRef.current.clientHeight,
              step,
              containerRef.current.style
            );
          }
        }
      };

      setHeight();
      window.addEventListener("resize", setHeight);

      return () => {
        window.removeEventListener("resize", setHeight);
      };
    }
  }, [step]);

  return (
    <div
      className={`${styles.locations} ${className}`}
      style={{ maxHeight: containerRef ? `${containerHeight}px` : "" }}
    >
      {locations.map((_, inx) => (
        <button
          key={inx}
          className={`${styles.location}`}
          onClick={() => locationOnClick("Северная Америка")}
        >
          Северная Америка
        </button>
      ))}
    </div>
  );
}

export default Locations;
