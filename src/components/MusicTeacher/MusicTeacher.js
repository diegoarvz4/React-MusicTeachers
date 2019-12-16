import React from 'react';

export default ({ name, ranking, years_exp }) => {
  return (
    <div>
      <h1>{ name }</h1>
      <span>{ ranking }</span>
      <span>{ years_exp }</span>
      <button>Book</button>
    </div>
  );
}