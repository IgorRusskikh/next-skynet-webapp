import Instruction from "@/widgets/Instruction";
import Steps from "@/shared/Steps/Steps";

export default function InstructionPage() {
  return (
    <main>
      <Steps title="Инструкция" currentStep={1} showSteps={false} />
      <section
        id="instruction"
        className="min-h-[100dvh] relative flex flex-col overflow-clip"
      >
        <Instruction />
      </section>
    </main>
  );
}
