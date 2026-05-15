import { FormField } from "../../ui/FormField/FormField";
import "../../../styles/components/personal-data-step.css";

const personalFields = [
  {
    label: "Nombre",
    value: "Lorem Ipsum is simply",
  },
  {
    label: "Tipo de Documento",
    value: "Lorem Ipsum is simply",
  },
  {
    label: "Correo Electrónico Corporativo",
    value: "Lorem Ipsum is simply",
    type: "email" as const,
  },
  {
    label: "Número de Celular",
    value: "Lorem Ipsum is simply",
  },
  {
    label: "Número de Documento",
    value: "Lorem Ipsum is simply",
  },
  {
    label: "Fecha de Nacimiento",
    value: "00 / 00 / 0000",
    type: "date" as const,
  },
];

const addressFields = [
  {
    label: "Dirección de Residencia",
    value: "Lorem Ipsum is simply",
  },
  {
    label: "Departamento",
    value: "Lorem Ipsum is simply",
  },
  {
    label: "Ciudad / Municipio",
    value: "Lorem Ipsum is simply",
  },
  {
    label: "Barrio",
    value: "Lorem Ipsum is simply",
  },
];

export function PersonalDataStep() {
  return (
    <form className="personal-data-step">
      {personalFields.map((field) => (
        <FormField
          key={field.label}
          label={field.label}
          value={field.value}
          type={field.type}
        />
      ))}

      <h3 className="personal-data-step__section-title">Domicilio</h3>

      {addressFields.map((field) => (
        <FormField key={field.label} label={field.label} value={field.value} />
      ))}
    </form>
  );
}