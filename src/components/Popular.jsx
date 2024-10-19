import { useEffect, useState } from "react"
import MovieCard from "./MovieCard";

export default function Popular() {
  
  const [popularMovie, setPopularMovie] = useState([]);

  async function getPopularMovies() {
    
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f44c746b4d3eb0b959907a5084210b58&language=en-US&page=1
    `);

    const data = await response.json();

    // const popular = data.results.slice(4,8);
    // setPopularMovie(popular);

    // setPopularMovie(data.results);    


    // Shuffle the data.results array and get 4 random movies
    const shuffledMovies = data.results.sort(() => 0.5 - Math.random());
    const randomMovies = shuffledMovies.slice(0, 4);
    setPopularMovie(randomMovies);

  }

  useEffect(() => {
    getPopularMovies();
  }, [])
  
    return (
    <section className="mt-5">
        <h1 className="text-center text-3xl my-4 font-extrabold">Get Your Favorite Movies </h1>
        <div className="flex justify-center gap-5">
            {
                popularMovie.map((popular) => <MovieCard key={popular.id} moviesInfo={popular}/>
            )}
        </div>
    </section>
  )
}
