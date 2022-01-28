import fetchApi from '../../AppService';
import { useEffect, useState } from 'react/cjs/react.development';
import s from './Cast.module.css'
import Loader from '../Loader/Loader';
import propTypes from 'prop-types';
import { Fragment } from 'react/cjs/react.production.min';


function Cast({ modieId }) {
  const [view, setView] = useState('idle')
  const [cast, setCast] = useState({})
  const [error, setError] = useState(null)

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    if (cast.cast) {
      setCast({})
      return
    }
    setCast({})
    setView('pending')
    fetchApi('movie', modieId.slice(3), '', 'credits')
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
  }, [])

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
    </Fragment>
  )
}

Cast.propTypes = {
  modieId: propTypes.string.isRequired
}


export default Cast