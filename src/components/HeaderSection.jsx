import React from "react";
import "@fontsource/italianno";
import "@fontsource/itim";
import "@fontsource/inria-sans"

const HeaderSection = () => {
  return (
    <div className="flex justify-between">
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 200 200"
                className="absolute top-0 left-0 md:w-96 md:h-96"
                transform="rotate(180)"
            >
            <path
                d="M200,0 L200,400 C300,150 300,250 400,400 Q100,300 0,200 Q100,0 200,0 Z"
                fill="#9C009A"
            />
            </svg>
        </div>

        <div className="flex flex-col justify-center items-center mt-28 md:mt-11 md:mb-6">
            <h1 className="text-9xl font-italianno text-purple-default">Start 21</h1>
            <p className="font-itim text-2xl">Programa de Emagrecimento</p>
            <p className="font-itim mb-6 text-2xl">com Gerusa Lorenzetti</p>
            <a
                href="#registrationSection"
                className="bg-purple-default text-white py-4 px-6 font-itim text-xl rounded-lg hover:bg-purple-dark transition duration-300 breathing md:mt-5">
                Garanta sua vaga!
            </a>
        </div>

        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 200 200"
                className="absolute top-0 right-0 md:w-96 md:h-96"
                transform="rotate(270)"
            >
            <path
                d="M200,0 L200,400 C300,150 300,250 400,400 Q100,300 0,200  Q100,0 200,0 Z"
                fill="#9C009A"
            />
            </svg>
        </div>
    </div>
  );
};

export default HeaderSection;