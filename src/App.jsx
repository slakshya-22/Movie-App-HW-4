import React from "react";
import MovieList from "./components/MovieList";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Movie List</h1>
      <MovieList />
    </div>
  );
};

export default App;
