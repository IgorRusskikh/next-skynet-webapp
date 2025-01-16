"use client";

import GetConsultationForm from "@/widgets/GetConsultationForm";
import Steps from "@/shared/Steps/Steps";
import SuccessfulRequest from "@/widgets/SuccessfullRequest";
import { useState } from "react";

export default function GetConsultationPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <main className="min-h-[100dvh] relative flex flex-col overflow-clip">
      <Steps title="Получить консультацию" currentStep={1} showSteps={false} />
      <section
        id="get-consultation"
        className="flex flex-col relative overflow-clip h-full flex-1 container"
      >
        <GetConsultationForm nextStep={nextStep} />
      </section>

      <SuccessfulRequest
        code={"123456"}
        amount={19999}
        currency={""}
        manager={""}
        show={currentStep === 2}
      />
    </main>
  );
}
