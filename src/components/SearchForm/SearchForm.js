import React from "react";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import find from '../../images/find.png';
import findGrey from '../../images/find-grey.png';

function SearchForm () {
    return (
        <section className="search-form">
            <div className="content-wrapper">
                <form className="search-form__form">
                    <img className="search-form__image" src={findGrey} alt="Найти" />
                    <input className='search-form__input' placeholder="Фильм"></input>
                    <button className="button button_theme_search" type="submit">
                        <img src={find} alt='Кнопка поиска' />
                    </button>
                </form>
                <FilterCheckBox />
            </div>
        </section>
    )
}

export default SearchForm;