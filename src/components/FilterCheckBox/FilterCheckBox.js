import React from "react";

function FilterCheckBox () {
    return (
        <section className="filter">
            <label className="filter__wrapper">
                <input className="filter__input"></input>
                <span className="filter__switch"></span>
                <p className="filter__title">Короткометражки</p>
            </label>
        </section>
    )
}

export default FilterCheckBox;