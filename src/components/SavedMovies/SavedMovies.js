import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function SavedMovies () {
    return (
        <section className="saved-movies">
            <Navigation />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </section>
    )
}

export default SavedMovies;