import React, { useEffect } from "react";
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useValidation";

function Login ({ onLogin }) {

    const { values, errors, handleChange, setValues, isFormValid } = useValidation();

    useEffect(() => {
        setValues({ email: '', password: '' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleSubmit(e) {
        e.preventDefault();

        onLogin({
            email: values.email,
            password: values.password
        });
    }

    return (
        <section className="auth-form">
            <div className="auth-form__wrapper">
                <Link to='/' >
                    <img src={logo} alt='logo' className="logo" />
                </Link>
                <h1 className="auth-form__title">Рады видеть!</h1>
                <form id="form" className="auth-form__form" onSubmit={handleSubmit} isFormValid={isFormValid}>
                    <label className="auth-form__label">Email</label>
                    <input 
                        className="auth-form__input" 
                        type="email"
                        name="email"
                        value={values.email || ''}
                        onChange={handleChange}
                        required
                    ></input>
                    <span className="auth-form__input-error">{errors.email}</span>
                    <label className="auth-form__label">Пароль</label>
                    <input 
                        className="auth-form__input" 
                        type="password"
                        name="password"
                        value={values.password || ''}
                        onChange={handleChange}
                        required
                    ></input>
                    <span className="auth-form__input-error">{errors.password}</span>
                    <button 
                        className={isFormValid ? "button button_theme_auth" : "button_theme_auth button_inactive"} 
                        type="submit"
                        disabled={!isFormValid ? true : false}
                    >Войти</button>
                    <Link to='/signup' className='auth-form__link'><span className='auth-form__link_grey'>Еще не зарегистрированы? </span>Регистрация</Link>
                </form>
            </div>
        </section>
    )
}

export default Login;