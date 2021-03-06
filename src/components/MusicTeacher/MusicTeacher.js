import React from 'react';
import { Link } from 'react-router-dom';
import './MusicTeacher.scss';
import starIcon from './star.svg';

export default ({
  id,
  name,
  ranking,
  years_exp,
  musicGenres,
}) => (
  (
    <div className="MusicTeacherContainer">
      <h2>{ name }</h2>
      <div className="MusicTeacherContainer-exp">
        <div className="MusicTeacherContainer-exp-rank">
          <img src={starIcon} alt="ranking" />
          <span>{ ranking }</span>
        </div>
        <div>
          {years_exp}
          yrs of exp.
        </div>
      </div>
      <div className="MusicTeacherContainer-genres">
        {
          musicGenres.map(genre => (
            <span key={genre.id}>{genre.category}</span>
          ))
        }
      </div>
      <div className="MusicTeacherContainer-button">
        <Link
          to={{
            pathname: '/music_teachers/book',
            search: `?music_teacher_id=${id}`,
          }}
        >
          <button>Book</button>
        </Link>
      </div>
    </div>
  )
);
