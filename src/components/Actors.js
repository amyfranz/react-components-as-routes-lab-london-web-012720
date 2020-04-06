import React from "react";
import { actors } from "../data";

const Actors = () => {
  const actorsCard = actors.map((actor, index) => (
    <div className="actor" key={index}>
      <h1>Actor Name: {actor.name}</h1>
      <h2>Movies:</h2>
      <ul>
        {actor.movies.map((movie) => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsCard}
    </div>
  );
};

export default Actors;
