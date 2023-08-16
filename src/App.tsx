import { useEffect, useState } from "react"
import axios from "axios"
import { Movie } from "./types"
import Movies from "./components/Movies"

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";




const App = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [searchInput, setSearchInput] = useState('')


  /*-------Get-All-Movies-------*/
  const getAllMovies = async () => {
    const data:Movie[] = await axios.get(APIURL).then(response => response.data.results).catch(error => console.log(error))
    setMovies(data)
  }


  /*-------Get-Searched-Movies-------*/
  const getSearchedMovie = async (movieName: string) => {
    const data:Movie[] = await axios.get(`${SEARCHAPI}${movieName}`).then(response => response.data.results).catch(error => console.log(error))
    setMovies(data)
  }

  useEffect(() => {
    if (searchInput === '') {
      getAllMovies()
    } else {
      getSearchedMovie(searchInput)
    }
  }, [searchInput])



  return (
   <main className='w-full max-w-[1200px] mx-auto flex flex-col items-center py-10'>

    {/*-------SearchInput-------*/}
    <section className="w-full max-w-[500px] border rounded overflow-hidden">
      <input type='text' placeholder="search movie..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="w-full px-2 py-3 text-black border-none outline-none" />
    </section>

    {/*-------Movies-------*/}
    <section className="mt-3">
      {
        movies.length === 0 
        ? <span className='inline-block text-center'>Loading...</span>
        : <Movies movies={movies} />
      }
    </section>

   </main>
  )
}

export default App
