import React from 'react';
import { Link } from 'react-router-dom';

export default ({ id, name, ranking, years_exp, musicGenres }) => {
  return (
    <div>
      <h1>{ name }</h1>
      <span>Ranking => { ranking }</span>
      <span>Years Exp => { years_exp }</span>
      <div>
        {
          musicGenres.map( genre => (
            <span key={genre.id}>{genre.category}</span>
          ))
        }
      </div>
      <Link 
        to={{
          pathname: '/music_teachers/book',
          search: `?music_teacher_id=${id}`
        }}>
        <button>Book</button>
      </Link>
    </div>
  );
}