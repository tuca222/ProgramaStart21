import React from "react";
import "@fontsource/italianno";
import "@fontsource/itim";
import "@fontsource/inria-sans"
import FotoMinhaHistoria from '../../assets/images/FotoMinhaHistoria.png';

const MyStorySection = () => {
  return (
    <div className="font-inria flex flex-col justify-center items-center md:p-10 p-2">
        <h1 className="text-6xl font-italianno text-purple-default">Conheça um pouco da minha história</h1>
        <div className="flex flex-col md:flex-row md:mr-20 md:ml-20 md:mb-10 items-center justify-center">
            <img
                src={FotoMinhaHistoria}
                alt="Foto da Nutricionista Gerusa Lorenzetti sentada no chão sem fundo"
                className="rounded-lg shadow-lg object-cover w-full max-w-sm md:max-w-lg mx-auto md:ml-52"
            />
            <div className="m-4 md:mr-52">
                <p className="text-lg mb-4 md:text-xl">
                    Me chamo Gerusa Lorenzetti e sou nutricionista, durante toda a minha vida segui dietas restritivas em busca de emagrecimento.
                </p>
                <p className="text-lg mb-4 md:text-xl">
                    Quando eu era mais nova, fui diagnosticada com uma doença autoimune que me causava diversas dores abdominais e constipação. 
                </p>
                <p className="text-lg mb-4 md:text-xl">
                    A partir da busca por alternativas para a melhora da minha saúde descobri a nutrição, que me levou a me dedicar a ajudar pessoas a alcançar o seu corpo dos sonhos e saúde intestinal.
                </p>
                <p className="text-lg mb-8 md:text-xl">
                    Adotei como missão pessoal ajudar você a desenvolver hábitos saudáveis sem terrorismo nutricional, de forma simples, prazerosa e baseado em ciência!
                </p>
            </div>
        </div>
        <div>
            <a
                href="/FacaParteDoStart21"
                className="bg-yellow-default hover:bg-yellow-dark text-purple-dark w-[300px] rounded-lg font-itim text-xl m-4 py-4 px-6 transition duration-300"
                >
                Faça parte do Start 21!
            </a>
        </div>
        
    </div> 
);
}

export default MyStorySection;