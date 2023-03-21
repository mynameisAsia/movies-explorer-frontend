import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as api from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Error from "../Error/Error";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import InfoTooltip from '../InfoToolTip/InfoTooltip';

function App() {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isBurgerClicked, setIsBurgerClicked] = React.useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState({ status: '', message: '' });

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
        .then(() => {
          handleLogin({ email, password });
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
                setCurrentUser(res);
            }
            })
            .catch((err) => console.log(err));
    }
  }, []);

  function handleEditProfileClick (data) {
      api.updateUserInfo(data)
        .then((res) => {
          setIsTooltipVisible(true)
          setTooltipMessage({ status: 'ok', message: 'Информация обновлена!' })
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
          setIsTooltipVisible(true)
          setTooltipMessage({ status: 'error', message: err.message || 'Что то пошло не так, попробуйте еще раз' })
        });
  };

  function handleLogout () {
      setLoggedIn(false);
      localStorage.clear();
      navigate('/');
  };

  function handleCardLike (card) {

      const image = `https://api.nomoreparties.co/${card.image.url}`;
      const thumbnail = `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`;
      const movieId = card.id;
      const { country, director, duration, year, description, trailerLink, nameRU, nameEN } = card;

      api.saveMovie({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      })
        .then(({ data }) => {
          setSavedMovies((savedMovies) => [...savedMovies, data]);
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

  function handleClickBurgerMenu() {
    if (loggedIn) {
        setIsBurgerClicked(!isBurgerClicked);
    }
  };

  useEffect(() => {
    if (isTooltipVisible) {
      setTimeout(() => {
        setIsTooltipVisible(false)
      }, 1500)
    }
  }, [isTooltipVisible])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route exact path='/' element={
            <>
            <Header loggedIn={loggedIn} isBurgerClicked={isBurgerClicked} openMobileMenu={handleClickBurgerMenu} />
            <ProtectedRoute loggedIn={loggedIn} component={Main} onlyUnAuth/>
            <Footer />
            </>
          }>
          </Route>
          <Route path='/signin' element={!loggedIn? <Login onLogin={handleLogin} /> : <Navigate to='/movies' />}></Route>
          <Route path='/signup' element={!loggedIn? <Register onRegister={handleRegister} /> : <Navigate to='/movies'/>}></Route>
          <Route path='/profile' element={
            <ProtectedRoute
              component={Profile}
              loggedIn={loggedIn}
              onEditProfile={handleEditProfileClick}
              onLogout={handleLogout}
              isBurgerClicked={isBurgerClicked}
              openMobileMenu={handleClickBurgerMenu}
            ></ProtectedRoute>}
          ></Route>
          <Route path='/movies' element={
            <ProtectedRoute 
              loggedIn={loggedIn}
              component={Movies}
              savedMovies={savedMovies}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              isBurgerClicked={isBurgerClicked}
              openMobileMenu={handleClickBurgerMenu}
            >
            </ProtectedRoute>}
          ></Route>
          <Route path='/saved-movies' element={
            <ProtectedRoute 
              loggedIn={loggedIn} 
              component={SavedMovies}
              savedMovies={savedMovies}
              onCardDelete={handleCardDelete}
              isBurgerClicked={isBurgerClicked} 
              openMobileMenu={handleClickBurgerMenu}
              >
            </ProtectedRoute>}
          ></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
        <InfoTooltip isTooltipVisible={isTooltipVisible} tooltipMessage={tooltipMessage} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
