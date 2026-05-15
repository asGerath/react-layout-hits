import "../../../styles/layout/flow-header.css";

type FlowHeaderProps = {
  title: string;
  description: string;
};

export function FlowHeader({
  title,
  description,
}: FlowHeaderProps) {
  return (
    <header className="flow-header">
      <h1 className="flow-header__title fz-36">{title}</h1>

      <p className="flow-header__description fz-16">
        {description}
      </p>
    </header>
  );
}