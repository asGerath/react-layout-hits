import { useState } from "react";
import { FlowHeader } from "../../components/layout/FlowHeader/FlowHeader";
import { StepLayout } from "../../components/layout/StepLayout/StepLayout";
import { Button } from "../../components/ui/Button/Button";
import { AssignedPlanStep } from "../../components/steps/AssignedPlanStep/AssignedPlanStep";
import { PersonalDataStep } from "../../components/steps/PersonalDataStep/PersonalDataStep";
import "../../styles/pages/hiring-flow.css";

const steps = [
  {
    step: 1,
    title: "Plan Asignado",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    component: <AssignedPlanStep />,
  },
  {
    step: 2,
    title: "Datos Personales",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    component: <PersonalDataStep />,
  },
];

export function HiringFlow() {
  const [currentStep, setCurrentStep] = useState(1);

  const currentStepData = steps[currentStep - 1];

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length));
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <main className="hiring-flow">
      <FlowHeader
        title="Tecnología para tu Empresa"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      />

      <StepLayout
        step={currentStepData.step}
        title={currentStepData.title}
        description={currentStepData.description}
      >
        {currentStepData.component}
      </StepLayout>

      <div
        className={`hiring-flow__actions ${
          currentStep > 1 ? "hiring-flow__actions--between" : ""
        }`}
      >
        {currentStep > 1 && (
          <Button variant="secondary" onClick={handlePreviousStep}>
            Regresar
          </Button>
        )}

        <Button onClick={handleNextStep}>Siguiente</Button>
      </div>
    </main>
  );
}