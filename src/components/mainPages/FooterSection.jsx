import React from "react";

const FooterSection = () => {
    return (
        <footer className="font-itim mt-9">
            <div className="h-20 py-2 bg-purple-default text-white rounded-t-xl">
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

export default FooterSection;