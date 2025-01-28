import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ContentPayment = () => {
    const [selectedPayment, setSelectedPayment] = useState('');
    const [selectedInstallment, setSelectedInstallment] = useState('');

    const handleCheckboxChange = (paymentType) => {
        setSelectedPayment(paymentType);
        setSelectedInstallment('');
    };

    const handleButtonClick = () => {
        let paymentURL = '';

        if(selectedPayment === "PIX") {
            paymentURL = 'https://www.asaas.com/c/z297tfysg8ojbssz'
        } else if(selectedPayment === "Cartão") {
            if (selectedInstallment === "1x") {
                paymentURL = 'https://youtube.com.br'
            } else if (selectedInstallment === "2x") {
                paymentURL = 'https://br.pinterest.com/'
            } else if (selectedInstallment === "3x") {
                paymentURL = 'https://canva.com'
            }
        }

        if (paymentURL){
            window.open(paymentURL, '_blank');
            window.location.href = '/agradecimento';
        }
    };

    return (
        <section className="flex flex-col items-center justify-center font-itim text-payment-txt_line_border text-xl md:text-3xl">
            <p className="text-center px-10 py-2">Você está a um passo de dar um Start na sua transformação!!!</p>
            <p className="text-center py-5">Escolha a sua forma de pagamento:</p>
            <div className="flex flex-row items-center justify-center gap-5 mt-6">
                <label
                    htmlFor="pix-checkbox"
                    className="flex flex-row justify-center items-center gap-2 bg-payment-background_box border border-payment-txt_line_border rounded-lg text-center w-40 h-20 md:w-60 md:h-28 cursor-pointer"
                >
                    <input
                        id="pix-checkbox"
                        type="checkbox"
                        className="rounded-full mb-2"
                        checked={selectedPayment === "PIX"}
                        onChange={() => handleCheckboxChange('PIX')}
                    />
                    <div className="flex flex-col justify-center items-center">
                        <p>PIX ou Boleto</p>
                        <p>R$ 167,90</p>
                    </div>
                </label>
                <label
                    htmlFor="cartao-checkbox"
                    className="flex flex-row justify-center items-center gap-2 bg-payment-background_box border border-payment-txt_line_border rounded-lg text-center w-40 h-20 md:w-60 md:h-28 cursor-pointer"
                >
                    <input
                        id="cartao-checkbox"
                        type="checkbox"
                        className="rounded-full mb-2"
                        checked={selectedPayment === "Cartão"}
                        onChange={() => handleCheckboxChange('Cartão')}
                    />
                    <div className="flex flex-col justify-center items-center">
                        <p>Cartão</p>
                        <p>em até 3 vezes</p>
                    </div>
                </label>
            </div>
            {selectedPayment === "PIX" && (
                <p className="mt-4 text-center px-5">
                    Você escolheu o PIX ou Boleto, o valor a vista fica R$ 167,90.
                </p>
            )}
            {selectedPayment === "Cartão" && (
                <div className="flex flex-col items-center">
                    <p className="mt-4 text-center">
                        Você escolheu o Cartão, selecione em quantas vezes você quer fazer:
                    </p>
                    <select
                        className="mt-4 p-2 border border-payment-txt_line_border bg-payment-background_box rounded"
                        value={selectedInstallment}
                        onChange={(e) => setSelectedInstallment(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        <option value="1x">1 X de R$ 167,90</option>
                        <option value="2x">2 X de R$ 93,95</option>
                        <option value="3x">3 X de R$ 63,96</option>
                    </select>
                </div>
            )}
            {selectedPayment && (
                <button
                    onClick={handleButtonClick}
                    className="mt-6 bg-payment-background_btn_footer text-payment-text_btn_footer hover:bg-payment-background_btn_footer_dark transition duration-300 rounded-lg font-itim p-2 px-8"
                >
                    Ir para o pagamento 
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
            )}
        </section>
    );
};

export default ContentPayment;