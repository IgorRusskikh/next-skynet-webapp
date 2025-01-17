"use client";

import { offBackButtonClick, onBackButtonClick } from "@telegram-apps/sdk";
import { useCallback, useEffect, useRef, useState } from "react";

import BuySellForm from "@/widgets/BuySellForm";
import Offices from "@/widgets/Offices";
import Steps from "@/shared/Steps/Steps";
import SuccessfullRequest from "@/widgets/SuccessfullRequest";
import WebApp from "@twa-dev/sdk";
import { backButton } from "@telegram-apps/sdk";
import { usdtFormData } from "@/types/usdtFormData";
import { useRouter } from "next/navigation";

export default function SalePage() {
  const [step, setStep] = useState(1);
  const stepRef = useRef(1);
  const [formData, setFormData] = useState<usdtFormData>({
    address: "",
    currency: "RUB",
    amount: "",
  });

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram) {
      WebApp.ready();
    }
  }, []);

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

  const nextStep = useCallback(() => {
    setStep((prev) => Math.min(prev + 1, 3));
  }, []);

  return (
    <main className="min-h-[100dvh] flex flex-col">
      <Steps title="Продажа USDT" steps={2} currentStep={step} />
      <div className="container relative flex flex-col flex-1 overflow-hidden">
        <Offices
          step={step}
          showPoint={1}
          nextStep={nextStep}
          setFormData={setFormData}
        />
        <BuySellForm
          verification
          formData={formData}
          setFormData={setFormData}
          step={step}
          nextStep={nextStep}
        />
      </div>

      <SuccessfullRequest
        operation="sale"
        verification
        code="123456"
        amount={10000}
        currency="USDT"
        manager="manager"
        show={step === 3}
      />
    </main>
  );
}
