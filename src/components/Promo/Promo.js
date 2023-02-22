import React from "react";
import promoLogo from '../../images/landing-logo.png';

function Promo () {
    return (
        <section className="promo">
            <div className="content-wrapper">
                <div className="promo__wrapper">
                    <div>
                        <h1 className="promo__name">Учебный проект студента факультета Веб-разработки.</h1>
                        <p className="promo__paragraph">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                        <div className="promo__more-div">
                            <a href="#about-project" className="promo__more">Узнать больше</a>
                        </div>
                    </div>
                    <img src={promoLogo} alt="Логотип Промо" className="promo__logo"></img>
                </div>
            </div>
        </section>
    )
}

export default Promo;