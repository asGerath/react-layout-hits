import { FlowHeader } from "../../components/layout/FlowHeader/FlowHeader";
import { StepLayout } from "../../components/layout/StepLayout/StepLayout";

export function HiringFlow() {
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
        <p>Contenido del paso 1</p>
      </StepLayout>
    </main>
  );
}