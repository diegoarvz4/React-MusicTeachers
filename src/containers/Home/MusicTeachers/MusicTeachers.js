import React from 'react';
import ThemeBar from '../../../components/ThemeBar/ThemeBar';
import MusicTeacher from '../../../components/MusicTeacher/MusicTeacher';
import { connect } from 'react-redux';
import Filterbar from '../../../components/Filterbar/Filterbar';

class MusicTeachers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      years_experience: null,
      name: null,
      ranking: null,
      instrument: null,
      genres: null,
      filterBar: false,
    }
    this.showFilterBar = this.showFilterBar.bind(this);
    this.hideFilterBar = this.hideFilterBar.bind(this);
    this.handleGenre = this.handleGenre.bind(this); 
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

  }

  handleGenre(property, value) {
    console.log(property, value);
    this.setState((prevState, props) => {
      return {genres: {...prevState.genres, [property]: value}};
    })
  }

  render() {
    
    const musicTeachers = () => {
      if (this.props.musicTeachers !== undefined && this.state.genres !== null) {
        let musicTeachersFiltered = []
        let musicTeachersInstrumentFiltered = []
        const { musicTeachers } = this.props;
        console.log('********');
        for(let i=0; i < musicTeachers.length; i+=1) {
          const musicTeacher = musicTeachers[i];
          const instruments = musicTeacher.musical_instruments;
          for (let j=0; j < instruments.length; j+=1) {
            console.log(this.state.instrument)
            console.log(instruments[j].kind)
            if (instruments[j].kind === this.state.instrument
                && !musicTeachersFiltered.includes(musicTeacher)){
                  musicTeachersInstrumentFiltered.push(musicTeacher)
            }
          }
        }


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
      <div>
        <ThemeBar section={this.state.instrument + " Music Teachers"}/>
        <span onClick={this.showFilterBar}>Filter</span>
        {
          this.state.filterBar
          ? <Filterbar genres={this.state.genres} handleGenre={this.handleGenre} />
          : null
        }
        <div>
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