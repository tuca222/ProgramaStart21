import React from "react";
import "@fontsource/italianno";
import "@fontsource/inria-sans"

const WeekSection = () => {
  return (
    <div className="font-inria text-xl md:flex md:flex-row md:justify-center md:items-center">
      <div>
        <div className="bg-yellow-default text-purple-dark rounded-full w-[360px] h-[360px] p-10 mx-auto m-6">
          <p className="mt-6 mb-4">Prepare-se para o Carnaval com um programa único e estruturado que combina nutrição, exercícios e organização.</p>
          <p className="mt-5 mb-4">Você tera o suporte necessário para alcançar resultados sustentáveis!</p>
        </div>
      </div>

      <div className="md:flex md:flex-col md:justify-center md:items-center">
        <div className="flex justify-center items-center m-2 mb-9">
          <div className="text-yellow-default bg-purple-default rounded-full w-[150px] h-[150px] px-3 py-7 mx-auto">
            <p className="font-italianno text-6xl">Semana 1</p>
          </div>
          <p className="md:w-96">
            Foco Total! Melhorar seu metabolismo otimizando a queima de gordura.
          </p>
        </div>

        <div className="flex justify-center items-center m-2 mb-9">
          <p className="md:w-96">
            Sem Perder o Ritmo! Organização e planejamento, controle diário e dicas de treino. 💪💪💪
          </p>
          <div className="text-yellow-default bg-purple-default rounded-full w-[150px] h-[150px] px-3 py-7 mx-auto">
            <p className="font-italianno text-6xl">Semana 2</p>
          </div>
        </div>

        <div className="flex justify-center items-center m-2 mb-9">
          <div className="text-yellow-default bg-purple-default rounded-full w-[150px] h-[150px] px-3 py-7 mx-auto">
            <p className="font-italianno text-6xl">Semana 3</p>
          </div>
          <p className="md:w-96">
            Rumo à Consistência! Adote uma rotina leve e sustentável com um cardápio prático e sem muitas restrições.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeekSection;