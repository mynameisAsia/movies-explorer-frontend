import React from "react";

function Footer () {
    return (
        <footer className="footer">
            <div className="content-wrapper">
                <p className="footer__paragraph">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__wrapper">
                    <span className="footer__copy">© 2023</span>
                    <ul className="footer__list">
                        <li><a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a></li>
                        <li><a className="footer__link" href="https://github.com/mynameisAsia">Github</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;