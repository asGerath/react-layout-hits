import "../../../styles/components/form-field.css";

type FormFieldProps = {
  label: string;
  value: string;
  type?: "text" | "email" | "date";
};

export function FormField({ label, value, type = "text" }: FormFieldProps) {
  return (
    <label className="form-field">
      <span className="form-field__label">{label}</span>

      <input className="form-field__input" type={type} defaultValue={value} />
    </label>
  );
}