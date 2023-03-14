import React from "react";

function MenuBurger({ isBurgerClicked, openMobileMenu }) {
    return (
        <div className={`burger ${isBurgerClicked && 'burger_active' }`} onClick={openMobileMenu}>
            <div className={`burger__item ${isBurgerClicked && 'burger__item_active' }`}></div>
            <div className={`burger__item ${isBurgerClicked && 'burger__item_active' }`}></div>
            <div className={`burger__item ${isBurgerClicked && 'burger__item_active' }`}></div>
        </div>
    )
}

export default MenuBurger;