import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer';

function Movies () {

    return (
        <section className="movies">
            <Navigation />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </section>
    )
}

export default Movies;