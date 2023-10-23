import React from 'react';
import { Link } from 'react-router-dom';

function FilmList({ films }) {
  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>
          <Link to={`/film/${film.id}`}>{film.title}</Link>
          <Link to={`/film/${film.id}`}>{film.title}</Link>
          <Link to={`/film/${film.id}`}>{film.title}</Link>
          <Link to={`/film/${film.id}`}>{film.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default FilmList;
