import s from './ImageGallery.module.css'

import { useEffect, useState, Fragment } from 'react'
import fetchApi from '../../AppService';
import Loader from '../Loader/Loader';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import propTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { ROUTERS } from '../../consts';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { matchPath } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

function ImageGallery({ searchValue, options = 'search' }) {
  const [searchName, setSearchName] = useState('')
  const currentPath = useHistory()
  const path = useLocation()
  const [status, setStatus] = useState('search')
  const [page, setPage] = useState(1)
  const [error, setError] = useState('')
  const [movies, setMovies] = useState([])


  useEffect(() => {
    setSearchName(searchValue)
  })

  useEffect(() => {
    if (options === 'search') {
      const splitSearch = path.search.split('/')
      splitSearch[0].slice(1) ? setSearchName(splitSearch[0].slice(1)) : setSearchName('')
      splitSearch[1] && setPage(Number(splitSearch[1]))
    }
    if (options === 'trending') {
      console.log(path.search);
      const pageUrl = Number(path.search.slice(1))
      pageUrl > 0 ? setPage(pageUrl) : setPage(1)
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const fetchMovies = () => {
    if (searchName || options === 'trending') {
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
    console.log(page);
    console.log(searchName);
    console.log(searchValue);
    searchName && currentPath.replace({ pathname: ROUTERS.MOVIES, search: `${searchName}/${page}` })
    options === 'trending' && currentPath.replace({ pathname: ROUTERS.HOME, search: `${page}` })
    options === 'trending' && setStatus('pending')
    fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchName, page, currentPath])


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
              <Link to={ROUTERS.MOVIES + ROUTERS.ONE_MOVIE + `${el.id}`} key={el.id}>
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
  options: propTypes.string,
  searchName: propTypes.string,
}

export default ImageGallery