import React from "react";
import "../index.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450"
          }
          alt={movie.Title}
        />
      </div>
      <div className="movie-details">
        <h2>{movie.Title}</h2>
        <p className="movie-meta">
          {movie.Year}, {movie.Director}
        </p>
        <div className="movie-info">
          <span className="movie-duration">{movie.Duration}</span>
          <span className="movie-genre">{movie.Genre}</span>
        </div>
        <p className="movie-description">{movie.Description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
