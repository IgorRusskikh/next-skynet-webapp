"use client";

import Deals from "@/widgets/Deals";
import DetailDeal from "@/widgets/DetailDeal";
import Steps from "@/shared/Steps/Steps";
import { useState } from "react";

const steps = 4;

const clearedFormData: transactionsFormData = {
  street: "",
  fullName: "",
  phone: "",
  date: null,
};

export default function TransactionsPage() {
  const [step, setStep] = useState(0);
  const [deal, setDeal] = useState<string>("");

  return (
    <section className="relative overflow-hidden flex flex-col min-h-[100dvh]">
      <Steps
        title="Мои сделки"
        steps={steps - 2}
        currentStep={step}
        showSteps={step > 1}
      />
      <main className="flex flex-col relative overflow-hidden h-full flex-1 container">
        {/* <EmptyRequests
          label="У вас пока нет заявок по пропускам"
          nextStep={() => setStep(step + 1)}
          orderPass
        /> */}
        <Deals setDeal={setDeal} />
        <DetailDeal show={!!deal} id={deal.length ? Number(deal) : null} />
      </main>
    </section>
  );
}
