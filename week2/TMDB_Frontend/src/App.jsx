import { useEffect, useState } from "react";
import "./styles/App.css";

import MovieCard from "./components//MovieCard";
const API = import.meta.env.VITE_API;
function App() {
  const [popularMoviesData, SetPopularMoviesData] = useState("");
  const [topMoviesData, SetTopMoviesData] = useState("");
  const [upcomingMoviesData, SetUpcomingMoviesData] = useState("");

  const fetchPopularMoviedata = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    SetPopularMoviesData(data);
    return data;
  };
  const fetchTopMoviedata = async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    SetTopMoviesData(data);
    return data;
  };
  const fetchUpcomingMoviedata = async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    SetUpcomingMoviesData(data);
    return data;
  };

  useEffect(() => {
    const loadMovies = async () => {
      await fetchPopularMoviedata();
      await fetchTopMoviedata();
      await fetchUpcomingMoviedata();
    };
    loadMovies();
  }, []);
  return (
    <>
      <header className="header">
        <h1>Movie Database</h1>
        <div className="links">
          <a href="#pop">Popular Movies</a>
          <a href="#top">Top Rated Movies</a>
          <a href="#up">Upcoming Movies</a>
        </div>
      </header>
      <main>
        <div className="popular-movies">
          <h2 id="pop">Popular Movies</h2>
          <div className="movie-container">
            {popularMoviesData &&
              popularMoviesData.results.map((item) => (
                <MovieCard MoviesData={item} key={item.id} />
              ))}
          </div>
        </div>
        <div className="top-movies">
              <h2 id="top">Top Rated Movies</h2>
        <div className="movie-container">
          {topMoviesData &&
            topMoviesData.results.map((item) => (
              <MovieCard MoviesData={item} key={item.id} />
            ))}
        </div>
            </div>
        <div className="upcoming-movies">
          <h2 id="up">Upcoming Movies</h2>
          <div className="movie-container ">
            {upcomingMoviesData &&
              upcomingMoviesData.results.map((item) => (
                <MovieCard MoviesData={item} key={item.id} />
              ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
