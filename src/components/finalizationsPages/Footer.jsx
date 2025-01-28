import React from "react";

const Footer = () => {
    return (
        <footer className="font-itim">
            <div className="flex flex-col justify-center items-center h-20 py-2 bg-payment-background_box text-payment-text_btn_footer rounded-t-xl">
                <p>
                    Nutricionista Gerusa Lorenzetti
                </p>
                <p>
                    © 7Z Tecnologia - UNA {new Date().getFullYear()}
                </p>
                <p>
                    Todos os direitos reservados
                </p>
            </div>
            
        </footer>
    );
};

export default Footer;