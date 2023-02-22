import React from "react";
import headerLogo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Login () {
    return (
        <section className="auth-form">
            <div className="auth-form__wrapper">
                <img src={headerLogo} alt='logo' className="auth-form__logo" />
                <h1 className="auth-form__title">Рады видеть!</h1>
                <form className="auth-form__form">
                    <label className="auth-form__label">Email</label>
                    <input className="auth-form__input" type="email"></input>
                    <label className="auth-form__label">Пароль</label>
                    <input className="auth-form__input" type="password"></input>
                    <button className="button button_theme_auth" type="submit">Войти</button>
                    <Link to='/signup' className='auth-form__link'><span className='auth-form__link_grey'>Еще не зарегистрированы? </span>Регистрация</Link>
                </form>
            </div>
        </section>
    )
}

export default Login;