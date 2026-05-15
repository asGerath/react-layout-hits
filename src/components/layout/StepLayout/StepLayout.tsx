import "../../../styles/layout/step-layout.css";

type StepLayoutProps = {
    img: string;
    step: number;
    title: string;
    description: string;
    children: React.ReactNode;
};

export function StepLayout({ img, step, title, description, children }: StepLayoutProps) {
    return (
        <section className="step-layout">
            <aside className="step-layout__sidebar">


                <div className="step-layout__info">
        
                    <div className="step-layout__icon" aria-hidden="true">
                        <img src={img} alt="" />
                    </div>

                    <span className="step-layout__step fz-16">Paso {step}</span>
                    <h2 className="step-layout__title fz-28">{title}</h2>
                    <p className="step-layout__description fz-16">{description}</p>
                </div>

                <div className="step-layout__progress" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <span
                            key={item}
                            className={item <= step ? "is-active" : ""}
                        />
                    ))}
                </div>
            </aside>

            <div className="step-layout__content">{children}</div>
        </section>
    );
}