"use client";

import BuySellForm from "@/widgets/BuySellForm";
import Offices from "@/widgets/Offices";
import Steps from "@/shared/Steps/Steps";
import SuccessfullRequest from "@/widgets/SuccessfullRequest";
import { usdtFormData } from "@/types/usdtFormData";
import { useState } from "react";

const steps = 3;

export default function PurchasePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<usdtFormData>({
    address: "",
    currency: "RUB",
    amount: "",
  });

  const nextStep = () => {
    setStep((prev) => {
      if (prev + 1 <= steps) {
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
      <main className="min-h-[100dvh] flex flex-col relative">
        <Steps title="Покупка USDT" steps={steps - 1} currentStep={step} />
        <div className="container flex flex-col flex-1 relative overflow-hidden">
          <Offices
            step={step}
            showPoint={1}
            nextStep={nextStep}
            setFormData={setFormData}
          />
          <BuySellForm
            formData={formData}
            setFormData={setFormData}
            step={step}
            nextStep={nextStep}
          />
        </div>

        <SuccessfullRequest
          operation="purchase"
          verification
          code="123456"
          amount={10000}
          currency="USDT"
          manager="manager"
          show={step === steps}
          className="container"
        />
      </main>
    </>
  );
}
