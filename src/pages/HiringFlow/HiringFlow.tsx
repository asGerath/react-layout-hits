import { useState } from "react";
import { FlowHeader } from "../../components/layout/FlowHeader/FlowHeader";
import { StepLayout } from "../../components/layout/StepLayout/StepLayout";
import { Button } from "../../components/ui/Button/Button";
import { AssignedPlanStep } from "../../components/steps/AssignedPlanStep/AssignedPlanStep";
import { PersonalDataStep } from "../../components/steps/PersonalDataStep/PersonalDataStep";
import "../../styles/pages/hiring-flow.css";
import shoppingBagIcon from "../../assets/icons/shopping-bag.svg";
import archiveIcon from "../../assets/icons/archive.svg";
import checkIcon from "../../assets/icons/check-square.svg";
import fileIcon from "../../assets/icons/file-text.svg";
import { LineTypeStep } from "../../components/steps/LineTypeStep/LineTypeStep";
import { PortabilityStep } from "../../components/steps/PortabilityStep/PortabilityStep";
import { TermsStep } from "../../components/steps/TermsStep/TermsStep";



const steps = [
  {
    img: shoppingBagIcon,
    step: 1,
    title: "Plan Asignado",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    component: <AssignedPlanStep />,
  },
  {
    img: archiveIcon,
    step: 2,
    title: "Datos Personales",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    component: <PersonalDataStep />,
  },
  {
    img: checkIcon,
    step: 3,
    title: "¡Activa a tu familia con Bolívar y Claro!",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    component: <LineTypeStep />,
  },
  {
    img: checkIcon,
    step: 4,
    title: "Portabilidad Claro",
    description:
      "Recuerda: si eres usuario de otro operador y deseas portar tu número, la línea debe ser a tu nombre, estar al día en tus pagos y no puede estar suspendida",
    component: <PortabilityStep />,
  },
  {
    img: fileIcon,
    step: 5,
    title: "Aceptación de Términos",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    component: <TermsStep />,
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
        img={currentStepData.img}
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

        {/* <Button onClick={handleNextStep}>Siguiente</Button>
         */}
         <Button onClick={handleNextStep}>
  {currentStep === steps.length ? "Finalizar" : "Siguiente"}
</Button>
      </div>
    </main>
  );
}