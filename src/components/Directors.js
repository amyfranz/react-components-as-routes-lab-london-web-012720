import React from "react";
import { directors } from "../data";

const Directors = () => {
  const directorsCard = directors.map((director, index) => (
    <div className="director" key={index}>
      <h1>Director Name: {director.name}</h1>
      <h2>Movies:</h2>
      <ul>
        {director.movies.map((movie) => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsCard}
    </div>
  );
};

export default Directors;
