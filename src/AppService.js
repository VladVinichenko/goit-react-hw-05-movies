const BASE_URL = 'https://api.themoviedb.org/'
const KEY = 'api_key=44391b84e3d702feb61131e7b6857e4b'


export default function fetchApi(type = 'trending', value = '', page = 1, options) {
  const trending = () => { return `all/week?page=${page}&${KEY}` }
  const search = () => { return `movie?${KEY}&query=${value.split(' ').join('%20')}&page=${page}&include_adult=false` }
  const credits = () => { return `/credits` }
  const reviews = () => { return `/reviews` }
  const pages = () => { return `&page=${page}` }
  const movie = () => { return `${value}${options === 'credits' ? credits() : ''}${options === 'reviews' ? reviews() : ''}?${KEY}${options === 'reviews' ? pages() : ''}` }
  const fetchSettings = `3/${type}/${type === 'movie' ? movie() : ''}${type === 'trending' ? trending() : ''}${type === 'search' ? search() : ''}`;
  const url = BASE_URL + fetchSettings
  // console.log(url);
  return fetch(url).then(
    res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(new Error('Ooops, something went wrong...'))
    }
  )

}

/*
trending page 1 - fetchApi()
trending - fetchApi('trending', '', {page})
search page 1 - fetchApi('search', {value})
search - fetchApi('search', {value}, {page})
for id - fetchApi('movie', {id}})
for id + credits (only credits) - fetchApi('movie', {id}, '', 'credits')
for id + reviews (only reviews) - fetchApi('movie', {id}, {page}, 'reviews')
*/


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


// https://api.themoviedb.org/3/trending/all/week?api_key=44391b84e3d702feb61131e7b6857e4b       585083