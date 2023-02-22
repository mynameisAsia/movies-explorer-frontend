import React from "react";
import arrow from '../../images/arrow.png';

function Portfolio () {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item"><a className="portfolio__link" href="https://github.com/mynameisAsia/how-to-learn" target="_blank" rel="noreferrer"><span>Статичный сайт</span><img src={arrow} alt="Стрелочка" className="portfolio__arrow" /></a></li>
                <li className="portfolio__item"><a className="portfolio__link" href="https://github.com/mynameisAsia/russian-travel" target="_blank" rel="noreferrer"><span>Адаптивный сайт</span><img src={arrow} alt="Стрелочка" className="portfolio__arrow" /></a></li>
                <li className="portfolio__item"><a className="portfolio__link" href="https://github.com/mynameisAsia/react-mesto-api-full" target="_blank" rel="noreferrer"><span>Одностраничное приложение</span><img src={arrow} alt="Стрелочка"className="portfolio__arrow" /></a></li>
            </ul>
        </div>
    )
}

export default Portfolio;