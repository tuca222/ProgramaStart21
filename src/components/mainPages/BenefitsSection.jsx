import React from "react";
import "@fontsource/itim";
import "@fontsource/inria-sans"
import Cardapio from '../../assets/images/beneficios/Cardapio.png';
import NutriGe from '../../assets/images/beneficios/NutricionistaGerusa.png';
import Exercicios from '../../assets/images/beneficios/Exercicios.png';
import Planejamento from '../../assets/images/beneficios/Planejamento.png';
import WhatsApp from '../../assets/images/beneficios/WhatsApp.png';
import PercaPeso from '../../assets/images/beneficios/PercaPeso.png';

const BenefitsSection = () => {
    return (
      <div className="font-inria text-xl flex justify-center items-center flex-col md:p-10 p-2">
        <div className=" text-purple-default mb-9 ml-9 mr-9 mx-auto border-x-4 border-green-light transform skew-x-6 border-y-4 skew-y-6 rounded-lg bg-green-light md:w-96">
            <h1 className="font-italianno text-6xl p-3">
                Por que escolher o Start 21?
            </h1>
        </div>

        <div className="xl:flex xl:flex-row md:justify-center md:items-center">
          <div className="flex justify-center items-center m-12 mb-9 gap-4">
            <div className="text-purple-default px-5 py-9 mx-auto flex flex-col items-center text-2xl border border-purple-default rounded-lg shadow-xl md:w-96 md:h-80 sm:w-80 sm:h-96">
              <img
                  src={Cardapio}
                  alt="Imagem de um prato com garfo e faca representando que teremos cardápios diferentes."
                  className="w-28 h-28 rounded-full ml-4 mr-4"
              />
              <p className="mt-5">Receba cardápios exclusivos e dicas práticas!</p>
              <p className="text-black text-xl mt-5">Refeições planejadas, fáceis e práticas, para simplificar a sua rotina.</p>
            </div>
          </div>

          <div className="flex justify-center items-center m-12 mb-9 gap-4">
            <div className="text-purple-default px-4 py-9 mx-auto flex flex-col items-center text-2xl border border-purple-default rounded-lg shadow-xl md:w-96 md:h-80 sm:w-80 sm:h-96">
              <img
                  src={NutriGe}
                  alt="Imagem da Nutri Gerusa representando o contato direto durante o programa."
                  className="w-28 h-28 rounded-full ml-4 mr-4"
              />
              <p className="mt-5">Contato direto com a Nutri Gerusa durante todo o programa!</p>
              <p className="text-black text-xl mt-5">Acompanhamento dedicado para te ajudar a alcançar seus objetivos.</p>
            </div>
          </div>
          <div className="flex justify-center items-center m-12 mb-9 gap-4">
            <div className="text-purple-default px-4 py-9 mx-auto flex flex-col items-center text-2xl border border-purple-default rounded-lg shadow-xl md:w-96 md:h-80 sm:w-80 sm:h-96">
              <img
                  src={Exercicios}
                  alt="Imagem de pessoas fazendo exercícios representando as dicas de exercícios durante o programa."
                  className="w-28 h-28 rounded-full ml-4 mr-4"
              />
              <p className="mt-8">Dicas de treino!</p>
              <p className="text-black text-xl mt-5">Exercícios que complementam sua transformação física e mental.</p>
            </div>
          </div>
          
        </div>
        <div className="xl:flex xl:flex-row md:justify-center md:items-center">
          <div className="flex justify-center items-center m-12 mb-9 gap-4">
            <div className="text-purple-default px-4 py-9 mx-auto flex flex-col items-center text-2xl border border-purple-default rounded-lg shadow-xl md:w-96 md:h-80 sm:w-80 sm:h-96">
              <img
                  src={Planejamento}
                  alt="Imagem de calendário e um relógio representando a organização e o planejamento da rotina que terá durante o programa."
                  className="w-28 h-28 rounded-full ml-4 mr-4"
              />
              <p className="mt-5">Organização e planejamento para uma rotina equilibrada!</p>
              <p className="text-black text-xl mt-5">Alinhe sua alimentação, treinos e dia a dia para resultados consistentes.</p>
            </div>
          </div>
          <div className="flex justify-center items-center m-12 mb-9 gap-4">
            <div className="text-purple-default px-4 py-9 mx-auto flex flex-col items-center text-2xl border border-purple-default rounded-lg shadow-xl md:w-96 md:h-80 sm:w-80 sm:h-96">
              <img
                  src={WhatsApp}
                  alt="Imagem de uma pessoa segurando um celular com o ícone do WhatsApp representando o grupo exclusivo no WhatsApp."
                  className="w-28 h-28 rounded-full ml-4 mr-4"
              />
              <p className="mt-5">Faça parte do grupo exclusivo no WhatsApp!</p>
              <p className="text-black text-xl mt-5">Receba suporte diário e compartilhe sua jornada com outras pessoas.</p>
            </div>
          </div>

          <div className="flex justify-center items-center m-12 mb-9 gap-4">
            <div className="text-purple-default px-4 py-9 mx-auto flex flex-col items-center text-2xl border border-purple-default rounded-lg shadow-xl md:w-96 md:h-80 sm:w-80 sm:h-96">
              <img
                  src={PercaPeso}
                  alt="Imagem de uma pessoa com a calça larga representando a perda de peso que terá durante o programa."
                  className="w-28 h-28 rounded-full ml-4 mr-4"
              />
              <p className="mt-5">Resultados rápidos e sustentáveis!</p>
              <p className="text-black text-xl mt-5">Perca peso de forma saudável e mantenha o progresso após o programa.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default BenefitsSection;