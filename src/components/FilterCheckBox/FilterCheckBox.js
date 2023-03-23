import React from "react";

function FilterCheckBox ({ isCheckboxChecked, setIsCheckboxChecked }) {

    function handleChange () {
        setIsCheckboxChecked(!isCheckboxChecked);
    }

    return (
        <section className="filter">
            <label className="filter__wrapper">
                <input className="filter__input" type="checkbox" defaultChecked={isCheckboxChecked} onChange={handleChange}></input>
                <span className="filter__switch"></span>
                <p className="filter__title">Короткометражки</p>
            </label>
        </section>
    )
}

export default FilterCheckBox;