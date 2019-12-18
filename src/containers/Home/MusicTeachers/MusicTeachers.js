import React from 'react';
import ThemeBar from '../../../components/ThemeBar/ThemeBar';
import MusicTeacher from '../../../components/MusicTeacher/MusicTeacher';
import { connect } from 'react-redux';
import Filterbar from '../../../components/Filterbar/Filterbar';
import './MusicTeachers.css';
import optionsImg from './options.svg';

class MusicTeachers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      years_exp: 5,
      name: '',
      ranking: 2.5,
      instrument: null,
      genres: null,
      filterBar: false,
    }
    this.showFilterBar = this.showFilterBar.bind(this);
    this.hideFilterBar = this.hideFilterBar.bind(this);
    this.handleGenre = this.handleGenre.bind(this); 
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      this.setState({
        [param[0]]: param[1]
      })
    }
    let genres_options = {};
    const genres_categories = this.props.musicGenres.map(mG => mG.category);
    for(let i = 0; i < genres_categories.length; i+= 1) {
      genres_options[genres_categories[i]] = true;
    }

    this.setState({
      genres: genres_options,
    })

  }

  showFilterBar() {
    this.setState({
      filterBar: true,
    })
  }

  hideFilterBar() {
    this.setState({
      filterBar: false,
    })
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleGenre(property, value) {
    this.setState((prevState) => {
      return {genres: {...prevState.genres, [property]: value}};
    })
  }

  render() {
    
    const musicTeachers = () => {
      if (this.props.musicTeachers !== undefined && this.state.genres !== null) {
        let musicTeachersFiltered = []
        let musicTeachersInstrumentFiltered = []
        const { musicTeachers } = this.props;
        
        // Filter by instrument
        for(let i=0; i < musicTeachers.length; i+=1) {
          const musicTeacher = musicTeachers[i];
          const instruments = musicTeacher.musical_instruments;
          for (let j=0; j < instruments.length; j+=1) {
            if (instruments[j].kind === this.state.instrument
                && !musicTeachersFiltered.includes(musicTeacher)){
                  musicTeachersInstrumentFiltered.push(musicTeacher)
            }
          }
        }

        // Filter by name
        musicTeachersInstrumentFiltered = 
          musicTeachersInstrumentFiltered
          .filter( mT => mT.name.toLowerCase()
            .includes(this.state.name.toLowerCase().trim())
          )
        // Filter by ranking
        musicTeachersInstrumentFiltered =
          musicTeachersInstrumentFiltered
          .filter( mT => parseFloat(mT.ranking) >= parseFloat(this.state.ranking)
          )
        // Filter by Years of experience
        musicTeachersInstrumentFiltered =
          musicTeachersInstrumentFiltered
          .filter( mT => mT.years_exp >= this.state.years_exp
          )

        // Filter by Genres
        for(let i = 0; i < musicTeachersInstrumentFiltered.length; i += 1) {
          const musicTeacher = musicTeachersInstrumentFiltered[i];
          const genres = musicTeacher.music_genres;
          for(let j = 0; j < genres.length; j += 1){
           
            if (Object.keys(this.state.genres).includes(genres[j].category)
                && this.state.genres[genres[j].category] === true 
                && !musicTeachersFiltered.includes(musicTeacher)){
              musicTeachersFiltered.push(musicTeacher);
            }
          }
        }


        return musicTeachersFiltered.map(musTeach => (
          <MusicTeacher 
            key={musTeach.id}
            name={musTeach.name}
            years_exp={musTeach.years_exp}
            ranking={musTeach.ranking}
            id={musTeach.id}
            musicGenres={musTeach.music_genres}
          />
        ))
      } else {
        return null;
      }
    }
    return (
      <div className="MusicTeachersContainer">
        <ThemeBar section={this.state.instrument + " Music Teachers"}/>
        <img src={optionsImg} className="MusicTeachers-filter" onClick={this.showFilterBar} />
        {
          this.state.filterBar
          ? <Filterbar 
              genres={this.state.genres}
              years_exp={this.state.years_exp}
              ranking={this.state.ranking}
              name={this.state.name}
              handleGenre={this.handleGenre}
              handleInput={this.handleInput}
              hideFilterBar={this.hideFilterBar} />
          : null
        }
        <div className="MusicTeachers">
        { musicTeachers() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    musicTeachers: state.musTeachers,
    musicGenres: state.musicGenres,
  }
}

export default connect(mapStateToProps)(MusicTeachers);