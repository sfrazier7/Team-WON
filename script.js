const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=642ef718bc4280969323e0c758210b61'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=642ef718bc4280969323e0c758210b61c&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')

//Gets initial movie data
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.nodeValue

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API_URL + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
} )