import "../../../styles/components/button.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}