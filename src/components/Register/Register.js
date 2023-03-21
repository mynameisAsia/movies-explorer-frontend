import React, { useEffect } from "react";
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useValidation";

function Register ({ onRegister }) {

    const { values, errors, handleChange, setValues, isFormValid } = useValidation();

    useEffect(() => {
        setValues({ email: '', password: '' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    function handleSubmit (e) {
        e.preventDefault();
        onRegister({
            name: values.name,
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
                <h1 className="auth-form__title">Добро пожаловать!</h1>
                <form id="form" className="auth-form__form" onSubmit={handleSubmit} isFormValid={isFormValid}>
                    <label className="auth-form__label">Имя</label>
                    <input 
                        className="auth-form__input" 
                        type="name"
                        name="name"
                        minLength="2"
                        maxLength="40"
                        value={values.name || ''}
                        onChange={handleChange}
                        required
                    ></input>
                    <span className="auth-form__input-error">{errors.name}</span>
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
                        minLength="6"
                        maxLength="30"
                        value={values.password || ''}
                        onChange={handleChange}
                        required
                    ></input>
                    <span className="auth-form__input-error">{errors.password}</span>
                    <button 
                        className={isFormValid ? "button button_theme_register" : "button_theme_register button_inactive"} 
                        type="submit"
                        disabled={!isFormValid ? true : false}
                    >Зарегистрироваться</button>
                    <Link to='/signin' className='auth-form__link'><span className='auth-form__link_grey'>Уже зарегистрированы? </span>Войти</Link>
                </form>
            </div>
        </section>
    )
}

export default Register;