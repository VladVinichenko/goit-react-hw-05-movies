import s from './HomePage.module.css'

import Section from "../../components/Section/Section";
import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import propTypes from "prop-types";
// import Searchbar from "../../components/Searchbar/Searchbar";
// import ImageGallery from "../../components/ImageGallery/ImageGallery";
// import Modal from "../../components/Modal/Modal";
// import { ToastContainer } from "react-toastify";
import fetchApi from '../../AppService';
// import Loader from '../Loader/Loader';
import Loader from '../../components/Loader/Loader';
import ImageGalleryItem from '../../components/ImageGalleryItem/ImageGalleryItem';

export function HomePage() {
  const [status, setStatus] = useState('idle')
  const [page, setPage] = useState(1)
  const [error, setError] = useState(null)
  const [movies, setMovies] = useState([])

  const fetchMovies = (option) => {

    option === 'searchName' && setMovies([])
    setStatus('pending')

    fetchApi()
      .then(el => {
        if (el.results.length === 0) {
          setMovies([])
          return Promise.reject(
            new Error(`No results were found`)
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




  useEffect(() => {
    fetchMovies('page')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <Fragment>
      {status === 'idle' && <p className={s.idle}>Input value</p>}
      {status === 'rejected' && <strong className={s.strong}>{error.message}</strong>}

      {movies.length > 0 && (
        <ul className={s.gallery} >
          {
            movies.map(el => (
              <ImageGalleryItem
                key={el.id}
                url={el.poster_path}
                alt={el.original_title}
              />
            ))
          }
        </ul>
      )}
      {status === 'pending' && <Loader />}
      {/* {status === 'resolved' && <Button action={nextPage}>Load more</Button>} */}
    </Fragment>
  )
}
