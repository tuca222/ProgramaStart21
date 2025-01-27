import React, { useState } from "react";
// import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "@fontsource/itim";
import "@fontsource/inria-sans"
import "@fontsource/italianno"

const RegistrationSection = ({ id }) => {

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const [cadastrarClicked, setCadastrarClicked] = useState(false);

    const navigate = useNavigate()

    const [privacidadeClicked, setPrivacidadeClicked] = useState(false);

    const privacidadeClickedExpand = (event) => {
        event.stopPropagation();
        setPrivacidadeClicked(!privacidadeClicked);
    }

    const [errors, setErrors] = useState({ nomeCompleto:'', whatsapp:'', email:'', concordo:'' });

    const [concordo, setConcordo] = useState(false);

    const handleConcordo = (event) => {
        setConcordo(event.target.checked);
        setErrors((prev) => ({ ...prev, concordo: '' }));
    }

    const handleNomeCompletoChange = (event) => {
        let valueNome = event.target.value;
        const regexNome = /^[a-zA-Z\s]*$/;
        if (regexNome.test(valueNome) && valueNome.length <= 50) {
            setNomeCompleto(valueNome);
            setErrors((prev) => ({ ...prev, nomeCompleto: '' }));
        }
    };

    const handleEmailChange = (event) => {
        let valueEmail = event.target.value;
        setEmail(valueEmail);
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regexEmail.test(valueEmail) && valueEmail.length <= 50) {
            setErrors((prev) => ({ ...prev, email: '' }));
        } else {
            setErrors((prev) => ({ ...prev, email: 'Por favor, insira um e-mail válido!' }));
        }
    };
    
    const handleWhatsappChange = (event) => {
        let valueWhats = event.target.value.replace(/\D/g, '');
        if (valueWhats.length <= 11) {
            if (valueWhats.length > 2) valueWhats = `(${valueWhats.slice(0, 2)}) ${valueWhats.slice(2)}`;
            // if (valueWhats.length > 7) valueWhats = `${valueWhats.slice(0, 10)}-${valueWhats.slice(10)}`;

            setWhatsapp(valueWhats);

            setErrors((prev) => ({ ...prev, whatsapp: '' }));
        }
    };

    // const targetDate = new Date('2025-02-08')

    // const currentDate = new Date()

    // const timeDifference= targetDate - currentDate

    // const daysRemaing = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

    const handleSubmit = async (event) => {
        event.preventDefault();
        let valid = true;

        if (nomeCompleto.trim().length < 8) {
            setErrors((prev) => ({ ...prev, nomeCompleto: 'Por favor, insira seu nome completo!' }));
            valid = false;
        } else {
            setErrors((prev) => ({ ...prev, nomeCompleto: '' }));
        }

        if (email.trim().length < 10) {
            setErrors((prev) => ({ ...prev, email: 'Por favor, insira seu melhor e-mail!' }));
            valid = false;
        }  else {
            setErrors((prev) => ({ ...prev, email: '' }));
        }

        if (whatsapp.replace(/\D/g,'').length < 11) {
            setErrors((prev) => ({ ...prev, whatsapp: 'Por favor, insira seu WhatsApp!' }));
            valid = false;
        } else {
            setErrors((prev) => ({ ...prev, whatsapp: '' }));
        }

        if (!concordo) {
            setErrors((prev) => ({ ...prev, concordo: 'Por favor, confirme que você leu nossa política!' }));
            valid = false;
        } else {
            setErrors((prev) => ({ ...prev, concordo: '' }));
        }

        if (valid) {
            try{
                setCadastrarClicked(true);

                // const response = await fetch('/api/proxy', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({ nomeCompleto, email, whatsapp })
                //   });

                // const data = await response.json();
                // console.log('Dados enviados com sucesso:', data.message);

                navigate("/pagamento")

            } catch (error) {
                console.error('Erro ao enviar os dados:', error);
            }
        }
    }

    return (
        <div id={id} className="font-inria text-xl px-5 md:flex md:flex-col md:items-center md:justify-center">
            <div className="md:flex md:flex-row md:justify-center md:items-center md:gap-4">
                <h1 className="font-italianno font-bold text-6xl text-purple-default">
                    Inscreva-se Agora
                </h1>
                <h1 className="font-italianno font-bold text-6xl text-purple-default">
                    e
                </h1>
                <h1 className="font-italianno font-bold text-6xl text-purple-default">
                    Garanta Sua Vaga!
                </h1>
            </div>
            

            <div className="md:flex md:flex-row md:justify-center md:items-center md:gap-5 md:ml-20">
                <div>
                    <h2 className="text-purple-default mt-5 text-2xl md:w-96">
                        Inscreva-se:
                    </h2>
                    <h2 
                        className="text-purple-default mt-5 text-base md:w-96"
                    >
                        <span
                            className="underline decoration-purple-default cursor-pointer"
                            onClick={privacidadeClickedExpand}
                        >
                            Entenda porque pedimos seus dados!
                        </span>
                    </h2>
                    {privacidadeClicked && (
                        <div className="mt-4 p-4 mb-4 bg-gray-200 text-gray-700 rounded-lg md:hidden">
                            <h3 className="text-purple-default font-bold">
                                Nossa Política de Privacidade:
                            </h3>
                            <p className="mt-4">
                                Levamos sua privacidade e segurança a sério.
                            </p>
                            <p className="mt-4">
                                Seus dados são coletados para melhorar nossa comunicação durante o programa. Eles serão utilizados exclusivamente pela nossa equipe para o contato direto com você via WhatsApp, garantindo a inclusão no grupo exclusivo do programa.
                            </p>
                            <p className="mt-4">
                                Em hipótese alguma, seus dados serão vendidos, compartilhados ou divulgados para terceiros fora da nossa equipe.
                            </p>
                            <p className="mt-4">
                                Nos comprometemos a protegê-los e medidas de segurança adequadas foram implementadas para mantê-los seguro.
                            </p>
                            <p className="mt-8 text-purple-default">
                                Se você ficou com alguma dúvida sobre nossa Política de Privacidade, entre em contato conosco pelo{' '}
                                <a 
                                    href="https://wa.me/5548999694084?text=Oi,%20fiquei%20com%20dúvida%20na%20Política%20de%20Privacidade%20do%20Despertar%2040%2B"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 underline"
                                >
                                    WhatsApp
                                </a>.
                            </p>
                            <button
                                onClick={privacidadeClickedExpand}
                                className="mt-4 bg-purple-default text-white hover:bg-purple-dark transition duration-300 rounded-lg font-itim p-2 px-8"
                            >
                                Fechar
                            </button>
                        </div>
                    )}

                    {privacidadeClicked && (
                        <div className="fixed inset-0 items-center justify-center bg-black bg-opacity-50 z-50 hidden md:flex">
                            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
                                <h3 className="text-purple-default font-bold text-xl">
                                    Nossa Política de Privacidade:
                                </h3>
                                <p className="mt-4">
                                    Levamos sua privacidade e segurança a sério.
                                </p>
                                <p className="mt-4">
                                    Seus dados são coletados para melhorar nossa comunicação durante o programa. Eles serão utilizados exclusivamente pela nossa equipe para o contato direto com você via WhatsApp, garantindo a inclusão no grupo exclusivo do programa.
                                </p>
                                <p className="mt-4">
                                    Em hipótese alguma, seus dados serão vendidos, compartilhados ou divulgados para terceiros fora da nossa equipe.
                                </p>
                                <p className="mt-4">
                                    Nos comprometemos a protegê-los e medidas de segurança adequadas foram implementadas para mantê-los seguro.
                                </p>
                                <p className="mt-8 text-purple-default">
                                    Se você ficou com alguma dúvida sobre nossa Política de Privacidade, entre em contato conosco pelo{' '}
                                    <a 
                                        href="https://wa.me/5548999694084?text=Oi,%20fiquei%20com%20dúvida%20na%20Política%20de%20Privacidade%20do%20Despertar%2040%2B"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-600 underline"
                                    >
                                        WhatsApp
                                    </a>.
                                </p>
                                <button
                                    onClick={privacidadeClickedExpand}
                                    className="mt-4 bg-purple-default text-white hover:bg-purple-dark transition duration-300 rounded-lg font-itim p-2 px-8"
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    )}


                    <form className="flex flex-col justify-center items-center mt-6">
                        <label> 
                            Nome completo:
                        </label>
                        <input
                            id="nomeCompleto"
                            type="text"
                            value={nomeCompleto}
                            className="p-2 px-9 rounded-xl bg-purple-light mt-2"
                            onChange={handleNomeCompletoChange}
                            minLength={8}
                            required
                        />
                        {errors.nomeCompleto && <p className="text-red-600 text-base">{errors.nomeCompleto}</p>}

                        <label className="mt-3"> 
                            Seu melhor e-mail:
                        </label>
                        <input
                            id="email"
                            type="text"
                            value={email}
                            className="p-2 px-9 rounded-xl bg-purple-light mt-2"
                            onChange={handleEmailChange}
                            minLength={10}
                            required
                        />
                        {errors.email && <p className="text-red-600 text-base">{errors.email}</p>}

                        <label className="mt-3"> 
                            Seu WhatsApp (com DDD):
                        </label>
                        <input
                            id="whatsapp"
                            type="tel"
                            value={whatsapp}
                            className="p-2 px-9 rounded-xl bg-purple-light mt-2"
                            onChange={handleWhatsappChange}
                            required
                        />
                        {errors.whatsapp && <p className="text-red-600 text-base">{errors.whatsapp}</p>}

                        <div className="mt-4 ml-4">
                            <input
                                id="concordo"
                                type="checkbox"
                                checked={concordo}
                                onChange={handleConcordo}
                                required
                            />
                            <label htmlFor="concordo" className="text-base ml-2">Estou de acordo com a Política de Privacidade</label>
                            {errors.concordo && <p className="text-red-600 text-base">{errors.concordo}</p>}
                        </div>
                    </form>
                    
                    <div className="flex flex-col justify-center items-center">
                        {!cadastrarClicked && (
                            <>
                                <button
                                    onClick={handleSubmit}
                                    className="bg-purple-default text-white hover:bg-purple-dark transition duration-300 rounded-lg font-itim mt-6 p-2 px-8">
                                    Quero Transformar Minha Vida!
                                </button>
                            </>
                        )}

                        {cadastrarClicked && (
                            <>
                                <div
                                    className="h-12 w-12 border-4 border-t-white  border-b-white border-l-white border-r-purple-default 
                                            animate-spin rounded-full ease-linear mt-6">
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="md:w-3/6">
                    <p className="mt-5 bg-purple-light rounded-lg">
                        Venha fazer parte do programa que irá mudar seu corpo para o Carnaval.
                    </p>
                    <p className="mt-5 bg-yellow-light rounded-lg py-2 px-4">
                        Pensando no valor que cobraria pelo programa, com tudo que ele oferece, ele poderia custar pelo menos
                        <span className="font-bold text-purple-default text-2xl"> R$499,00</span>.
                    </p>
                    <p className="mt-5 bg-purple-light rounded-lg px-1">
                        Como eu quero ajudar você a alcançar seu corpo dos sonhos para o Carnaval, minha equipe e eu chegamos em um valor mais acessível.
                    </p>
                    <div className="mt-5 bg-yellow-light rounded-lg py-2 px-4">
                        <p>
                            <span className="underline decoration-purple-default text-2xl font-bold">Por apenas</span>
                        </p>
                        <p className="mt-2 mb-2">
                            <span className="text-purple-default text-2xl font-bold">R$167,90</span> 
                        </p>
                        <p>
                            <span className="text-xl font-bold">ou</span>
                        </p>
                        <p className="mt-2 mb-2">
                            <span className="text-purple-default text-2xl font-bold">3 x de R$63,96</span> 
                        </p>
                        <p>
                            você terá acesso a matéria exclusivos, cardápios especiais, dicas práticas e <span className="text-purple-default text-2xl">o meu suporte profissional</span>.
                        </p>
                    </div>
                    
                    <p className="mt-5 bg-purple-default_light rounded-lg text-white font-bold text-2xl">
                        As vagas são limitadas, não perca essa chance!!
                    </p>
                </div>
            </div>
            
            {/* <h2 className="font-italianno text-6xl mt-5">
                Faltam <span className="text-yellow-dark"> {daysRemaing} </span>dias para começar a mudança na sua vida!
            </h2> */}
        </div>
    );
};

export default RegistrationSection;