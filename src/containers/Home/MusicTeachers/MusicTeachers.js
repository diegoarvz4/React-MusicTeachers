import React from 'react';
import { connect } from 'react-redux';

import ThemeBar from '../../../components/ThemeBar/ThemeBar';
import MusicTeacher from '../../../components/MusicTeacher/MusicTeacher';
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
    };
    this.showFilterBar = this.showFilterBar.bind(this);
    this.hideFilterBar = this.hideFilterBar.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    const query = new URLSearchParams(location.search);
    for (const param of query.entries()) {
      this.setState({
        [param[0]]: param[1],
      });
    }
    const genresOptions = {};
    const { musicGenres } = this.props;
    const genresCategories = musicGenres.map(mG => mG.category);
    for (let i = 0; i < genresCategories.length; i += 1) {
      genresOptions[genresCategories[i]] = true;
    }

    this.setState({
      genres: genresOptions,
    });
  }

  showFilterBar() {
    this.setState({
      filterBar: true,
    });
  }

  hideFilterBar() {
    this.setState({
      filterBar: false,
    });
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleGenre(property, value) {
    this.setState((prevState) => (
      { genres: { ...prevState.genres, [property]: value } }
    ));
  }

  render() {
    const { musicTeachers } = this.props;
    const {
      genres,
      instrument,
      name,
      ranking,
      years_exp,
      filterBar,
    } = this.state;
    const musicTeachersGet = () => {
      if (musicTeachers !== undefined && genres !== null) {
        const musicTeachersFiltered = [];
        let musicTeachersInstrumentFiltered = [];
        // Filter by instrument
        for (let i = 0; i < musicTeachers.length; i += 1) {
          const musicTeacher = musicTeachers[i];
          const instruments = musicTeacher.musical_instruments;
          for (let j = 0; j < instruments.length; j += 1) {
            if (instruments[j].kind === instrument
                && !musicTeachersFiltered.includes(musicTeacher)) {
              musicTeachersInstrumentFiltered.push(musicTeacher);
            }
          }
        }

        // Filter by name
        musicTeachersInstrumentFiltered = musicTeachersInstrumentFiltered
          .filter(mT => mT.name.toLowerCase()
            .includes(name.toLowerCase().trim()));

        // Filter by ranking
        musicTeachersInstrumentFiltered = musicTeachersInstrumentFiltered
          .filter(mT => parseFloat(mT.ranking) >= parseFloat(ranking));
        // Filter by Years of experience

        musicTeachersInstrumentFiltered = musicTeachersInstrumentFiltered
          .filter(mT => mT.years_exp >= years_exp);

        // Filter by Genres
        for (let i = 0; i < musicTeachersInstrumentFiltered.length; i += 1) {
          const musicTeacher = musicTeachersInstrumentFiltered[i];
          const currentGenres = musicTeacher.music_genres;
          for (let j = 0; j < currentGenres.length; j += 1) {
            if (Object.keys(genres).includes(currentGenres[j].category)
                && genres[currentGenres[j].category] === true
                && !musicTeachersFiltered.includes(musicTeacher)) {
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
        ));
      }
      return null;
    };
    return (
      <div className="MusicTeachersContainer">
        <ThemeBar section={`${instrument} Music Teachers`} />
        <img src={optionsImg} className="MusicTeachers-filter" onClick={this.showFilterBar} />
        {
          filterBar
            ? (
              <Filterbar
                genres={genres}
                years_exp={years_exp}
                ranking={ranking}
                name={name}
                handleGenre={this.handleGenre}
                handleInput={this.handleInput}
                hideFilterBar={this.hideFilterBar}
              />
            )
            : null
        }
        <div className="MusicTeachers">
          { musicTeachersGet() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    musicTeachers: state.musTeachers,
    musicGenres: state.musicGenres,
  }
);

export default connect(mapStateToProps)(MusicTeachers);
