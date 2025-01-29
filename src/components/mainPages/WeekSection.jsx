import React from "react";
import "@fontsource/italianno";
import "@fontsource/inria-sans"
import FocoTotal from '../../assets/images/FocoTotal.png';
import SemPerderORitmo from '../../assets/images/SemPerderORitmo.png';
import RumoAConsistencia from '../../assets/images/RumoAConsistencia.png';

const WeekSection = () => {
  return (
    <div className="font-inria text-xl flex flex-col items-center justify-center md:gap-5 md:p-10 p-2">         
      <div>
        <div className="bg-yellow-default text-purple-dark bg-opacity-35 rounded-full sm:w-[360px] sm:h-[360px] w-[290px] h-[290px] sm:p-10 p-3 mx-auto">
          <p className="mt-6">Prepare-se para</p>
          <p className="sm:mb-4 mb-2">o Carnaval com um programa único e estruturado que combina nutrição, exercícios e organização.</p>
          <p className="sm:mt-5 sm:mb-4 mt-1">Você tera o suporte necessário para alcançar resultados sustentáveis!</p>
        </div>
      </div>
      <div className="flex xl:flex-row xl:justify-center xl:items-center flex-col justify-center items-center gap-1">

        <div className="lg:flex lg:flex-row lg:justify-center lg:items-start xl:items-center gap-1">
          <div className="flex flex-col justify-center items-center md:m-2 m-5 mb-16 border-2 border-purple-dark rounded-3xl bg-purple-light shadow-right-lg p-5 gap-5 md:mb-0 lg:py-8 xl:py-5">
            <div className="text-purple-default mx-auto">
              <p className="font-italianno text-6xl">Semana 1</p>
              <p className="underline font-bold">Foco Total!</p>
            </div>
            <hr className="border-t-2 border-gray-500 w-3/4 mx-auto mb-6"/>
            <img
                  src={FocoTotal}
                  alt="Imagem Semana 1 - queimando a sua gordura."
                  className="w-28 h-28 rounded-full ml-4 mr-4"
              />
            <p className="md:w-96">
              Nessa primeira semana, você dará o pontapé inicial na transformação do seu corpo e saúde.
            </p>
            <p className="md:w-96">
              O objetivo é acelerar o metabolismo, ativar a queima de gordura e preparar seu organismo para as próximas etapas.
            </p>
            <p className="md:w-96">
              Com cardápios estratégicos, dicas práticas e foco total, você começará a sentir os primeiros resultados enquanto ganha mais energia e disposição!
            </p>
          </div>

          <div className="flex flex-col justify-center items-center md:m-2 m-5 mb-9 border-2 border-purple-dark rounded-3xl bg-purple-light shadow-right-lg p-5 gap-5 ">
            <div className="text-purple-default mx-auto">
              <p className="font-italianno text-6xl">Semana 2</p>
              <p className="underline font-bold">Sem Perder o Ritmo!</p>
            </div>
            <hr className="border-t-2 border-gray-500 w-3/4 mx-auto mb-6"/>
            <img
                  src={SemPerderORitmo}
                  alt="Imagem Semana 2 - planejando sua rotina."
                  className="w-28 h-28 rounded-full ml-4 mr-4"
              />
            <p className="md:w-96">
              Essa semana é dedicada a manter o foco enquanto você aperfeiçoa sua rotina.
            </p>
            <p className="md:w-96">
              Com organização e planejamento, você aprenderá a ter mais controle sobre sua alimentação e hábitos diários.
            </p>
            <p className="md:w-96">
              Além disso, as dicas de treino vão ajudar a intensificar os resultados, garantindo disposição e motivação para continuar firme no programa!
            </p>
            <p  className="md:w-96">
              💪💪💪
            </p>
            
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:m-2 m-5 mb-9 md:mt-1 border-2 border-purple-dark rounded-3xl bg-purple-light shadow-right-lg p-5 gap-5">
            <div className="text-purple-default mx-auto">
                <p className="font-italianno text-6xl">Semana 3</p>
                <p className="underline font-bold">Rumo à Consistência!</p>
            </div>
            <hr className="border-t-2 border-gray-500 w-3/4 mx-auto mb-6"/>
            <img
                src={RumoAConsistencia}
                alt="Imagem Semana 3 - rumo à consistência."
                className="w-28 h-28 rounded-full ml-4 mr-4"
            />
            <p className="md:w-96">
                Na última semana, o foco está em criar hábitos que você pode levar para a vida toda de maneira duradoura.
            </p>
            <p className="md:w-96">
                Com um cardápio prático e equilibrado, sem muitas restrições, você aprenderá a manter uma rotina leve e sustentável.
            </p>
            <p className="md:w-96">
                Essa é a etapa em que consolidamos tudo o que foi trabalhado, garantindo que você continue colhendo os benefícios muito além dos 21 dias!
            </p>
        </div>
      </div>
    </div>
  );
};

export default WeekSection;