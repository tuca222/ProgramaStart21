import React from "react";
import "@fontsource/italianno";
import "@fontsource/itim";
import "@fontsource/inria-sans"
import ImagemLogo from '../../assets/images/ImagemLogo.png';
// import CountdownTimer from './CountdownTimer';

const HeaderSection = () => {

    const targetDate = new Date('2025-02-08T00:00:00-03:00'); // Data alvo ajustada para UTC-3

    const currentDate = new Date();
    const utc3Offset = -3 * 60; // UTC-3 em minutos
    const currentDateUtc3 = new Date(currentDate.getTime() + (currentDate.getTimezoneOffset() + utc3Offset) * 60000);

    const timeDifference = targetDate - currentDateUtc3;

    const daysRemaing = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

    return (
        <div className="flex flex-row justify-between">
            <div>
                <img
                  src={ImagemLogo}
                  alt="Imagem do Logo da Nutri Gerusa."
                  className="md:w-96 object-cover transform -rotate-12 md:ml-10 w-48"
                />
            </div>
            {/* <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="150"
                    viewBox="0 0 200 200"
                    className="absolute top-0 left-0 md:w-96 md:h-96"
                    // transform="rotate(180)"
                    style={{ transform: "rotate(180deg)" }}
                >
                <path
                    d="M200,0 L200,400 C300,150 300,250 400,400 Q100,300 0,200 Q100,0 200,0 Z"
                    fill="#9C009A"
                />
                </svg>
            </div> */}

            <div className="flex flex-col justify-center items-center md:mt-11 md:mb-6 mt-2">
                <div className="text-center p-1 font-bold">
                    <h2 className="md:text-4xl text-sm px-5">
                        {/* Oferta especial de início de ano!!! */}
                        OFERTA ESPECIAL VÁLIDA APENAS PARA O INÍCIO DE 2025!
                    </h2>
                    <p className="mt-2">
                        FALTAM <span className="text-purple-dark">{daysRemaing} DIAS</span> PARA A MUDANÇA QUE <span className="text-purple-dark">VOCÊ</span> MERECE!
                        {/* <CountdownTimer targetDate={targetDate} /> */}
                    </p>
                </div>
                <h1 className="md:text-9xl text-8xl font-italianno text-purple-default">Start 21</h1>
                <p className="font-itim mb-6 md:text-2xl text-xl">com Gerusa Lorenzetti</p>
                <a
                    href="#ComoIraFuncionar"
                    className="bg-purple-default text-white py-4 px-6 font-itim text-xl rounded-lg hover:bg-purple-dark transition duration-300 breathing md:mt-5">
                    Garanta sua vaga!
                </a>
            </div>

            <div>
                <img
                  src={ImagemLogo}
                  alt="Imagem do Logo da Nutri Gerusa."
                  className="md:w-96 object-cover transform -rotate-12 md:mr-10 w-48"
                />
            </div>

            {/* <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="150"
                    viewBox="0 0 200 200"
                    className="absolute top-0 right-0 md:w-96 md:h-96"
                    style={{ transform: "rotate(270deg)" }}
                    // transform="rotate(270)"
                >
                <path
                    d="M200,0 L200,400 C300,150 300,250 400,400 Q100,300 0,200  Q100,0 200,0 Z"
                    fill="#9C009A"
                />
                </svg>
            </div> */}
        </div>
    );
};

export default HeaderSection;