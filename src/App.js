import React, { useEffect, useState } from 'react';
import './style.css';
import Movies from './Components/Movies';

const api = `https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort
  _by=popularity.desc&include_adult=false&include_video=false&page=1`;

//const imgAPI = `https://image.tmdb.org/t/p/original`;

export default function App() {
  const [film, setFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.results);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(api + searchTerm);
    fetch(api + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.results);
      });

    setSearchTerm('');
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <header className="Website-Title">
        <input
          type="search"
          placeholder="search..."
          value={searchTerm}
          onChange={handleSubmit}
        />
      </header>

      <div className="Container">
        {film.map((movie) => (
          <Movies
            key={movie.id}
            movieName={movie.title}
            poster={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
}
