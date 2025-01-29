import React from 'react';
import PacienteLuciana from '../../assets/images/pacientes/Luciana.png';
import PacienteGuilherme from '../../assets/images/pacientes/Guilherme.png';
import PacienteSilvana from '../../assets/images/pacientes/Silvana.jpg';
import PacienteMaria from '../../assets/images/pacientes/Maria.png';
import PacienteKarla from '../../assets/images/pacientes/Karla.jpg';
import PacienteMiriam from '../../assets/images/pacientes/Miriam.jpg';
import PacienteThaisa from '../../assets/images/pacientes/Thaisa.png';

const DepositionSection = ({ id }) => {
  return (
    <section id={id} className="md:p-10 p-2">
      <div className="text-center font-inria mb-10">
        <h1 className="font-italianno text-purple-default text-6xl p-3">Depoimentos de Pacientes</h1>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          <div className='flex flex-col md:flex-row gap-5'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col xl:flex-row gap-5'>
                <div className='flex flex-col gap-5'>                
                  <div className="bg-green-light p-2 rounded-lg shadow-lg flex flex-col h-auto w-72">
                      <p className="text-gray-700 italic">
                        "Valeu Ge, valeu muito a pena investir na minha saúde e no cuidado com a minha alimentação. Juntando a atividade física então, nem se fala… já 
                        me sinto muito melhor mesmo. E eu adoro o seu jeito leve e descomplicado, fez tudo ficar muito mais fácil de aplicar e seguir. Você é fera!!! 🤩🙏🏽🙏🏽"
                      </p>
                      <div className="flex flex-row justify-center items-center mt-4">
                        <img
                          src={PacienteGuilherme}
                          alt="Icone Guilherme"
                          className="w-12 h-12 rounded-full"
                          style={{ filter: 'blur(3px)' }}
                        />
                        <p className="mt-4 font-semibold">- Guilherme Machado</p>
                      </div>
                  </div>
                  <div className="bg-green-light p-2 rounded-lg shadow-lg flex flex-col h-auto w-72">
                    <p className="text-gray-700 italic">
                      "Boa tarde! Estou melhor, você me ajudou muito, nessa última consulta foi muito gratificante. Pois você mostrou que posso emagrecer, dependendo de altos e baixos. Todos temos isso, 
                      então é só seguir meta, seguindo com alimentação,, seguindo com treinos, até sono está melhor 🥰"
                    </p>
                    <div className="flex flex-row justify-center items-center mt-4">
                      <img
                        src={PacienteKarla}
                        alt="Icone Karla"
                        className="w-12 h-12 rounded-full"
                        style={{ filter: 'blur(3px)' }}
                      />
                      <p className="mt-4 font-semibold">- Karla Fernandes</p>
                    </div>
                  </div>
                </div>
              
                <div className='flex flex-col gap-5'>                
                  <div className="bg-green-light p-2 rounded-lg shadow-lg flex flex-col h-auto w-72">
                    <p className="text-gray-700 italic">
                      "Ge, desde Julho de 2020 quando você fez a minha reeducação alimentar, pois não conseguia baixar meu triglicerídeo e colesterol, com 49 anos de idade, que meu modo de me alimentar 
                      e minha maneira de viver mudou. Tenho animo e disposição para fazer minhas refeições, minha e do meu esposo, pois ele é bem parceiro, vontade de fazer minha atividade física, e olha 
                      que sou um pouco molenga, as vezes estou cansada, mas faço com vontade. Desde lá, Julho de 2020, que aprendi o que é comer bem, não deixo de comer as besteirinhas kkkkkkkkk mas tudo 
                      no equilíbrio. Agradeço muito a Deus por ter te colocado no meu caminho, muito obrigada por seu profissionalismo"
                    </p>
                    <div className="flex flex-row justify-center items-center mt-4">
                      <img 
                        src={PacienteSilvana} 
                        alt="Icone Silvana" 
                        className="w-12 h-12 rounded-full" 
                        style={{ filter: 'blur(3px)' }}
                      />
                      <p className="mt-4 font-semibold">- Silvana Cecília Beber</p>
                    </div>
                  </div>
                  <div className="bg-green-light p-2 rounded-lg shadow-lg flex flex-col h-auto w-72">
                      <p className="text-gray-700 italic">
                        "Agradeço muito a você pela atenção e ajuda a conseguir meus objetivos."
                      </p>
                      <div className="flex flex-row justify-center items-center">
                        <img
                          src={PacienteThaisa}
                          alt="Icone Thaisa"
                          className="w-12 h-12 rounded-full"
                          style={{ filter: 'blur(3px)' }}
                        />
                        <p className="mt-4 font-semibold">- Thaisa Cardoso</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className='flex flex-col md:flex-row gap-5'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col xl:flex-row gap-5'>
                <div className='flex flex-col gap-5'>
                  <div className="bg-green-light p-2 rounded-lg shadow-lg flex flex-col h-auto w-72">
                <p className="text-gray-700 italic">
                  Bom dia, Gerusa. Ontem quando nos falamos eu estava indo dormir, acabei não te dizendo o quanto eu estou curtindo esse processo. 
                  Já havia ido a outras nutricionistas antes, mas sempre me parecia que as dietas eram muito difíceis de aplicar no meu dia a dia, caso eu não cozinhasse, e ainda tinha um 
                  milhão de receitas que eu tinha que fazer todos os fins de semana pra semana. Hoje eu aprendi a montar meu prato, pensando no que devo incluir e as quantidades. Não que eu 
                  esteja seguindo a risca todos os dias. Mas tem sido fácil 'voltar' p dieta depois de uma jacada. hehe Aprendi também a comer mais frutas, agora eu tenho horário para comê-las. 
                  Antes eu comia qdo tinha vontade, mas aí as vezes até tinha vontade da fruta, mas não queria descascar... Acho que tudo isso me ajudou a persistir no processo. É claro que ainda 
                  fico inchada diversas vezes, mas não é mais permanente como costumava ser. Queria muito te agradecer pelo suporte tão presente - e por não ter me colocado numa dieta low carb, eu 
                  não aguentaria 30 dias. hehe"
                </p>
                <div className="flex flex-row justify-center items-center mt-4">
                  <img 
                    src={PacienteLuciana}
                    alt="Icone Luciana"
                    className="w-12 h-12 rounded-full"
                    style={{ filter: 'blur(3px)' }}
                  />
                  <p className="mt-4 font-semibold">- Luciana Brasil</p>
                </div>
                  </div>
                </div>
              
                <div className='flex flex-col gap-5'>
                  <div className="bg-green-light p-2 rounded-lg shadow-lg flex flex-col h-auto w-72">
                    <p className="text-gray-700 italic">
                      "Bom diaaa vou tentar bater a foto de biquíni hj mas to bem mais sequinha na barriga é perceptível 🫠🙃 tudo isso devo a ti. Me sinto mais bonita e minha auto estima está mtmt melhor,
                      não só pela estética mas por saber que consigo me cuidar, comer bem, saudável, com limites sem precisar descontar minhas emoções na alimentação. E vc me inspira mto ♥️♥️♥️ só agradeço por ter te encontrado!🥰"
                    </p>
                    <div className="flex flex-row justify-center items-center mt-4">
                      <img
                        src={PacienteMaria}
                        alt="Icone Maria"
                        className="w-12 h-12 rounded-full"
                        style={{ filter: 'blur(3px)' }}
                      />
                      <p className="mt-4 font-semibold">- Maria Lygia</p>
                    </div>
                  </div>
                  <div className="bg-green-light p-2 rounded-lg shadow-lg flex flex-col h-auto w-72">
                    <p className="text-gray-700 italic">
                      "Obrigada por estar deixando a minha vida mais leve."
                    </p>
                    <div className="flex flex-row justify-center items-center mt-4">
                      <img
                        src={PacienteMiriam}
                        alt="Icone Miriam"
                        className="w-12 h-12 rounded-full"
                        style={{ filter: 'blur(3px)' }}
                      />
                      <p className="mt-4 font-semibold">- Miriam Cardoso</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepositionSection;