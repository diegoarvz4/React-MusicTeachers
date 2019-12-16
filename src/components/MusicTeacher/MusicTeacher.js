import React from 'react';
import { Link } from 'react-router-dom';

export default ({ id, name, ranking, years_exp }) => {
  return (
    <div>
      <h1>{ name }</h1>
      <span>{ ranking }</span>
      <span>{ years_exp }</span>
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