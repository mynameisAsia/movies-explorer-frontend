import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Error from "../Error/Error";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

function App() {


  return (
    <div className="page">
      <Routes>
        <Route path='/signin' element={
          <Login />}>
        </Route>
        <Route path='/signup' element={
          <Register />}> 
        </Route>
        <Route path='/profile' element={
          <Profile />}>
        </Route>
        <Route exact path='/' element={
          <Main />}>
        </Route>
        <Route path='*' element={
          <Error />}>
        </Route>
        <Route path='/movies' element={
          <Movies />}>
        </Route>
        <Route path='/saved-movies' element={
          <SavedMovies />}>
        </Route>
    </Routes>
    </div>
  );
}

export default App;
