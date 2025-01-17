"use client";

import {
  backButton,
  offBackButtonClick,
  onBackButtonClick,
} from "@telegram-apps/sdk";
import { useCallback, useEffect } from "react";

import { useRouter } from "next/navigation";

interface UseBackButtonProps {
  step: number;
  setStep: (value: React.SetStateAction<number>) => void;
}

export const useBackButton = ({ step, setStep }: UseBackButtonProps) => {
  const router = useRouter();

  const goToHomePage = useCallback(() => {
    router.push("/");
  }, [router]);

  const prevStep = useCallback(() => {
    setStep((prev) => Math.max(prev - 1, 1));
  }, [setStep]);

  const backButtonListener = useCallback(() => {
    console.log("Back button pressed. Current step:", step);
    if (step > 1) {
      prevStep();
    } else {
      goToHomePage();
    }
  }, [step, prevStep, goToHomePage]);

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
