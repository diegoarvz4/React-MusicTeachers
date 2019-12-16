import React from 'react';
import MusicTeacher from '../../../components/MusicTeacher/MusicTeacher';
import { connect } from 'react-redux';

class MusicTeachers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      years_experience: null,
      name: null,
      ranking: null,
      instrument: null,
    }
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
        this.setState({
          [param[0]]: [param[1]]
        })
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
            id={musTeach.id}
          />
        ))
      } else {
        return null;
      }
    }
    return (
      <div>
        <span>Filter</span>
          <h1>{this.state.instrument} Teachers</h1>
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