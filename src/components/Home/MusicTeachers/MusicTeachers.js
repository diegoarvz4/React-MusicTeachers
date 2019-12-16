import React from 'react';
import MusicTeacher from './MusicTeacher/MusicTeacher';
import { connect } from 'react-redux';

class MusicTeachers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      years_experience: null,
      name: null,
      ranking: null,
    }
  }

  render() {
    
    const musicTeachers = () => {
      if (this.props.musicTeachers !== undefined) {
        return this.props.musicTeachers.map(musTeach => (
          <MusicTeacher 
            key={musTeach.id}
            name={musTeach.name}
            years_exp={musTeach.years_exp}
            ranking={musTeach.ranking}
          />
        ))
      } else {
        return null;
      }
    }
    return (
      <div>
        <span>Filter</span>
        <div>
        { musicTeachers() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    musicTeachers: state.musTeachers
  }
}

export default connect(mapStateToProps)(MusicTeachers);