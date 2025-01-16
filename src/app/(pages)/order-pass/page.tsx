"use client";

import EmptyRequests from "@/widgets/EmptyRequests";
import Offices from "@/widgets/Offices";
import OrderDetail from "@/widgets/OrderDetail";
import OrderPassForm from "@/widgets/OrderPassForm";
import Orders from "@/widgets/Orders";
import Steps from "@/shared/Steps/Steps";
import SuccessfulRequest from "@/widgets/SuccessfullRequest";
import { useState } from "react";
const steps = 4;

const cleanedFormData = {
  address: "",
  fullName: "",
  phone: "",
  birthDate: new Date("01.01.2000"),
};

export default function OrderPassPage() {
  const [passes, setPasses] = useState<string[]>([]);
  const [formData, setFormData] = useState<orderPassFormData>(cleanedFormData);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const renderEmptyState = () => (
    <>
      <EmptyRequests
        label="У вас пока нет заявок по пропускам"
        nextStep={nextStep}
        orderPass
      />
      <Offices
        step={step}
        nextStep={nextStep}
        setFormData={setFormData}
        showPoint={2}
      />
      <OrderPassForm
        formData={formData}
        setFormData={setFormData}
        step={step}
        nextStep={nextStep}
      />
    </>
  );

  const renderExistingPasses = () => (
    <>
      <Orders />
      {/* <OrderDetail formData={formData} setFormData={setFormData} /> */}
    </>
  );

  return (
    <>
      <section className="min-h-[100dvh] relative flex flex-col overflow-clip">
        <Steps
          title="Заказ пропуска"
          steps={steps - 2}
          currentStep={step - 1}
          showSteps={passes.length === 0 && step > 1}
        />
        <main className="flex flex-col relative overflow-clip h-full flex-1 container">
          {passes.length > 0 ? renderExistingPasses() : renderEmptyState()}
        </main>

        {passes.length === 0 && (
          <SuccessfulRequest
            show={step === 4}
            code="123456"
            amount={1000}
            currency="RUB"
            manager="John Doe"
          />
        )}
      </section>
    </>
  );
}
