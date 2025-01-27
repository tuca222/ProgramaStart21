import React from "react";
import "@fontsource/itim";
import "@fontsource/inria-sans"
import ComidaNutricionalDireita from '../assets/images/beneficios/ComidaNutricionalDireita.jpg';
import ComidaNutricional from '../assets/images/beneficios/ComidaNutricional.jpg';

const HowItWorksSection = ({ id }) => {
    return (
      <div id={id} className="font-inria text-xl flex justify-center items-center flex-col">
        <div className="mx-auto">
            <div className="flex flex-row justify-center gap-4 mt-5">            
                <div>
                    <img
                        src={ComidaNutricional}
                        alt="Imagem de comidas."
                        className="rounded-xl object-cover w-full h-full shadow-xl"
                    />
                </div>        
                <div>
                    <div>
                        <h1 className="text-purple-default font-italianno text-6xl">
                            Como irá funcionar?
                        </h1>
                    </div>
                    <div className="flex flex-row justify-center gap-4 mt-3">
                        <div className="flex flex-col border border-purple-default rounded-lg shadow-xl w-60 p-5 gap-5">
                            <p className="font-italianno text-purple-default text-6xl">1</p>
                            <p className="font-italianno text-purple-default text-5xl mt-5">Inscreva-se!</p>
                            <p className="mt-12">Preencha seus dados no formulário para garantir sua vaga no programa.</p>
                        </div>
                        <div className="flex flex-col  border border-purple-default rounded-lg shadow-xl w-60 p-5 gap-5">
                            <p className="font-italianno text-purple-default text-6xl">2</p>
                            <p className="font-italianno text-purple-default text-5xl">Escolha o seu pagamento!</p>
                            <p className="mt-4">Na página de pagamento, selecione a forma que mais combina com você.</p>
                        </div>
                        <div className="flex flex-col border border-purple-default rounded-lg shadow-xl w-60 p-5 gap-5">
                            <p className="font-italianno text-purple-default text-6xl">3</p>
                            <p className="font-italianno text-purple-default text-5xl">Finalize o seu pagamento!</p>
                            <p className="mt-4">Confirme o pagamento para garantir sua participação no programa.</p>
                        </div>
                        <div className="flex flex-col border border-purple-default rounded-lg shadow-xl w-60 p-5 gap-5">
                            <p className="font-italianno text-purple-default text-6xl">4</p>
                            <p className="font-italianno text-purple-default text-5xl">Aguarde nosso contato!</p>
                            <p className="mt-4">Você receberá um e-mail de boas-vindas com orientações iniciais e o link para o grupo.</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center gap-4 mt-5">
                        <div className="flex flex-col border border-purple-default rounded-lg shadow-xl w-60 py-5 gap-5">
                            <p className="font-italianno text-purple-default text-6xl">5</p>
                            <p className="font-italianno text-purple-default text-5xl mt-4">Entre no grupo!</p>
                            <p className="mt-9">Participe da comunidade do Start 21 para receber dicas diárias e suporte exclusivo.</p>
                        </div>
                        <div className="flex flex-col border border-purple-default rounded-lg shadow-xl w-60 py-5 px-2 gap-5">
                            <p className="font-italianno text-purple-default text-6xl">6</p>
                            <p className="font-italianno text-purple-default text-5xl">Receba uma mensagem minha!</p>
                            <p className="mt-3">Eu, Nutri Gerusa, entrarei em contato com você para entender melhor seus objetivos e te guiar no início da sua jornada.</p>
                        </div>
                        <div className="flex flex-col border border-purple-default rounded-lg shadow-xl w-60 py-5 px-1 gap-5">
                            <p className="font-italianno text-purple-default text-6xl">7</p>
                            <p className="font-italianno text-purple-default text-5xl">Responda o questionário!</p>
                            <p className="mt-3">Irei te enviar um breve questionário para que o programa seja ainda mais personalizado para você.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src={ComidaNutricionalDireita}
                        alt="Imagem de comida."
                        className="rounded-xl object-cover w-full h-full shadow-xl"
                    />
                </div>
            </div>
        </div>
      </div>
    );
  };

export default HowItWorksSection;