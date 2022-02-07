import { BrowserRouter, NavLink, Route, Switch, Redirect } from "react-router-dom"
import { HomePage } from './pages/HomePage/HomePage'
import { MoviesPage } from "./pages/MoviesPage/MoviesPage"
import { MovieDetailsPage } from "./pages/MovieDetailsPage/MovieDetailsPage"
import { ROUTERS } from "./consts"
import s from './App.module.css'
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react"


export const App = () => {
  const [searchName, setSearchName] = useState()

  const setSearchUrl = el => {
    setSearchName(el)
  }

  return (
    <BrowserRouter>
      <header className={s.header}>
        <NavLink to={ROUTERS.HOME}>
          <h1 className={s.logo}><span className={s.preLogo}>the</span>Movie</h1>
        </NavLink>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <NavLink to={ROUTERS.HOME} exact activeClassName={s.selected} className={s.link}>Home</NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to={{
              pathname: `${ROUTERS.MOVIES}`,
              search: ``
            }} exact activeClassName={s.selected} className={s.link}>Movies</NavLink>
          </li>
        </ul>
      </header >
      <Switch>
        <Route path={ROUTERS.MOVIES + ROUTERS.ONE_MOVIE} component={MovieDetailsPage} />
        <Route path={ROUTERS.MOVIES} >
          <MoviesPage urlSearch={setSearchUrl} />
        </Route>
        <Route path={ROUTERS.HOME} component={HomePage} exact />
        <Redirect to={ROUTERS.HOME} />
      </Switch>
      <ToastContainer autoClose={4000} />
    </BrowserRouter >
  )
}