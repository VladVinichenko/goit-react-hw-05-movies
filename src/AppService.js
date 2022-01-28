const BASE_URL = 'https://api.themoviedb.org/'
const KEY = '44391b84e3d702feb61131e7b6857e4b'

export default function fetchApi(value, page) {

  const fetchSettings = `3/movie/550?api_key=`;
  const url = BASE_URL + fetchSettings + KEY
  return fetch(url).then(
    res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(new Error('Ooops, something went wrong...'))
    }
  )

}