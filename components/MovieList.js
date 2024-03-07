import React, { useState, useEffect } from "react";
import InsertButton from "./InsertButton";
import DeleteButton from "./DeleteButton";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/api/movies");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Martin Alexander | Hons Project Next.JS App </h1>
      <hr></hr>
      <br></br>
      <h2>Insert or Delete Film Records:</h2>
      <br></br>
      <InsertButton />
      <br></br>
      <h3>Amount of Records: {movies.length}</h3>
      <DeleteButton />
    </div>
  );
};

export default MovieList;