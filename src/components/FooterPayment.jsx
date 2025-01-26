import React from "react";

const FooterPayment = () => {
    return (
        <footer className="font-itim mt-9">
            <div className="h-16 py-2 bg-payment-background_btn_footer text-payment-text_btn_footer rounded-t-xl flex flex-col justify-center items-center text-sm">
                <p>
                    Nutricionista Gerusa Lorenzetti
                </p>
                <p>
                    © 7Z Tecnologia - UNA {new Date().getFullYear()} - Todos os direitos reservados
                </p>
            </div>
            
        </footer>
    );
};

export default FooterPayment;