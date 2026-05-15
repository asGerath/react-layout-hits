import "../../../styles/components/checkbox-field.css";

type CheckboxFieldProps = {
  label: string;
};

export function CheckboxField({ label }: CheckboxFieldProps) {
  return (
    <label className="checkbox-field">
      <input className="checkbox-field__input" type="checkbox" />
      <span className="checkbox-field__label">{label}</span>
    </label>
  );
}