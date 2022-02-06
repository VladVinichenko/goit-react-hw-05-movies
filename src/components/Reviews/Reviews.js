import fetchApi from '../../AppService';
import { useEffect, useState, Fragment } from 'react'
import s from './Reviews.module.css'
import Loader from '../Loader/Loader'
import propTypes from 'prop-types';

function Reviews({ movieId }) {
  const [view, setView] = useState('idle')
  const [reviews, setReviews] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    if (reviews.results) {
      setReviews({})
      setView('idle')
      return
    }
    setReviews({})
    setView('pending')
    fetchApi('movie', movieId, 1, 'reviews')
      .then(el => {
        if (el) {
          setReviews(el)
          setView('resolved')
        }
      })
      .catch(errorRejected => {
        setError(errorRejected);
        setView('rejected')
      }
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <Fragment>
      {view === 'pending' && <Loader />}
      {view === 'idle' && <div>...</div>}
      {view === 'rejected' && <strong className={s.strong}>{error.message}</strong>}
      {view === 'resolved' && (<ul className={s.list}>
        {reviews.results.length === 0 && <li>No comments</li>}
        {reviews.results.length > 0 && reviews.results.map(el =>
          <li key={el.id} className={s.item}>
            <h3 className={s.title}>{el.author}</h3>
            <p className={s.text}>{el.content}</p>
            <p className={s.date}>{el.created_at}</p>
          </li>
        )}

      </ul>)}
    </Fragment>
  )
}

Reviews.propTypes = {
  movieId: propTypes.string.isRequired
}

export default Reviews