import React from 'react';
import { connect } from 'react-redux';

const SearchTeachers = ({ musicalInstruments }) => {
  return (
    <div>
      <div>
        Logo Container
      </div>
      <div>
        <input placeholder='Search Teachers' />
      </div>
      <div>
        <div>IMG</div>
        <h1>Search Music Teachers</h1>
        <p>
          Lorem
        </p>
      </div>
      <div>
        {
          musicalInstruments.map((inst) => (
            <span key={inst.category}>{inst.category}</span>
          ))
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    musicalInstruments: state.musInst
  }
}

export default connect(mapStateToProps)(SearchTeachers)
