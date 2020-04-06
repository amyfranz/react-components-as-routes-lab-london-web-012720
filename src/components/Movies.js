import React from "react";
import { movies } from "../data";

const Movies = () => {
  const moviesCard = movies.map((movie, index) => (
    <div className="movie" key={index}>
      <h1>Movie Name: {movie.title}</h1>
      <h2>Time: {movie.time}</h2>
      <ul>
        {movie.genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
      {movie.metascore ? <h2>Metascore: {movie.metascore}</h2> : null}
    </div>
  ));
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesCard}
    </div>
  );
};

export default Movies;
