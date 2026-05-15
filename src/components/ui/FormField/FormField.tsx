import "../../../styles/components/form-field.css";

type FormFieldProps = {
  label: string;
  value: string;
  type?: "text" | "email" | "date" | "tel";
  as?: "input" | "select";
  required?: boolean;
  options?: Array<{ label: string; value: string }>;
};

export function FormField({
  label,
  value,
  type = "text",
  as = "input",
  required = false,
  options = [],
}: FormFieldProps) {
  return (
    <label className="form-field">
      <span className="form-field__label fz-16">
        {required && <span className="form-field__required">*</span>} {label}
      </span>

      {as === "select" ? (
        <select className="form-field__input fz-16" defaultValue="">
          <option value="" disabled>
            {value}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input className="form-field__input fz-16" type={type} defaultValue={value} />
      )}
    </label>
  );
}