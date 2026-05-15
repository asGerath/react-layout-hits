import "../../../styles/components/option-card.css";

type OptionCardProps = {
    id: string;
    title: string;
    description: string;
    name: string;
    checked: boolean;
    onChange: (id: string) => void;
    img?: string;
};

export function OptionCard({
    id,
    title,
    description,
    name,
    checked,
    onChange,
    img,
}: OptionCardProps) {
    return (
        <label className={`option-card ${checked ? "option-card--selected" : ""}`}>
            <input
                className="option-card__radio"
                type="radio"
                name={name}
                checked={checked}
                onChange={() => onChange(id)}
            />

            <div className="option-card__content">
                <div>

                    <h3 className="option-card__title fz-20">{title}</h3>
                    <p className="option-card__description fz-16">{description}</p>
                </div>
                <figure className="option-card__image-container">
                    {img && <img src={img} alt={title} className="option-card__image" />}
                </figure>
            </div>
        </label>
    );
}