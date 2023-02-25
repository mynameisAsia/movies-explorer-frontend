import React from "react";
import Promo from "../Promo/Promo";
import Header from "../Header/Header";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

function Main () {
    return (
        <main className="content">
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
        </main>
    )
}

export default Main;