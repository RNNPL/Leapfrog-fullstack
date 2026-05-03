import '../styles/MovieCard.css'
function MovieCard({ MoviesData }) {
  const date = MoviesData.release_date.split("-")[0]
  const imageurl=`https://image.tmdb.org/t/p/w500/${MoviesData.poster_path}`

  return (
    <div className="card-container">

      <img
        src={imageurl}
        alt={MoviesData.title}
        className="movie-image"
        />
      <div className="card-info">
        <h2 className="card-title">{MoviesData.title}</h2>
        <span className="card-year">{date}</span>
      </div>
    </div>
  )
}

export default MovieCard