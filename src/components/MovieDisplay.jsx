export default function MovieDisplay ({movie}) {
  const loaded = () => (
      <>
        <h1>{movie.Title} Released On {movie.Released}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title}/>
        <p>{movie.Awards}</p>
        <p>{movie.Plot}</p>
      </>
  )

  const loading = () => (
      <div>
          <h1>Hey Go Ahead and Try To Search For A Movie</h1>
      </div>
  )

  return movie && movie.Title ? loaded() : loading()
}