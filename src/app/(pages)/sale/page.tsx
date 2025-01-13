"use client";

import BuySellForm from "@/widgets/BuySellForm";
import Offices from "@/widgets/Offices";
import Steps from "@/shared/Steps/Steps";
import SuccessfullRequest from "@/widgets/SuccessfullRequest";
import { formData } from "@/types/usdtFormData";
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
        {step < 3 && (
          <Steps title="Продажа USDT" steps={2} currentStep={step} />
        )}
        <div className="container flex flex-col flex-1">
          {step === 1 && (
            <Offices nextStep={nextStep} setFormData={setFormData} />
          )}
          {step === 2 && (
            <BuySellForm
              verification
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          )}
          {step === 3 && (
            <SuccessfullRequest
              operation="sale"
              verification
              code="123456"
              amount={10000}
              currency="USDT"
              manager="manager"
            />
          )}
        </div>
      </main>
    </>
  );
}
