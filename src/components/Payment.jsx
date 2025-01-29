import React from "react";
import Header from "./finalizationsPages/Header";
import ContentPayment from "./finalizationsPages/ContentPayment";
import Footer from "./finalizationsPages/Footer";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import green_cup from "../assets/images/green_cup.webp";

const Payment = () => {
  return (
    <div className="payment-page App bg-repeat bg-auto" style={{backgroundImage: `url(${green_cup})`}}>
        <header>
            <Header 
                title="Pagamento Start 21" 
                icon={faShoppingCart}
                iconClass="text-4xl mx-2 transform -rotate-12"
            />
        </header>

        <hr className="border-t border-payment-txt_line_border my-6 w-5/6 mx-auto md:w-3/4"/>

        <main>
            <ContentPayment />
        </main>

        <footer className="mt-auto">
            <Footer />
        </footer>
    </div> 
);
}

export default Payment;