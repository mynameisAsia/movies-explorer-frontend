import React from "react";
import headerLogo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Register () {
    return (
        <section className="auth-form">
            <div className="auth-form__wrapper">
                <img src={headerLogo} alt='logo' className="auth-form__logo" />
                <h1 className="auth-form__title">Добро пожаловать!</h1>
                <form className="auth-form__form">
                    <label className="auth-form__label">Имя</label>
                    <input className="auth-form__input" type="name"></input>
                    <label className="auth-form__label">Email</label>
                    <input className="auth-form__input" type="email"></input>
                    <label className="auth-form__label">Пароль</label>
                    <input className="auth-form__input" type="password"></input>
                    <button className="button button_theme_register" type="submit">Зарегистрироваться</button>
                    <Link to='/signin' className='auth-form__link'><span className='auth-form__link_grey'>Уже зарегистрированы? </span>Войти</Link>
                </form>
            </div>
        </section>
    )
}

export default Register;