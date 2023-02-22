import React from "react";
import { Link, NavLink } from "react-router-dom";
import MenuBurger from "../MenuBurger/MenuBurger";
import logo from '../../images/logo.svg'
import MobileNavBar from "../MobileNavBar/MobileNavBar";

function Navigation () {
    return (
        <div className="navigation">
            <div className="content-wrapper">
                <div className="navigation__wrapper">
                    <nav className="navigation__menu">
                        <Link to='/' >
                            <img src={logo} alt='logo' className="logo" />
                        </Link>
                        <ul className="navigation__list">
                            <li className="navigation__list-item"><NavLink className="navigation__link" to='/movies'>Фильмы</NavLink></li>
                            <li className="navigation__list-item"><NavLink className="navigation__link" to='/saved-movies'>Сохраненные фильмы</NavLink></li>
                        </ul>
                    </nav>
                    <NavLink className="navigation__account" to='/profile'>
                        Аккаунт
                        <div className="navigation__icon navigation__icon-div"></div>
                    </NavLink>
                    <MenuBurger />
                    <MobileNavBar />
                </div>
            </div>
        </div>
    )
} 

export default Navigation;