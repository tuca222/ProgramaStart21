import React from "react";
import VamosJuntos from '../../assets/images/VamosJuntos.png';

const ContentThanks = () => {

    return (
        <section className="flex flex-col items-center justify-center font-itim text-payment-txt_line_border md:text-3xl ml-5 mr-5">
            <h2 className="text-center px-10 text-3xl">A sua transformação começa agora!</h2>
            <p className="text-center md:mt-8 mt-6 md:text-3xl text-xl">Ao confirmar sua participação no Programa Start 21, você está um passo mais próximo de conquistar o corpo que você merece.</p>           
            <p className="text-center md:mt-5 mt-4 md:text-3xl text-xl">Em breve, eu e minha equipe entraremos em contato com você para continuarmos essa jornada juntos!</p>
            <div className="flex flex-col justify-center items-center mt-4 gap-2">
                <p className="text-center md:text-3xl text-xl">Te vejo do outro lado.</p>
                <img
                    src={VamosJuntos}
                    alt="Imagem da Nutri Gerusa -- VamosJuntos"
                    className="h-80 md:h-80 object-cover shadow-2xl"
                />
            </div>     
        </section>
    );
};

export default ContentThanks;