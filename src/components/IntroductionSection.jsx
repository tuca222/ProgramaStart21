import React from "react";
import "@fontsource/itim";
import "@fontsource/inria-sans"
import FotoIntro from "../assets/images/FotoIntro.png";

const IntroductionSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-20">
        <img
          src={FotoIntro}
          alt="Foto da Nutricionista Gerusa Lorenzetti fazendo exercício"
          className="mx-auto object-cover w-96 md:order-1"
        >
        </img>

        <div className="font-inria m-5 md:order-3 md:w-80">
          <h1 className="mt-4 mb-6 text-3xl md:mb-20 md:text-4xl">
            Redescubra sua energia e transforme seu corpo em 21 dias!!!
          </h1>
          <p className="mt-4 mb-6 text-2xl">
            Do dia
            <span className="font-extrabold">
              <span className="text-yellow-dark"> 08 </span>a<span className="text-yellow-dark"> 28 </span>de<span className="text-yellow-dark"> fevereiro </span>
            </span>
            alcance seus objetivos com um
            <span className="text-purple-default font-extrabold"> plano personalizado </span>e<span className="text-purple-default font-extrabold"> resultados reais</span>.
          </p>
        </div>

        <div className="flex justify-center items-center bg-purple-light text-6xl mx-auto w-[300px] h-[500px] rounded-lg mb-6 md:order-2">
          VÍDEO
        </div>
      </div>

      <a
        href="#registrationSection"
        className="bg-purple-default text-white hover:bg-purple-dark transition duration-300 w-[300px] rounded-lg font-itim text-xl m-4 py-4 px-6 md:ml-11">
        Quero Participar Agora!
      </a>

    </div>
  );
};

export default IntroductionSection;