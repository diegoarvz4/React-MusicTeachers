import React from 'react';
import MusicalInstrument from '../../../components/MusicalInstrument/MusicalInstrument';
import ThemeBar from '../../../components/ThemeBar/ThemeBar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './SearchTeachers.css';

class SearchTeachers extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      kind:''
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      kind: event.target.value
    })
  }
  
  render() {

    const typesOfMusicaInstruments = () => {
      if (!this.state.kind || /^\s*$/.test(this.state.kind)) {
        return this.props.musicalInstruments;        
      } else {
        return this.props.musicalInstruments
          .filter(inst => inst.kind.toLowerCase().includes(this.state.kind.toLowerCase())
          );
      }
    }

    return (
      <div className="SearchTeachersContainer">
        <ThemeBar section={"Music Teachers"}/>
        <input className="SearchTeachersContainer-search" placeholder='Type Instrument' value={this.state.kind} onChange={this.handleInput}/>
        <div>
          <div>IMG</div>
          <h1>Search Music Teachers</h1>
          <p>
            Lorem
          </p>
        </div>
        <div>
          {
            typesOfMusicaInstruments().map((inst) => (
              <Link key={inst.id} to={{
                pathname: '/music_teachers',
                search: `?instrument=${inst.kind}`
              }}>
                <MusicalInstrument  name={inst.kind} />
              </Link>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    musicalInstruments: state.musInst
  }
}

export default connect(mapStateToProps)(SearchTeachers)
