import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MusicalInstrument from '../../../components/MusicalInstrument/MusicalInstrument';
import ThemeBar from '../../../components/ThemeBar/ThemeBar';
import './SearchTeachers.css';

class SearchTeachers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kind: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      kind: event.target.value,
    });
  }

  render() {
    const { kind } = this.state;
    const { musicalInstruments } = this.props;
    const typesOfMusicaInstruments = () => {
      if (!kind || /^\s*$/.test(kind)) {
        return musicalInstruments;
      }
      return musicalInstruments
        .filter(inst => inst.kind.toLowerCase().includes(kind.toLowerCase()));
    };

    return (
      <div className="SearchTeachersContainer">
        <ThemeBar section="Music Teachers" />
        <input className="SearchTeachersContainer-search" placeholder="Type Instrument" value={kind} onChange={this.handleInput} />
        <div className="MusicalInstrumentsContainer">
          {
            typesOfMusicaInstruments().map((inst) => (
              <Link
                className="MusicalInstrumentContainer"
                key={inst.id}
                to={{
                  pathname: '/music_teachers',
                  search: `?instrument=${inst.kind}`,
                }}
              >
                <MusicalInstrument name={inst.kind} />
              </Link>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    musicalInstruments: state.musInst,
  }
);

export default connect(mapStateToProps)(SearchTeachers);
