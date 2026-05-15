import { useState } from "react";
import { OptionCard } from "../../ui/OptionCard/OptionCard";
import revers from '../../../assets/img/ceIco-revers.webp'
import empresasImg from '../../../assets/img/Empresas.webp'
import claroLogo from '../../../assets/img/claro.webp'

const lineOptions = [
  {
    id: "new-line",
    title: "Línea Nueva",
    description:
      "Si deseas un nuevo número y recibir una nueva Sim Card, elige esta opción.",
    img: empresasImg
  },
  {
    id: "claro-inclusion",
    title: "Inclusión Claro",
    description:
      "Si eres usuario actual de Claro (Postpago y Prepago) y quieres cambiar tu plan, elige esta opción.",
    img: claroLogo
  },
  {
    id: "portability",
    title: "Portabilidad",
    description:
      "Si eres usuario de otro operador y deseas conservar tu número, elige esta opción.",
    img: revers
  },
];

export function LineTypeStep() {
  const [selectedOption, setSelectedOption] = useState("new-line");

  return (
    <div>
      {lineOptions.map((option) => (
        <OptionCard
          key={option.id}
          id={option.id}
          title={option.title}
          description={option.description}
          name="line-type"
          checked={selectedOption === option.id}
          onChange={setSelectedOption}
          img={option.img}
        />
      ))}
    </div>
  );
}