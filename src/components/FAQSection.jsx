import React, { useState } from 'react';
import FotoFAQ from '../assets/images/FotoFAQ.jpg';

const FaqSection = () => {
  // State para armazenar qual FAQ está aberta
  const [openFaq, setOpenFaq] = useState(null);

  // Função para alternar a pergunta aberta
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'O que é o Start 21?',
      answer: 'O Start 21 é um programa de nutrição focado no emagrecimento e na melhora da sua rotina, promovendo uma transformação física e mental, para que você consiga adquirir aquele corpão para aproveitar o seu Carnaval.',
    },
    {
      question: 'Quando é o início do programa e qual a sua duração?',
      answer: 'O programa inicia oficialmente no dia 08 de fevereiro de2025 e tem duração de 21 dias, mas, assim que o seu pagamento for confirmado, eu e minha equipe já iremos estar com você. Então, durante os dias 08/02 a 28/02 você está se comprometendo a ser a mudança que a sua vida precisa e eu e minha equipe estaremos juntos com você.',
    },
    {
      question: 'Como irá funciona?',
      answer: 'O Start 21 será um programa de 21 dias onde teremos lives, acompanhamento personalizado, cardápios estilizados e muitas dicas. Durante esse período eu e minha equipe nos comprometemos a estar com você todos os dias. Iremos te ajudar nesse processo, aquietando todas as suas dúvidas e te ajudando a alcançar o melhor resultado para o Carnaval.',
    },
    {
      question: 'Como irei para o Grupo do Whats?',
      answer: 'Após seu pagamento ser confirmado, você receberá um e-mail com todas as informações que você precisa e com o link do grupo. Além disso, alguém da minha equipe irá entrar em contato com você pelo Whats para te conhecer um pouco melhor, garantindo assim o melhor resultado.',
    },
    {
      question: 'Irá ter reembolso?',
      answer: 'Assim que o seu pagamento for confirmado, eu e minha equipe já estaremos fazendo tudo para te dar o melhor atendimento, então o Start 21 não terá reembolso. Por isso, tenha certeza de que você está comprometido ou comprometida com a sua transformação e que você irá seguir todas as orientações que serão passadas.',
    },
    {
      question: 'Preciso de ajuda, ainda tenho algumas dúvidas!',
      answer: (
        <>
          Se você ainda ficou com alguma dúvida, não se preocupe, basta {' '}
          <a
            href="https://wa.me/5548999694084?text=Oi,%20preciso%20de%20ajuda%20com%20o%20Start%2021!"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-purple-default"
          >
            clicar aqui 
          </a>
          {' '} para falar comigo no Whats.
        </>
      ),
    },
  ];

  return (
    <section>
        <div>
        {/* Coluna FAQ */}
            <div className='font-inria flex flex-col justify-center items-center'>
                <h1 className="text-7xl text-center text-purple-default font-italianno lg:text-left mt-5 mb-6 px-20">
                    FAQ do Start21
                </h1>
                <div className='flex flex-col md:flex-row md:items-start md:gap-10 justify-start items-center'>
                  <img
                      src={FotoFAQ}
                      alt="Foto da Nutricionista Gerusa Lorenzetti trabalhando, sentada em uma mesa com um notebook"
                      className="object-cover rounded-xl w-[350px] h-[457px] mx-auto mb-6"
                      >
                  </img>
                  <div className="space-y-4 px-4 py-2 bg-purple-light w-[350px] rounded-md">
                      {faqs.map((faq, index) => (
                      <div
                          key={index}
                          className="border-b border-gray-200 pb-4"
                      >
                          <button
                              onClick={() => toggleFaq(index)}
                              className="w-full text-left text-xl focus:outline-none flex justify-between items-center"
                          >
                              {faq.question}
                              <span className="text-2xl text-right px-2">
                                  {openFaq === index ? '-' : '+'}
                              </span>
                          </button>
                      {/* Exibe a resposta se a FAQ estiver aberta */}
                          {openFaq === index && (
                          <p className="mt-3 text-gray-700 text-left">
                              {faq.answer}
                          </p>
                          )}
                      </div>
                      ))}
                  </div>
                </div>
                <div className='mt-12 mb-8'>
                    <a
                        href="#registrationSection"
                        className="bg-yellow-default hover:bg-yellow-dark text-purple-dark transition duration-300 w-[300px] rounded-lg font-itim text-xl m-4 py-4 px-6 "
                        >
                        Garanta a sua vaga!!
                    </a>
                </div>
            </div>        
        </div>
    </section>
    );
};

export default FaqSection;
