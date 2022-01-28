import { BrowserRouter, Route } from "react-router-dom"
import { HomePage } from './pages/HomePage/HomePage'

export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>This is app</h1>

      </header>
      <ul>
        <li>Home</li>
        <li>Movies</li>
      </ul>
      <Route path='/' component={HomePage} exact />

    </BrowserRouter
    >
  )
}