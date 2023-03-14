import React from "react";
import { NavLink } from "react-router-dom";
import MenuBurger from "../MenuBurger/MenuBurger";

function MobileNavBar ({ isBurgerClicked, openMobileMenu }) {
    return (
        <div className={`popup ${isBurgerClicked && 'popup_opened'}`}>       
            <div className="popup__overlay"></div>
            <div className="popup__content">
                <MenuBurger isBurgerClicked={isBurgerClicked} openMobileMenu={openMobileMenu} />
                <nav className="popup__nav">
                    <ul className="popup__links">
                        <li className="popup__list-item"><NavLink className="popup__link" to='/'>Главная</NavLink></li>
                        <li className="popup__list-item"><NavLink className="popup__link" to='/movies'>Фильмы</NavLink></li>
                        <li className="popup__list-item"><NavLink className="popup__link" to='/saved-movies'>Сохраненные фильмы</NavLink></li>
                    </ul>
                </nav>
                <NavLink className="popup__account" to='/profile'>
                Аккаунт
                    <div className="navigation__icon navigation__icon-div"></div>
                </NavLink>
            </div>
        </div>
    )
}

export default MobileNavBar;