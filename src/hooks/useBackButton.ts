"use client";

import {
  backButton,
  offBackButtonClick,
  onBackButtonClick,
} from "@telegram-apps/sdk";
import { useCallback, useEffect, useRef } from "react";

import { useRouter } from "next/navigation";

interface UseBackButtonProps {
  step: number;
  setStep: (value: React.SetStateAction<number>) => void;
}

export const useBackButton = ({ step, setStep }: UseBackButtonProps) => {
  const stepRef = useRef(step);
  const router = useRouter();

  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  const goToHomePage = useCallback(() => {
    router.push("/");
  }, [router]);

  const prevStep = useCallback(() => {
    setStep((prev) => Math.max(prev - 1, 1));
  }, [setStep]);

  const backButtonListener = useCallback(() => {
    console.log("Current step:", stepRef.current);
    if (stepRef.current > 1) {
      prevStep();
    } else {
      goToHomePage();
    }
  }, [goToHomePage, prevStep]);

  useEffect(() => {
    backButton.mount();
    backButton.show();

    if (backButton.isMounted()) {
      const offClick = onBackButtonClick(backButtonListener);

      return () => {
        offBackButtonClick(offClick);
        backButton.unmount();
      };
    }
  }, [backButtonListener]);
};
