import s from './MovieDetailsPage.module.css'
import Loader from '../../components/Loader/Loader';
import fetchApi from '../../AppService';
import Button from '../../components/Button/Button';
import propTypes from 'prop-types';
import { Fragment } from 'react/cjs/react.production.min';
import OneMovie from '../../components/OneMovie/OneMovie';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export function MovieDetailsPage() {
  const { id } = useParams()
  const history = useHistory()
  const [status, setStatus] = useState('idle')
  const [page, setPage] = useState(1)
  const [error, setError] = useState(null)
  const [movie, setMovie] = useState({})


  useEffect(() => {
    setMovie({})
    setStatus('pending')
    fetchApi('movie', id.slice(3))
      .then(el => {
        if (el) {
          setMovie(el)
          setStatus('resolved')
          console.log(el);
        }
      })
      .catch(errorRejected => {
        setError(errorRejected);
        setStatus('rejected')
      }
      )
  }, [])


  const nextPage = () => {
    setPage(page + 1)
  };

  const prevPage = () => {
    setPage(page - 1)
  };


  return (
    <Fragment>
      {status === 'search' && <p className={s.idle}> </p>}
      {status === 'rejected' && <strong className={s.strong}>{error.message}</strong>}
      {status === 'resolved' && (<div className={s.box} >
        <OneMovie key={movie.id}
          obj={movie} />
        <Button action={() => { history.goBack() }}>Go back</Button>
      </div>)}
      {status === 'pending' && <Loader />}
      {/* <div className={s.navBox}>
        {status === 'resolved' && page > 1 ? <Button action={prevPage}>Prev Page ({page - 1})</Button> : ''}
        {status === 'resolved' && <p className={s.currentPage}>{page}</p>}
        {status === 'resolved' && <Button action={nextPage}>Next Page ({page + 1})</Button>}
      </div> */}
    </Fragment>
  )
}