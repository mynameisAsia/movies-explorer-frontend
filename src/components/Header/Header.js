import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Header () {

    return (
        <header className="header">
            <div className="content-wrapper">
                <div className="header__wrapper">
                    <Link to='/' >
                        <img src={logo} alt='logo' className="logo" />
                    </Link>
                    <div className="header__menu">
                        <Link className="header__signup" to="/signup">
                            Регистрация
                        </Link>
                        <div className="header__signin-div">
                            <Link className="header__signin" to="/signin">
                                Войти
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;