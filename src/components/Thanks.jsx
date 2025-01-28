import React from "react";
import Header from "./finalizationsPages/Header";
import ContentThanks from "./finalizationsPages/ContentThanks";
import Footer from "./finalizationsPages/Footer";
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Thanks = () => {
  return (
    <div className="payment-page">
        <header>
            <Header
                title='<span class="md:text-5xl text-4xl text-white">MUITO OBRIGADA!</span>'
                icon={faHeart}
                iconClass="text-4xl mx-2 text-yellow-default breathing"
            />
        </header>

        <hr className="border-t border-payment-txt_line_border my-6 w-5/6 mx-auto md:w-3/4"/>

        <main>
            <ContentThanks />
        </main>

        <footer className="mt-auto">
            <Footer />
        </footer>
    </div> 
);
}

export default Thanks;