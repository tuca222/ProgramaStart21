import React from "react";
import "@fontsource/itim";
import "@fontsource/inria-sans"
import FotoIntro from "../../assets/images/FotoIntro.png";

const IntroductionSection = () => {
  const iframeSrc = "https://youtube.com/embed/z4KZFi0_ZPU";

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center md:gap-10 md:p-5 lg:p-5 p-2">
        <img
          src={FotoIntro}
          alt="Foto da Nutricionista Gerusa Lorenzetti fazendo exercício"
          className="mx-auto object-cover md:w-80 lg:order-3 w-72 lg:w-80"
        />

        <div className="flex flex-col justify-between items-center md:gap-20 font-inria m-5 lg:order-1 md:w-96 gap-5">
          <div className="border-2 border-purple-default rounded-lg shadow-2xl h-60 flex justify-center items-center bg-white bg-opacity-40">
            <h1 className="text-3xl md:text-4xl text-center text-shadow-sm">
              Redescubra sua energia e transforme seu corpo em 21 dias!!!
            </h1>
          </div>

          <p className="mt-4 mb-6 text-2xl font-extrabold p-2 rounded-lg text-shadow">
            Do dia <span className="text-yellow-dark bg-purple-default  rounded-sm px-1">08 a 28 de fevereiro</span> <span> </span>
            alcance seus objetivos com um <span className="text-purple-default bg-yellow-dark rounded-sm px-1">plano personalizado</span> <span> </span>
            e <span className="text-purple-default bg-yellow-dark  rounded-sm px-1">resultados reais</span>!!!
          </p>
        </div>


        <div className="flex justify-center items-center bg-purple-light text-6xl mx-auto w-[350px] h-[600px] rounded-lg mb-6 lg:order-2">
          <iframe
              id="iframe-responsivo"
              title="Start 21 - Vídeo Explicativo"
              src={iframeSrc}
              className="h-full w-full rounded-lg shadow-lg lg:w-96"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
          >
          </iframe>
        </div>
      </div>

      <a
        href="/QueroParticiparAgora"
        className="bg-purple-default text-white hover:bg-purple-dark transition duration-300 w-[300px] rounded-lg font-itim text-xl m-4 py-4 px-6 md:ml-16">
        Quero Participar Agora!
      </a>

    </div>
  );
};

export default IntroductionSection;