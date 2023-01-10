import { AiFillCheckCircle } from "react-icons/ai";

interface PriceCardProps {
  title: string;
  feature: string;
  highlight: boolean;
}
const PriceCard = ({ title, feature, highlight }: PriceCardProps) => {
  return (
    <li className="p-6 shadow-md  mx-3 rounded-lg flex flex-col items-center w-96 my-10 relative overflow-hidden bg-accentContrast">
      <p className="absolute bg-accent/40 -left-10 -rotate-[30deg] w-52 text-center h-8 text-black/70">
        Pista incluida
      </p>
      <h3
        className={`font-bold text-xl ${
          highlight ? "text-accent" : "text-accent/70"
        }`}
      >
        {title}
      </h3>
      <strong className="inline text-3xl">$30</strong>{" "}
      <span className="inline">Al mes</span>
      <div className="h-[1px] my-4 bg-black w-[calc(100%+50px)] opacity-20"></div>
      <ul>
        <li className="flex items-center my-5">
          <AiFillCheckCircle className="text-accent mr-2" />
          <p>Grupos pequenos</p>
        </li>
        <li className="flex items-center my-5">
          <AiFillCheckCircle className="text-accent mr-2" />
          <p>1 hora de clases a la semana</p>
        </li>
        <li className="flex items-center my-5">
          <AiFillCheckCircle className="text-accent mr-2" />
          <p>Horario flexible</p>
        </li>
        <li className="flex items-center my-5">
          <AiFillCheckCircle className="text-accent mr-2" />
          <p>Guia y soporte personalizado</p>
        </li>
        <li className="flex items-center my-5">
          <AiFillCheckCircle className="text-accent mr-2" />
          <p>Primera clase de prueba</p>
        </li>
        <li className="flex items-center my-5">
          <AiFillCheckCircle className="text-accent mr-2" />
          <p>{feature}</p>
        </li>
      </ul>
      <button
        className={`w-full ${
          highlight
            ? "bg-accent text-accentContrast"
            : "bg-accentContrast border border-accent text-black"
        } rounded h-10 mt-5`}
      >
        Me apunto
      </button>
    </li>
  );
};

export default PriceCard;
