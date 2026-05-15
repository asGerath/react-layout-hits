import { useState } from "react";
import { PlanCard } from "../../ui/PlanCard/PlanCard";

const planDescription =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";

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

export function AssignedPlanStep() {
  const [selectedPlan, setSelectedPlan] = useState("plan-1");

  return (
    <div>
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
  );
}