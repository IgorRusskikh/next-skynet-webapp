import FaqList from "@/widgets/FaqList";
import Header from "@/shared/Header/Header";
import Steps from "@/shared/Steps/Steps";

export default function FaqPage() {
  return (
    <main className="min-h-[100dvh]">
      <Steps title="FAQ" currentStep={0} steps={0} showSteps={false} />
      <section className="container">
        <FaqList />
      </section>
    </main>
  );
}
