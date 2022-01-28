const BASE_URL = 'https://api.themoviedb.org/'
const KEY = 'api_key=44391b84e3d702feb61131e7b6857e4b'


export default function fetchApi(type, value, page, options) {
  const trending = `all/week?${KEY}`
  const search = `movie?${KEY}&query=${value}&page=${page}&include_adult=false`
  const credits = `/credits`
  const reviews = `/reviews`
  const pages = `&page=${page}`
  const movie = `${options === 'credits' ? credits : ''}${options === 'reviews' ? reviews : ''}${value}${KEY}${options === 'reviews' ? pages : ''}`
  const fetchSettings = `3/${type}/${type === 'movie' ? movie : ''}${type === 'trending' ? trending : ''}${type === 'search' ? search : ''}`;
  const url = BASE_URL + fetchSettings
  console.log(url);
  // return fetch(url).then(
  //   res => {
  //     if (res.ok) {
  //       return res.json()
  //     }
  //     return Promise.reject(new Error('Ooops, something went wrong...'))
  //   }
  // )

}
//homepage
// trending /all/week?api_key=44391b84e3d702feb61131e7b6857e4b

//search
// search /movie?api_key=<<api_key>>44391b84e3d702feb61131e7b6857e4b&page=1&include_adult=false

//full info about movie page
// movie /{movie_id}?api_key=44391b84e3d702feb61131e7b6857e4b

//credits (more)
// movie /{movie_id}/credits?api_key=44391b84e3d702feb61131e7b6857e4b

//reviews (more)
// movie /{movie_id}/reviews?api_key=44391b84e3d702feb61131e7b6857e4b&page=1