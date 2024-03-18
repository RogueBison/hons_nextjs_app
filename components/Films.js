import React, { useState, useEffect } from "react";
import InsertButton from "./InsertButton";
import DeleteButton from "./DeleteButton";

const Film = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch("/api/allFilms");
        const data = await response.json();
        setFilms(data);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchFilms();
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
      <h3>Amount of Records: {films.length}</h3>
      <DeleteButton />
    </div>
  );
};

export default Film;