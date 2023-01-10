import Image from "next/image";
import Link from "next/link";
import raquet from "../../assets/tennisRaquet.webp";
import tenisCourtImage from "../../assets/tennisCourt2.webp";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex lg:flex-row flex-col relative">
      <Image
        src={raquet}
        alt="tennis raquet"
        fill
        className="absolute md:-translate-x-[30rem] lg:-translate-x-[42rem] 2xl:-translate-x-[54rem] object-contain -z-10 opacity-70 hidden sm:inline"
        priority
      />
      <div className="text-blue  px-10 lg:pl-40 xl:pl-80 lg:w-1/2 flex flex-col justify-center my-10 lg:my-0 relative min-h-screen items-center lg:items-start">
        <h1 className="text-7xl font-bold sm:w-80 lg:w-[30rem] xl:w-80 ">
          Aprende a jugar{" "}
          <strong className="text-accent/90">tenis en Xativa</strong>
        </h1>
        <p className="w-60 my-12 text-black/70">
          Estas a un entrenador de ser el proximo Rafa Nadal
        </p>
        <Link
          href="/somewhere"
          className="border p-2  text-highAccent bg-highAccent/5 text-center w-full lg:w-1/2 rounded-md max-w-[40rem]
"
        >
          Quiero jugar tenis
        </Link>
      </div>
      <div className="lg:w-1/2 h-[30rem] lg:min-h-screen relative flex flex-col">
        <div className="absolute -z-10 lg:h-screen">
          <Image
            src={tenisCourtImage}
            className="object-cover lg:h-screen h-[28rem]"
            alt="campo de tenis les pereres"
            priority
          ></Image>
        </div>
        <div className="flex flex-col absolute top-[25rem] lg:top-auto lg:bottom-10 lg:right-10">
          <p className="z-20 text-accentContrast">
            Carrer cami Dos Molins s/n 46800 Xativa, Valencia
          </p>
          <p className="z-20 font-bold text-lg text-accentContrast">
            Polliesportiu Municipal Les pereres
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
