import s from './MovieDetailsPage.module.css'
import { Fragment } from 'react/cjs/react.production.min';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import fetchApi from '../../AppService';

import Loader from '../../components/Loader/Loader';
import Section from '../../components/Section/Section';

const Button = lazy(() => import('../../components/Button/Button.js'))
const OneMovie = lazy(() => import('../../components/OneMovie/OneMovie.js'))
const DetailedMovieData = lazy(() => import('../../components/DetailedMovieData/DetailedMovieData'))

export function MovieDetailsPage() {
  const { id } = useParams()
  const history = useHistory()
  const [status, setStatus] = useState('idle')
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
        }
      })
      .catch(errorRejected => {
        setError(errorRejected);
        setStatus('rejected')
      }
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])




  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Section>
          {status === 'search' && <p className={s.idle}> </p>}
          {status === 'rejected' && <strong className={s.strong}>{error.message}</strong>}
          {status === 'resolved' && (<div className={s.box} >
            <OneMovie key={movie.id}
              obj={movie} />
            <Button action={() => { history.goBack() }}>Go back</Button>
          </div>)}
        </Section>
        {status === 'pending' && <Loader />}
        <DetailedMovieData />
      </Suspense>

    </Fragment>
  )
}