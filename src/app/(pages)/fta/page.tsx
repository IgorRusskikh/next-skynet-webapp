"use client";

import FtaForm from "@/widgets/FtaForm/FtaForm";
import FtaUserType from "@/widgets/FtaUserType/FtaUserType";
import Steps from "@/shared/Steps/Steps";
import SuccessfulRequest from "@/widgets/SuccessfullRequest";
import { useState } from "react";

const steps = 3;

const clearedFormData: ftaFormData = {
  exporter: false,
  importer: false,
  invoiceCity: "",
  paymentPurpose: "",
  payCurrency: "RUB",
  payAmount: "",
};

export default function FTAPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ftaFormData>(clearedFormData);

  return (
    <main className="min-h-[100dvh] flex flex-col relative overflow-hidden">
      {step < steps + 1 && (
        <Steps title="Платежи для ВЭД" steps={steps - 1} currentStep={step} />
      )}
      <div className="container relative flex-1 flex flex-col overflow-clip">
        <FtaUserType
          formData={formData}
          setFormData={setFormData}
          nextStep={() => setStep(step + 1)}
        />
        <FtaForm
          formData={formData}
          setFormData={setFormData}
          step={step}
          nextStep={() => setStep(step + 1)}
        />
      </div>

      <SuccessfulRequest
        code={"123456"}
        amount={19999}
        currency={""}
        manager={""}
        show={step === steps}
      />
    </main>
  );
}
