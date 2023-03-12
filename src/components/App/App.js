import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as api from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Error from "../Error/Error";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

function App() {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
      if (loggedIn) {
        api.getUserInfo()
          .then((res) => {
            setCurrentUser(res);
          })
          .catch((err) => console.log(err));
      }
  }, [loggedIn]);

  useEffect(() => {
      if (loggedIn) {
        api.getSavedMovies()
          .then((res) => {
            setSavedMovies(res.reverse());
          })
      }
  }, [loggedIn]);

  function handleRegister({name, email, password}) {
    api.register(name, email, password)
        .then((res) => {
            if (res) {
                navigate('/signin');
            }
        })
        .catch((err) => {
            console.log(err);
        }
    )
  }

  function handleLogin({email, password}) {
      api.login(email, password)
          .then((res) => {
              if (res.token) {
                  setLoggedIn(true);
                  localStorage.setItem('jwt', res.token);
                  navigate('/movies');
              }
          })
          .catch((err) => {
              console.log(err);
          }
      )
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        api.tokenCheck(jwt)
            .then((res) => {
            if (res) {
                setLoggedIn(true);
            }
            })
            .catch((err) => console.log(err));
    }
  }, [navigate]);

  function handleEditProfileClick (data) {
      api.updateUserInfo(data)
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => console.log(err));
  };

  function handleLogout () {
      setLoggedIn(false);
      localStorage.removeItem('jwt');
      navigate('/')
  };

  function handleCardLike (card) {

      const image = `https://api.nomoreparties.co/${card.image.url}`
      const thumbnail = `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`
      const movieId = card.id
      const { country, director, duration, year, description, trailerLink, nameRU, nameEN } = card

      api.saveMovie({
        country,
        director,
        duration,
        year,
        description,
        trailerLink,
        nameRU,
        nameEN,
        image,
        thumbnail,
        movieId,
      })
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => console.log(err));
  };

  function handleCardDelete (card) {

      api.deleteMovie(card._id)
        .then(() => {
          setSavedMovies((savedMovies) => savedMovies.filter((currentCard) => currentCard._id !== card._id));
        })
        .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route 
            path='/signin' 
            element={<Login onLogin={handleLogin} />}
          >
          </Route>
          <Route 
            path='/signup' 
            element={<Register onRegister={handleRegister} />}
          > 
          </Route>
          <Route path='/profile' element={
            <ProtectedRoute 
              component={Profile}
              loggedIn={loggedIn}
              onEditProfile={handleEditProfileClick}
              onLogout={handleLogout}
            >
            </ProtectedRoute>
            }> 
          </Route>
          <Route exact path='/' element={
            <Main />}>
          </Route>
          <Route path='*' element={
            <Error />}>
          </Route>
          <Route path='/movies' element={
            <ProtectedRoute 
              loggedIn={loggedIn}
              component={Movies}
              savedMovies={savedMovies}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            >
            </ProtectedRoute>
            }>
          </Route>
          <Route path='/saved-movies' element={
            <ProtectedRoute 
              loggedIn={loggedIn} 
              component={SavedMovies}
              savedMovies={savedMovies}
              onCardDelete={handleCardDelete}>
            </ProtectedRoute>
            }>
          </Route>
      </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
