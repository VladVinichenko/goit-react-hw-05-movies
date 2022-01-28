import s from './OneMovie.module.css'
import propTypes from 'prop-types';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function Oneobj({ obj }) {
  const url = obj.poster_path
  return (
    <div className={s.container}>
      {obj.original_title ? (<h2 className={s.title}>{obj.original_title}</h2>) : (<h2 className={s.title}>{obj.name}</h2>)}

      <div className={s.detailBox}>
        {url ? (
          <img className={s.galleryImage} src={IMG_URL + url} alt={obj.title} loading="lazy" />
        ) : (
          <div className={s.noImage}>No title</div>
        )
        }
        <ul className={s.objList}>
          <li className={s.objItem}>release_date: {obj.release_date}</li>
          <li className={s.objItem}>vote_average: {obj.vote_average}</li>
          <li className={s.objItem}>vote_count: {obj.vote_count}</li>
          <li className={s.objItem}>countries: {obj.production_countries.map(el => el.name)}</li>
          <li className={s.objItem}>overview: {obj.overview}</li>


        </ul>
      </div>
    </div>
  )
}

Oneobj.propTypes = {
  obj: propTypes.object.isRequired
}

export default Oneobj