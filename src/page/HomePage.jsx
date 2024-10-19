import React from 'react'
import MovieSlider from '../components/MovieSlider'
import Popular from '../components/Popular'
import { useParams } from 'react-router-dom'
import MoviesPage from './MoviesPage';

export default function HomePage() {
  
  const {id} = useParams();
 
  return (
    <main>
      {id}
      
        <MovieSlider />

        <Popular />
        <MoviesPage/>
    </main>
  )
}
