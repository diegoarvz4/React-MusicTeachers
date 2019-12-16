import React from 'react';
import MusicalInstrument from '../../../components/MusicalInstrument/MusicalInstrument';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
          .filter(inst => inst.kind.toLowerCase() === this.state.kind.toLowerCase());
      }
    }

    return (
      <div>
        <div>
          Logo Container
        </div>
        <div>
          <input placeholder='Search Teachers' value={this.state.kind} onChange={this.handleInput}/>
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
            typesOfMusicaInstruments().map((inst) => (
              <Link key={inst.id} to={{
                pathname: '/music_teachers',
                search: `?instrument=${inst.kind}`
              }}>
                <MusicalInstrument  name={inst.kind} />
              </Link>
            ))
          }
          {
            // (!this.state.kind || /^\s*$/.test(this.state.kind)) 
            // ? this.props.musicalInstruments.map((inst) => (
            //     <Link key={inst.id} to={{
            //       pathname: '/music_teachers',
            //       search: `?instrument=${inst.kind}`
            //     }}>
            //       <MusicalInstrument  name={inst.kind} />
            //     </Link>
            //   ))
            // : this.props.musicalInstruments
            //   .filter(inst => inst.kind.toLowerCase() === this.state.kind.toLowerCase())
            //   .map((inst) => (
            //     <Link key={inst.id} to={{
            //       pathname: '/music_teachers',
            //       search: `?instrument=${inst.kind}`
            //     }}>
            //       <MusicalInstrument name={inst.kind} />
            //     </Link>
            //   ))
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
