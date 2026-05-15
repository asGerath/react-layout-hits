import { useState } from "react";
import { FlowHeader } from "../../components/layout/FlowHeader/FlowHeader";
import { StepLayout } from "../../components/layout/StepLayout/StepLayout";
import { PlanCard } from "../../components/ui/PlanCard/PlanCard";

const planDescription =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";

const plans = [
  {
    id: "plan-1",
    title: "28506 - Plan Conect Star EMP 35GB FIN",
    description: planDescription,
  },
  {
    id: "plan-2",
    title: "28506 - Plan Conect Star EMP 35GB FIN",
    description: planDescription,
  },
  {
    id: "plan-3",
    title: "28506 - Plan Conect Star EMP 35GB FIN",
    description: planDescription,
  },
];

export function HiringFlow() {
  const [selectedPlan, setSelectedPlan] = useState("plan-1");

  return (
    <main>
      <FlowHeader
        title="Tecnología para tu Empresa"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      />

      <StepLayout
        step={1}
        title="Plan Asignado"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC."
      >
        <div className="plans-list">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              id={plan.id}
              title={plan.title}
              description={plan.description}
              name="assigned-plan"
              checked={selectedPlan === plan.id}
              onChange={setSelectedPlan}
            />
          ))}
        </div>
      </StepLayout>
    </main>
  );
}