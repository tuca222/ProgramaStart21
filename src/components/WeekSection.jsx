import React from "react";
import "@fontsource/italianno";
import "@fontsource/inria-sans"

const WeekSection = () => {
  return (
    <div className="font-inria text-xl">
      <div className="bg-yellow-default text-purple-dark rounded-full w-[360px] h-[360px] p-10 mx-auto m-6">
        <p className="mt-6 mb-4">Prepare-se para o Carnaval com um programa únido e estruturado que combina nutrição, exercícios e organização.</p>
        <p className="mt-5 mb-4">Você tera o suporte necessário para alcançar resuntatos sustentáveis!</p>
      </div>

      <div className="flex justify-center items-center m-2 mb-9">
        <div className="text-yellow-default bg-purple-default rounded-full w-[150px] h-[150px] px-3 py-7 mx-auto">
          <p className="font-italianno text-6xl">Semana 1</p>
        </div>
        <p>
          Foco Total! Sem refeição livre, sem álcool e exercícios diários.
        </p>
      </div>

      <div className="flex justify-center items-center m-2 mb-9">
        <p>
          Sem Perder o Ritmo! Adição de refeição livre e de álcool. Sem esquecer dos exercício 💪💪💪
        </p>
        <div className="text-yellow-default bg-purple-default rounded-full w-[150px] h-[150px] px-3 py-7 mx-auto">
          <p className="font-italianno text-6xl">Semana 2</p>
        </div>
      </div>

      <div className="flex justify-center items-center m-2 mb-9">
        <div className="text-yellow-default bg-purple-default rounded-full w-[150px] h-[150px] px-3 py-7 mx-auto">
          <p className="font-italianno text-6xl">Semana 3</p>
        </div>
        <p>
          Rumo à Consistência! Adote uma rotina leve e sustentável com um cardápio prático e sem muitas restrições.
        </p>
      </div>


    </div>
  );
};

export default WeekSection;