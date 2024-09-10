import { useState, useEffect } from 'react'
import './App.css'
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'

function App() {
  //only because we have no backend so no choice
  const apiKey = "B5c9cced"

  const [movie, setMovie] = useState(null)

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      const data = await response.json()
      setMovie(data)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='App'>
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  )
}

export default App  