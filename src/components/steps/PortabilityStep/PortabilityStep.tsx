import { FormField } from "../../ui/FormField/FormField";
import "../../../styles/components/portability-step.css";

export function PortabilityStep() {
  return (
    <form className="portability-step">
      <div className="portability-step__fields">
        <FormField
          label="Operador actual"
          value="Seleccionar"
          as="select"
          required
        />

        <FormField
          label="Ingresa tu número de celular actual:"
          value="44 5678 1234"
          type="tel"
          required
        />

        <FormField
          label="Entidad a la que perteneces"
          value="Seleccionar"
          as="select"
          required
        />
      </div>

      <p className="portability-step__note fz-16">
        * Enviaremos al domicilio que registraste la nueva Sim Card
      </p>
    </form>
  );
}