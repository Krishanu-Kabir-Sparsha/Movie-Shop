import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";

export default function SingleMovie() {

  const [specificMovies, setSpecificMoviesList] = useState([]);

  // https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US
  
  const {id} = useParams();

  async function getOneMovies () {
    console.log(import.meta.env.VITE_MY_API);
    // setLoading(true);
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f44c746b4d3eb0b959907a5084210b58&language=en-US&page=1
`);

  const data = await response.json();
  
  setSpecificMoviesList(data);
  // setLoading(false);
  } 


  useEffect(() => {
    getOneMovies();
  }, []);

  console.log(specificMovies);
  
  return (
    <motion.section  drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}>
          <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className='md:flex-shrink-0'>
  <img
    className="w-full h-48 object-fill md:h-full md:w-full"
    src={`https://image.tmdb.org/t/p/w500${specificMovies?.poster_path}`}
    alt="Movie Poster"
  />
  </div>
  <div className="p-6 text-center">
    <h2 className="text-xl font-semibold text-indigo-900">{specificMovies.original_title}</h2>
    <span className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>{specificMovies.tagline}</span>
    <p className="text-sm text-gray-600 mt-2">
      {specificMovies.overview}
    </p>
    <div className="mt-4">
      <span className="text-sm text-gray-600">
        Genres: {
          specificMovies.genres?.map((genre) => genre.name).join(", ")
        }
      </span>
    </div>
    <div className="mt-2">
      <span className="text-sm text-gray-600">Release Date: {specificMovies.release_date
      }</span>
    </div>
  </div>
</div>
    </motion.section>
  )
}
