import React from "react";
import "@fontsource/itim";
import "@fontsource/inria-sans"

const BenefitsSection = () => {
    return (
      <div className="font-inria text-xl">

        <div className=" text-purple-default mb-7 mt-7 ml-9 mr-9 mx-auto border-x-4 border-green-default transform skew-x-6 border-y-4 skew-y-6 rounded-lg bg-green-default">
            <h1 className="font-italianno text-6xl p-3">
                Por que escolher o Start 21?
            </h1>
        </div>
  
        <div className="flex justify-center items-center m-2 mb-9">
          <div className="text-purple-default bg-green-light rounded-full w-[180px] h-[180px] px-4 py-9 mx-auto">
            <p>Transforme seu corpo e saúde em apenas 21 dias.</p>
          </div>
          <div className="text-purple-default bg-green-light rounded-full w-[180px] h-[180px] px-4 py-9 mx-auto">
            <p>Receba dicas práticas e cardápios exclusivos.</p>
          </div>
        </div>

        <div className="flex justify-center items-center m-2 mb-9">
          <div className="text-purple-default bg-green-light rounded-full w-[180px] h-[180px] px-4 py-10 mx-auto">
            <p>Suporte profissional com a Nutri Gerusa.</p>
          </div>
          <div className="text-purple-default bg-green-light rounded-full w-[180px] h-[180px] px-4 py-7 mx-auto">
            <p>Conquiste resultados rápidos e sustentáveis.</p>
          </div>
        </div>
  
        <div className="flex justify-center items-center m-2 mb-9">
          <div className="text-purple-default bg-green-light rounded-full w-[180px] h-[180px] px-4 py-12 mx-auto">
            <p>Faça parte do grupo exclusivo do Start 21.</p>
          </div>
          <div className="text-purple-default bg-green-light rounded-full w-[180px] h-[180px] px-4 py-12 mx-auto">
            <p>Contato pessoal durante todo o programa.</p>
          </div>
        </div>

  
  
      </div>
    );
  };

export default BenefitsSection;