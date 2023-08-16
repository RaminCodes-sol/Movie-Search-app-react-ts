import { Movie } from "../types"



type MoviesProps = {
    movies: Movie[]
}

const IMGPATH = "https://image.tmdb.org/t/p/w1280";


const Movies:React.FC<MoviesProps> = ({ movies }) => {


  return (
    <div className='grid grid-cols-fluid gap-4 p-5'>
        {
            movies?.map(movie => {
                return (
                    <div key={movie.id} className="border border-gray-600 p-2 transition-colors hover:border-gray-500 cursor-pointer" title={movie.title}>
                        <figure>
                            <img src={`${IMGPATH}/${movie.poster_path ? movie.poster_path : movie.backdrop_path}`} alt='img' loading="lazy" />
                        </figure>
                        <h4 className="text-[.95rem] mt-1 font-semibold truncate">{movie.title}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Movies