import React from "react";
import film1 from '../../images/film1.png';
import film2 from '../../images/film2.png';
import film3 from '../../images/film3.png';
import film4 from '../../images/film4.png';
import film5 from '../../images/film5.png';
import film6 from '../../images/film6.png';
import film7 from '../../images/film7.png';
import film8 from '../../images/film8.png';
import film9 from '../../images/film9.png';
import film10 from '../../images/film10.png';
import film11 from '../../images/film11.png';
import film12 from '../../images/film12.png';

function MoviesCard () {
    return (
        <>
        <li className="movies-card">
            <a className="movies-card" href="/" target="_blank">
                <button type="button" className="button button_theme_save">Сохранить</button>
                <img className="movies-card__pic" src={film1} alt="Название фильма" />
                <div className="movies-card__title">
                    <h3 className="movies-card__name">33 слова о дизайне</h3>
                    <p className="movies-card__time">1ч 17м</p>
                </div>
            </a>
        </li>
        <li>
            <a className="movies-card" href="/" target="_blank">
                <img className="movies-card__pic" src={film2} alt="Название фильма" />
                <div className="movies-card__title">
                    <h3 className="movies-card__name">Киноальманах «100 лет дизайна»</h3>
                    <p className="movies-card__time">1ч 17м</p>
                </div>
            </a>
        </li>
        <li>
            <a className="movies-card" href="/" target="_blank">
                <img className="movies-card__pic" src={film3} alt="Название фильма" />
                <div className="movies-card__title">
                    <h3 className="movies-card__name">В погоне за Бенкси</h3>
                    <p className="movies-card__time">1ч 17м</p>
                </div>
            </a>
        </li>
        <li>
            <a className="movies-card" href="/" target="_blank">
                <img className="movies-card__pic" src={film4} alt="Название фильма" />
                <div className="movies-card__title">
                    <h3 className="movies-card__name">Баския: Взрыв реальности</h3>
                    <p className="movies-card__time">1ч 17м</p>
                </div>
            </a>
        </li>
        <li>
            <a className="movies-card" href="/" target="_blank">
                <img className="movies-card__pic" src={film5} alt="Название фильма" />
                <div className="movies-card__title">
                    <h3 className="movies-card__name">Бег это свобода</h3>
                    <p className="movies-card__time">1ч 17м</p>
                </div>
            </a>
        </li>
        <li>
            <a className="movies-card" href="/" target="_blank">
                <img className="movies-card__pic" src={film6} alt="Название фильма" />
                <div className="movies-card__title">
                    <h3 className="movies-card__name">Книготорговцы</h3>
                    <p className="movies-card__time">1ч 17м</p>
                </div>
            </a>
        </li>
        <li>
            <a className="movies-card" href="/" target="_blank">
                <img className="movies-card__pic" src={film7} alt="Название фильма" />
                <div className="movies-card__title">
                    <h3 className="movies-card__name">Когда я думаю о Германии ночью</h3>
                    <p className="movies-card__time">1ч 17м</p>
                </div>
            </a>
        </li>
        <li>
            <a className="movies-card" href="/" target="_blank">
                <img className="movies-card__pic" src={film8} alt="Название фильма" />
                <div className="movies-card__title">
                    <h3 className="movies-card__name">Gimme Danger: История Игги и The Stooges</h3>
                    <p className="movies-card__time">1ч 17м</p>
                </div>
            </a>
        </li>
        <li>
            <a className="movies-card" href="/" target="_blank">
                <img className="movies-card__pic" src={film9} alt="Название фильма" />
                <div className="movies-card__title">
                    <h3 className="movies-card__name">Дженис: Маленькая девочка грустит</h3>
                    <p className="movies-card__time">1ч 17м</p>
                </div>
            </a>
        </li>
        <li>
            <a className="movies-card" href="/" target="_blank">
                <img className="movies-card__pic" src={film10} alt="Название фильма" />
                <div className="movies-card__title">
                    <h3 className="movies-card__name">Соберись перед прыжком</h3>
                    <p className="movies-card__time">1ч 17м</p>
                </div>
            </a>
        </li>
        <li>
            <a className="movies-card" href="/" target="_blank">
                <img className="movies-card__pic" src={film11} alt="Название фильма" />
                <div className="movies-card__title">
                    <h3 className="movies-card__name">Пи Джей Харви: A dog called money</h3>
                    <p className="movies-card__time">1ч 17м</p>
                </div>
            </a>
        </li>
        <li>
            <a className="movies-card" href="/" target="_blank">
                <img className="movies-card__pic" src={film12} alt="Название фильма" />
                <div className="movies-card__title">
                    <h3 className="movies-card__name">По волнам: Искусство звука в кино</h3>
                    <p className="movies-card__time">1ч 17м</p>
                </div>
            </a>
        </li>
    </>
    )
}

export default MoviesCard;