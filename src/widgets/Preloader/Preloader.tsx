"use client";

import { Dispatch, HTMLAttributes, SetStateAction, useEffect } from "react";

import Image from "next/image";
import styles from "./Preloader.module.css";
import { useState } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isLoaded: boolean;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
  timeout: number;
  setPreloaderTimeout: Dispatch<SetStateAction<number>>;
}

export default function Preloader({
  isLoaded,
  setIsLoaded,
  timeout,
  setPreloaderTimeout,
  ...props
}: Props) {
  return (
    <div
      className={`${styles.preloader} ${
        isLoaded ? styles.preloaderLoaded : ""
      }`}
      {...props}
    >
      <div className={`${styles.logo}`}>
        <Image src={"/logo.png"} fill alt="Skynet" priority />
      </div>
    </div>
  );
}
