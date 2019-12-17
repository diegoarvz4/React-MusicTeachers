import React from 'react';
import './MusicalInstrument.css';

export default (props) => {
  return (
    <div className="MusicalInstrument">
      { props.name }
    </div>
  );
}