import React, { useState } from "react";
import "./poster.css";
import films from "./data/films.json";
import Trailer from "./Trailer";

function Poster() {
  const [currentFilm, setCurrentFilm] = useState(0);

  const onClickAction = () => {
    if (currentFilm !== 19) {
      setCurrentFilm(currentFilm + 1);
    } else {
      setCurrentFilm(0);
    }
  };

  return (
    <div className="main-poster-d">
      <img
        src={`https://image.tmdb.org/t/p/original${films.results[currentFilm].poster_path}`}
        alt="poster"
        className="poster"
      />
      <h1 className="poster-text">
        {films.results[currentFilm].title.toUpperCase()}
      </h1>
      {setTimeout(onClickAction, 120000)}
      <Trailer videoId={films.results[currentFilm].id} />
    </div>
  );
}

export default Poster;
