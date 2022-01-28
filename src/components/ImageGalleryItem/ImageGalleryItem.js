import propTypes from 'prop-types'
import s from './ImageGalleryItem.module.css'
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const ImageGalleryItem = ({ url, alt, title, id }) => {
  return (
    <li className={s.galleryItem} id={id}>
      {url ? (
        <img className={s.galleryImage} src={IMG_URL + url} alt={alt} loading="lazy" />
      ) : (
        <div className={s.noImage} >No title</div>
      )
      }


      <h3 className={s.title}>{title}</h3>
    </li>
  )
}

ImageGalleryItem.propTypes = {
  url: propTypes.string,
  alt: propTypes.string,
  myRef: propTypes.object,
  largeImageURL: propTypes.string,
  onClickId: propTypes.func
}

export default ImageGalleryItem