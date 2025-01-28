import React from 'react';
import Logo from "../../assets/images/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ title, icon, iconClass }) => {
  return (
  <div className="flex flex-col justify-center items-center text-center gap-5 font-itim text-3xl text-payment-txt_line_border">
    <img
        src={Logo}
        alt="Logo da Nutricionista Gerusa Lorenzetti"
        className="mx-auto object-cover w-80"
    />
    
    <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
    <FontAwesomeIcon 
        icon={icon}
        className={iconClass}
    />
    </div>
  );
};

export default Header;