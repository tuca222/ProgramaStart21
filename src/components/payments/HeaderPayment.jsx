import React from 'react';
import Logo from "../../assets/images/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const HeaderPayment = () => {
  return (
  <div className="flex flex-col justify-center items-center gap-5 font-itim text-3xl text-payment-txt_line_border">
    <img
        src={Logo}
        alt="Logo da Nutricionista Gerusa Lorenzetti"
        className="mx-auto object-cover w-80"
    />
    
    <h1>Pagamento Start 21</h1>
    <FontAwesomeIcon 
        icon={faShoppingCart}
        className="text-4xl mx-2 transform -rotate-12"
    />
    </div>
  );
};

export default HeaderPayment;