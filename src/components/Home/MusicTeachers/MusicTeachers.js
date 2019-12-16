import React from 'react';

class MusicTeachers extends React.Component {

  constructor() {
    this.state = {
      years_experience: null,
      name: null,
      ranking: null,
    }
  }

  render() {
    return (
      <div>
        <span>Filter</span>
      </div>
    );
  }
}

export default MusicTeachers;