import React from "react";
import HeaderPayment from "./payments/HeaderPayment";
import ContentPayment from "./payments/ContentPayment";
import FooterPayment from "./payments/FooterPayment";


const Payment = () => {
  return (
    <div className="payment-page">
        <header>
            <HeaderPayment />
        </header>

        <hr className="border-t border-payment-txt_line_border my-6 w-5/6 mx-auto md:w-3/4"/>

        <main>
            <ContentPayment />
        </main>

        <footer className="mt-auto">
            <FooterPayment />
        </footer>
    </div> 
);
}

export default Payment;