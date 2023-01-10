interface FeatureCardProps {
  iconComponent: React.ReactNode;
  textDescription: string;
}
const FeatureCard = ({ iconComponent, textDescription }: FeatureCardProps) => {
  return (
    <li className="bg-accent w-full lg:w-96 h-72 p-7 rounded-md flex flex-col justify-between items-end mb-4 lg:mr-4">
      {iconComponent}
      <p className="text-accentContrast text-end w-10/12">{textDescription}</p>
    </li>
  );
};

export default FeatureCard;
