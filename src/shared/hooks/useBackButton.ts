import {
  backButton,
  offBackButtonClick,
  onBackButtonClick,
} from "@telegram-apps/sdk";
import { useCallback, useEffect, useRef } from "react";

import { usePreloader } from "../contexts/PreloaderContext";
import { useRouter } from "next/navigation";

interface UseBackButtonProps {
  step: number;
  setStep: (value: React.SetStateAction<number>) => void;
}

export const useBackButton = ({ step, setStep }: UseBackButtonProps) => {
  const stepRef = useRef(step);
  const router = useRouter();

  const { setIsLoaded } = usePreloader();

  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  const goToHomePage = useCallback(() => {
    router.push("/");
  }, [router]);

  const prevStep = useCallback(() => {
    setStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const backButtonListener = useCallback(() => {
    if (backButton.onClick.isAvailable()) {
      console.log("Current step:", stepRef.current);
      if (stepRef.current <= 1) {
        setIsLoaded(false);
        goToHomePage();
      } else {
        prevStep();
      }
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
