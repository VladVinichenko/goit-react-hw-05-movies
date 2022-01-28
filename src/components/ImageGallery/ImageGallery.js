import s from './ImageGallery.module.css'

import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import fetchApi from '../../AppService';
import Loader from '../Loader/Loader';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTERS } from '../../consts';

function ImageGallery({ searchName = '', options = 'search' }) {
  const [status, setStatus] = useState('search')
  const [page, setPage] = useState(1)
  const [error, setError] = useState(null)
  const [movies, setMovies] = useState([])

  const fetchMovies = () => {
    if (searchName.trim().length > 0 || options === 'trending') {
      setMovies([])
      setStatus('pending')
      fetchApi(options, searchName, page)
        .then(el => {
          if (el.results.length === 0) {
            setMovies([])
            return Promise.reject(
              new Error(`No results were found for this: ${searchName}`)
            )
          }
          el.results[0] = { ...el.results[0] };
          setMovies([...el.results])
          setStatus('resolved')
        })
        .catch(errorRejected => {
          setError(errorRejected);
          setStatus('rejected')
        }
        )
    }
  }


  useEffect(() => {
    options === 'trending' && setStatus('pending')
    fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchName, page])

  const nextPage = () => {
    setPage(page + 1)
  };

  const prevPage = () => {
    setPage(page - 1)
  };

  return (
    <Fragment>
      {status === 'search' && <p className={s.idle}>Input value</p>}
      {status === 'rejected' && <strong className={s.strong}>{error.message}</strong>}
      {movies.length > 0 && (
        <ul className={s.gallery} >
          {
            movies.map(el => (
              <Link to={`${ROUTERS.ONE_MOVIE}${el.id}`} key={el.id}>
                <ImageGalleryItem
                  id={el.id}
                  url={el.poster_path}
                  alt={el.name}
                  title={el.original_title ? el.original_title : el.name}
                />
              </Link>
            ))
          }
        </ul>
      )
      }
      {status === 'pending' && <Loader />}
      <div className={s.navBox}>
        {status === 'resolved' && page > 1 ? <Button action={prevPage}>Prev Page ({page - 1})</Button> : ''}
        {status === 'resolved' && <p className={s.currentPage}>{page}</p>}
        {status === 'resolved' && <Button action={nextPage}>Next Page ({page + 1})</Button>}
      </div>


    </Fragment >
  )
}

ImageGallery.propTypes = {
  options: propTypes.string
}

export default ImageGallery