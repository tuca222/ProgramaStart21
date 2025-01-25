import React from "react";
import HeaderSection from "./HeaderSection";
import IntroductionSection from "./IntroductionSection";
import WeekSection from "./WeekSection";
import BenefitsSection from "./BenefitsSection";
import RegistrationSection from "./RegistrationSection";
import DepositionSection from "./DepositionSection";
import FAQSection from "./FAQSection";
import MyStorySection from "./MyStorySection";
import FooterSection from "./FooterSection";

const LandingPage = () => {
    return (
        <div className="App bg-white">
            <header className="App-header">
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

                <RegistrationSection id="registrationSection"/>

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