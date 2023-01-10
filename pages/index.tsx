import Image from "next/image";
import rafaNadal from "../src/assets/rafaNadal.webp";
import { GiTennisBall, GiTennisCourt } from "react-icons/gi";
import { TbFocus2 } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import FeatureCard from "../src/components/featureCard/FeatureCard";
import PriceCard from "../src/components/priceCard/PriceCard";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useState } from "react";
import HeroSection from "../src/components/heroSection/HeroSection";
import ContactSection from "../src/components/contactSection/ContactSection";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  const [model, setModel] = useState();
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("./scene.gltf", async (gltf) => {
      const nodes = await gltf.parser.getDependencies("node");
      setModel(nodes[0]);
    });
  }, []);
  console.log(model);
  return (
    <>
      <Head>
        <title>Clases de tenis</title>
        <meta name="description" content="Aprende a jugar tenis en Xativa" />
      </Head>
      <HeroSection />
      <section className="flex justify-center">
        <div className="flex flex-col lg:w-9/12 w-11/12">
          <div className="my-20 flex flex-row">
            <div className="flex flex-col w-80">
              <h2 className="text-6xl mb-10">
                Hola mi nombre es{" "}
                <strong className="text-highAccent">Jose Apellido</strong>
              </h2>
              <p>
                Soy entrenador de tenis desde hace 20 anos y se puede decir que
                soy un enamorado de este deporte
              </p>
            </div>
            <div className="absolute min-w-[350px] sm:min-w-[400px] h-[500px] lg:opacity-100 opacity-20 -z-10 sm:left-[15rem] lg:left-[30rem] xl:left-[40rem]">
              <Image
                className="absolute  object-contain"
                src={rafaNadal}
                fill={true}
                alt="entrenador de tenis sonriendo"
              />
              <Canvas className="bg-accent">
                <OrbitControls />
                {model && (
                  <group>
                    <primitive object={model} />
                  </group>
                )}
              </Canvas>
            </div>
          </div>
          <ul className="flex flex-wrap w-full justify-center">
            <FeatureCard
              iconComponent={
                <GiTennisBall className="text-7xl self-start text-accentContrast" />
              }
              textDescription={
                "Ademas de mejorar tus habilidades de tenus nuestras clases ofrencen una divertida y social de mantenerce activos y saludables"
              }
            />

            <FeatureCard
              iconComponent={
                <GiTennisCourt className="text-7xl self-start text-accentContrast" />
              }
              textDescription={`
                Mes gusta tomarme tiempo para concoer a mis alumnos y trabajar
                con ellos en sus debilidad y fortalezas
            `}
            />

            <FeatureCard
              iconComponent={
                <BsFillPersonFill className="text-7xl self-start text-accentContrast" />
              }
              textDescription={`
                Mis clases ofrecen mentorizacion experta y personalizada para
                ayudarte a alcanzar tus objetivos
            `}
            />
            <FeatureCard
              iconComponent={
                <TbFocus2 className="text-7xl self-start text-accentContrast" />
              }
              textDescription={`
                Guia y soporte enfocandonos en la tecnica, estrategia y la
                fortaleza mental de cada jugador
            `}
            />
          </ul>
        </div>
      </section>
      <section className="flex justify-center bg-accent/5 min-h-screen items-center">
        <div className="flex flex-col w-9/12 items-center">
          <p className="text-2xl text-center my-10">
            Ya seas un votato buscando aprender lo basico o un jugador
            experimentado buscando mejorar su juego, hay un luegar para ti{" "}
          </p>
          <h2 className="text-4xl">Clases hechas a medida</h2>
          <ul className="flex flex-col sm:flex-row flex-wrap justify-center">
            <PriceCard
              title={"PRINCIPIANTE"}
              feature={"Aprendamos lo basico"}
              highlight={false}
            />
            <PriceCard
              title={"ME DEFIENDO"}
              feature={"Afinar tecnica y estrategias de jueg"}
              highlight={true}
            />
            <PriceCard
              title="ELITE"
              feature="Fortaleza mental"
              highlight={false}
            />
          </ul>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
