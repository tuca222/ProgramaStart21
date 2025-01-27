import React from "react";
import HeaderSection from "./HeaderSection";
import IntroductionSection from "./IntroductionSection";
import WeekSection from "./WeekSection";
import BenefitsSection from "./BenefitsSection";
import HowItWorksSection from "./HowItWorksSection";
import RegistrationSection from "./RegistrationSection";
import DepositionSection from "./DepositionSection";
import FAQSection from "./FAQSection";
import MyStorySection from "./MyStorySection";
import FooterSection from "./FooterSection";
// import TexturaFundo from "../assets/images/TexturaFundo.png";
import leaves from "../assets/images/leaves.webp";

const LandingPage = () => {
    return (
        <div className="App bg-repeat bg-auto" style={{backgroundImage: `url(${leaves})`}}>
            <header className="App-header bg-repeat bg-auto" style={{backgroundImage: `url(${leaves})`}}>
                <HeaderSection />
            </header>
            
            <hr className="border-t border-black my-6 w-3/4 mx-auto"/>

            <main>
                <IntroductionSection />

                <hr className="border-t border-black my-4 w-3/4 mx-auto"/>
                
                <WeekSection />

                <hr className="border-t border-black my-4 w-3/4 mx-auto mb-6"/>

                <BenefitsSection />

                <hr className="border-t border-black my-4 w-3/4 mx-auto"/>

                <HowItWorksSection id="ComoIraFuncionar" />

                <hr className="border-t border-black my-4 w-3/4 mx-auto"/>

                <RegistrationSection id="Participe"/>

                <hr className="border-t border-black my-4 w-3/4 mx-auto"/>

                <DepositionSection />

                <hr className="border-t border-black my-4 w-3/4 mx-auto"/>

                <FAQSection />

                <hr className="border-t border-black my-4 w-3/4 mx-auto"/>

                <MyStorySection />

            </main>

            <footer>
                <FooterSection />
            </footer>
        </div>
    );
};

export default LandingPage;