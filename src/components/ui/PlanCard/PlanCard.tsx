import "../../../styles/components/plan-card.css";

type PlanCardProps = {
  id: string;
  title: string;
  description: string;
  name: string;
  checked: boolean;
  onChange: (id: string) => void;
};

export function PlanCard({
  id,
  title,
  description,
  name,
  checked,
  onChange,
}: PlanCardProps) {
  return (
    <label className={`plan-card ${checked ? "plan-card--selected" : ""}`}>
      <input
        className="plan-card__radio"
        type="radio"
        name={name}
        checked={checked}
        onChange={() => onChange(id)}
      />

      <div className="plan-card__content">
        <h3 className="plan-card__title fz-20">{title}</h3>
        <span className="plan-card__label fz-16">Incluye:</span>
        <p className="plan-card__description fz-16">{description}</p>
      </div>
    </label>
  );
}