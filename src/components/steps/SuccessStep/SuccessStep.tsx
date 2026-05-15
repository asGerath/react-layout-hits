import { Button } from "../../ui/Button/Button";
import "../../../styles/components/success-step.css";
import circleCheckIcon from "../../../assets/icons/check-circle.svg";


type SuccessStepProps = {
    onRestart: () => void;
};

export function SuccessStep({ onRestart }: SuccessStepProps) {
    return (
        <section className="success-step">

            <header className="success-step__header">
                <figure>
                    <img src={circleCheckIcon} alt="Check icon" />
                </figure>
                <h1 className="success-step__title fz-32">
                    Has finalizado tu proceso exitosamente
                </h1>
            </header>



            <div className="success-step__content">

                <div className="success-step__content-header">

                    <h2 className="success-step__subtitle fz-24">
                        Bienvenido a tu nuevo Servicio de Claro
                    </h2>

                    <p className="success-step__description fz-20">
                        Enviaremos a tu correo electrónico una copia del contrato que acabas de
                        diligenciar y los pasos a seguir para la activación de tu plan.
                    </p>
                </div>

                
                <Button onClick={onRestart}>Volver a Inicio</Button>
            </div>



        </section>
    );
}