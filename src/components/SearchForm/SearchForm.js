import React from "react";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import find from '../../images/find.png';
import findGrey from '../../images/find-grey.png';

function SearchForm ({ searchValue, setSearchValue, onSearchMovies, isCheckboxChecked, setIsCheckboxChecked }) {
    
    function handleSubmit (e) {
        e.preventDefault();
        onSearchMovies(searchValue);
    };

    const handleChange = e => {
        setSearchValue(e.target.value)
    }

    return (
        <section className="search-form">
            <div className="content-wrapper">
                <form className="search-form__form" onClick={handleSubmit}>
                    <img className="search-form__image" src={findGrey} alt="Найти" />
                    <input 
                        className='search-form__input' 
                        placeholder="Фильм" 
                        name="movie"
                        type="text"
                        onChange={handleChange}
                        value={searchValue}
                    ></input>
                    <button className="button button_theme_search" type="submit">
                        <img src={find} alt='Кнопка поиска' />
                    </button>
                </form>
                <FilterCheckBox isCheckboxChecked={isCheckboxChecked} setIsCheckboxChecked={setIsCheckboxChecked} />
            </div>
        </section>
    )
}

export default SearchForm;