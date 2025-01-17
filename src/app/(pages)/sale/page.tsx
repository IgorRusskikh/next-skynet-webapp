"use client";

import { useCallback, useEffect, useState } from "react";

import BuySellForm from "@/widgets/BuySellForm";
import Offices from "@/widgets/Offices";
import Steps from "@/shared/Steps/Steps";
import SuccessfullRequest from "@/widgets/SuccessfullRequest";
import WebApp from "@twa-dev/sdk";
import { usdtFormData } from "@/types/usdtFormData";
import { useBackButton } from "@/shared/hooks/useBackButton";

export default function SalePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<usdtFormData>({
    address: "",
    currency: "RUB",
    amount: "",
  });

  // useBackButton({ step, setStep });

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram) {
      WebApp.ready();
    }
  }, []);

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
