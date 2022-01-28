import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom"
import { HomePage } from './pages/HomePage/HomePage'
import { MoviesPage } from "./pages/MoviesPage/MoviesPage"
import { ROUTERS } from "./consts"
import fetchApi from "./AppService"
import React, { useState, useEffect } from "react";
import s from './App.module.css'
import { ToastContainer } from "react-toastify";


export const App = () => {

  const [error, setError] = useState(null)

  /*   
  trending page 1 - fetchApi()
  trending - fetchApi('trending', '', {page})
  search page 1 - fetchApi('search', {value})
  search - fetchApi('search', {value}, {page})
  for id - fetchApi('movie', {id}})
  for id + credits (only credits) - fetchApi('movie', {id}, '', 'credits')
  for id + reviews (only reviews) - fetchApi('movie', {id}, {page}, 'reviews')
  */


  console.log(
    fetchApi()
      .then()
      .catch(errorRejected => {
        setError(errorRejected);
      })
  )


  return (
    <BrowserRouter>
      <header className={s.header}>
        <h1 className={s.logo}><span className={s.preLogo}>the</span>Movie</h1>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <NavLink to={ROUTERS.HOME} className={s.link}>Home</NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to={ROUTERS.MOVIES} className={s.link}>Movies</NavLink>
          </li>
        </ul>
      </header >

      <Switch>
        <Route path={ROUTERS.MOVIES} component={MoviesPage} />
        <Route path={ROUTERS.HOME} component={HomePage} exact />
      </Switch>
      <ToastContainer autoClose={4000} />
    </BrowserRouter >
  )
}