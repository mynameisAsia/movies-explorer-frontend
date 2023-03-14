import React from "react";
import { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useValidation from "../../hooks/useValidation";

function Profile ({ onEditProfile, onLogout, isBurgerClicked, openMobileMenu }) {

    const currentUser = React.useContext(CurrentUserContext);
    const [loading, setLoading] = useState(false);
    const { values, errors, setValues, handleChange, isFormValid, setIsFormValid } = useValidation();

    useEffect(() => {
        setValues({ email: currentUser.data.email, name: currentUser.data.name })
        setIsFormValid(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleSubmit (e) {
        e.preventDefault();
        setLoading(true);
        onEditProfile({ 
            name: values.name,
            email: values.email
        })
    }; 

    return (
        <>
        <Navigation isBurgerClicked={isBurgerClicked} openMobileMenu={openMobileMenu} />
        <section className="profile">
            <div className="profile__wrapper">
                <h1 className="profile__title">Привет, {currentUser.data.name}!</h1>
                <form id="form" className="profile__form" onSubmit={handleSubmit} noValidate>
                    <label className="profile__box">
                        Имя
                        <input
                            className="profile__input"
                            type="name"
                            name="name"
                            minLength="2"
                            maxLength="40"
                            value={values.name || ''}
                            onChange={handleChange}
                            required
                        ></input>
                        <span className="profile__input-error">{errors.name}</span>
                    </label>
                    <label className="profile__box">
                        E-mail
                        <input
                            className="profile__input"
                            type="email"
                            name="email"
                            value={values.email || ''}
                            onChange={handleChange}
                            required
                        ></input>
                        <span className="profile__input-error">{errors.email}</span>
                    </label>
                    <button
                        type="submit"
                        disabled={!isFormValid ? true : false}
                        className={!isFormValid || loading || 
                        (values.email === currentUser.data.email && values.name === currentUser.data.name)
                        ? 'button button_theme_edit button_inactive' : 'button button_theme_edit'}>
                        Редактировать
                    </button>
                    <button type="button" className="button button_theme_logout" onClick={onLogout}>
                        Выйти из аккаунта
                    </button>
                </form>
            </div>
        </section>
        </>
    )
}

export default Profile;