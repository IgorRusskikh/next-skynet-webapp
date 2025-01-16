"use client";

import BuySellForm from "@/widgets/BuySellForm";
import Offices from "@/widgets/Offices";
import Steps from "@/shared/Steps/Steps";
import SuccessfullRequest from "@/widgets/SuccessfullRequest";
import { usdtFormData } from "@/types/usdtFormData";
import { useState } from "react";

export default function SalePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<usdtFormData>({
    address: "",
    currency: "RUB",
    amount: "",
  });

  const nextStep = () => {
    setStep((prev) => {
      if (prev + 1 <= 3) {
        return prev + 1;
      }
      return prev;
    });
  };
  const prevStep = () => {
    setStep((prev) => {
      if (prev - 1 >= 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <>
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
    </>
  );
}
