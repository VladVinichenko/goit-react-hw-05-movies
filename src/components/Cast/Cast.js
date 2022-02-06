import fetchApi from '../../AppService';
import { useEffect, useState, Fragment } from 'react'
import s from './Cast.module.css'
import Loader from '../Loader/Loader';
import propTypes from 'prop-types';


function Cast({ movieId }) {
  const [view, setView] = useState('idle')
  const [cast, setCast] = useState('')
  const [error, setError] = useState('')


  const IMG_URL = 'https://image.tmdb.org/t/p/w500';


  const fetchMovies = () => {
    try {
      if (cast.cast) {
        setCast('')
        return
      }
      setCast('')
      setView('pending')
      fetchApi('movie', movieId, '', 'credits')
        .then(el => {
          if (el) {
            setCast(el)
            setView('resolved')
          }
        })
        .catch(errorRejected => {
          setError(errorRejected);
          setView('rejected')
        }
        )
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {

    movieId && fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId])

  return (
    <Fragment>
      {view === 'pending' && <Loader />}
      {view === 'idle' && <div>...</div>}
      {view === 'rejected' && <strong className={s.strong}>{error.message}</strong>}
      {view === 'resolved' && (
        <ul className={s.list}>
          {cast.cast && cast.cast.map(el =>
            <li key={el.cast_id} className={s.item}>
              {el.profile_path ? (
                <img className={s.portrait} src={IMG_URL + el.profile_path} alt={el.name} loading="lazy" />
              ) : (
                <div className={s.noImage}>No photo</div>
              )
              }
              <h3 className={s.title}>{el.name}</h3>
            </li>
          )}
        </ul>
      )}

      {/* <p>{movieId}</p> */}

    </Fragment>
  )
}

Cast.propTypes = {
  movieId: propTypes.string.isRequired
}


export default Cast