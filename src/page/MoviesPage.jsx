import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';
import LoadingEffect from '../components/LoadingEffect';

export default function MoviesPage() {

    const [movieList, setMoviesList] = useState([]);

    const [loading, setLoading] = useState(true);


    async function getMovies () {
        setLoading(true);
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f44c746b4d3eb0b959907a5084210b58&language=en-US&page=1
    `);
    
      const data = await response.json();
      setMoviesList(data.results);
      setLoading(false);
      } 
    
    
      useEffect(() => {
        getMovies();
      }, []);



  return (
    <> 

    <div>
    { loading ? (<LoadingEffect />) : ( 
      <div className="flex container mx-auto gap-2 flex-wrap my-4">   
      {
        movieList.map((movie) => (
          <MovieCard key={movie.id} moviesInfo={movie} />
        ))}
      </div>
    )} 
    </div>

    </>
  )
}
