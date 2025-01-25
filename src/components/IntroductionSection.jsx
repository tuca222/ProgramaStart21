import React from "react";
import "@fontsource/itim";
import "@fontsource/inria-sans"
import FotoIntro from "../assets/images/FotoIntro.png";

const IntroductionSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={FotoIntro}
        alt="Foto da Nutricionista Gerusa Lorenzetti fazendo exercício"
        className="mx-auto object-cover w-80"
      >
      </img>

      <div className="font-inria m-5">
        <h1 className="mt-4 mb-6 text-3xl">
          Emagreça em 21 dias para o Carnaval!!!
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

      <div className="flex justify-center items-center bg-purple-light text-6xl mx-auto w-[300px] h-[500px] rounded-lg mb-6">
        VÍDEO
      </div>

      <a
        href="#registrationSection"
        className="bg-purple-default text-white hover:bg-purple-dark transition duration-300 w-[300px] rounded-lg font-itim text-xl m-4 py-4 px-6 ">
        Quero Participar Agora!
      </a>

    </div>
  );
};

export default IntroductionSection;