import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import { HomePage } from './pages/HomePage/HomePage'
import { MoviesPage } from "./pages/MoviesPage/MoviesPage"
import { ROUTERS } from "./consts"
import fetchApi from "./AppService"


console.log(fetchApi('trending'));

export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>This is app</h1>

      </header>
      <ul>
        <li>
          <Link to={ROUTERS.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTERS.MOVIES}>Movies</Link>
        </li>
      </ul>
      <Switch>
        <Route path={ROUTERS.HOME} component={HomePage} />
        <Route path={ROUTERS.MOVIES} component={MoviesPage} />
      </Switch>
    </BrowserRouter
    >
  )
}