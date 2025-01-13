"use client";

import Cash2CashExchangeForm from "@/widgets/Cash2CashExchangeForm";
import Locations from "@/widgets/Locations";
import Steps from "@/shared/Steps/Steps";
import SuccessfulRequest from "@/widgets/SuccessfullRequest";
import { useState } from "react";

const clearFormData: cashToCashFormData = {
  continent: "",
  country: "",
  city: "",
  payCurrency: "RUB",
  payAmount: 0,
  getCurrency: "USD",
  getAmount: 0,
};

const steps = 8;

export default function Cash2CashPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<cashToCashFormData>(clearFormData);

  const nextStep = () => {
    setStep((prev) => {
      if (prev + 1 <= steps + 1) {
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
      <main className="min-h-[100dvh] flex flex-col relative overflow-clip">
        {step < steps + 1 && (
          <Steps title="Cash2Cash" steps={steps - 1} currentStep={step} />
        )}
        <div className="container relative flex-1 flex flex-col overflow-clip">
          <Locations
            step={step}
            nextStep={nextStep}
            setFormData={setFormData}
          />
          <Cash2CashExchangeForm
            step={step}
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        </div>

        <SuccessfulRequest
          code="12345"
          amount={10000}
          currency="RUB"
          manager="me"
          show={step === steps}
          className="container"
        />
      </main>
    </>
  );
}
