import React from 'react';
import './Filterbar.css';
import closeIcon from '../Sidebar/close-icon.svg'

class Filterbar extends React.Component {
  constructor() {
    super()
    this.state = {
      years_exp: 60,
      ranking: 5.0,
      name: '',
      genres: {},
    }
    this.onHandleGenre = this.onHandleGenre.bind(this);
    this.handeInput = this.handeInput.bind(this);
  }

   componentDidMount() {
    const { years_exp, ranking, name, genres } = this.props;
    this.setState({
      years_exp: years_exp,
      ranking: ranking,
      name: name,
      genres: genres,
    })
  }

  handeInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    this.props.handleInput(event);
  }

  onHandleGenre(property, value) {
    this.setState((prevState) => {
      return {genres: {...prevState.genres, [property]: value}};
    })
    this.props.handleGenre(property, value)
  }

  render() {

    const { genres } = this.state;
    return (
      <div className="filterBar">
        <div className="filterBar-CloseContainer">
          <h1>Options</h1>
          <img src={closeIcon} onClick={this.props.hideFilterBar} />
        </div>
        <form className="filterBar-form">
          <div className="fieldContainer">
            <label htmlFor="years_exp">Min. Years of Experience</label>
            <div className="fieldContainer-range">
              <input name="years_exp" onChange={this.handeInput} value={this.state.years_exp} type="range" min="0" max="60" />
              <span>{this.state.years_exp}</span>
            </div>
          </div>

          <div className="fieldContainer">
            <label htmlFor="ranking">Min Ranking</label>
            <div className="fieldContainer-range">
              <input name="ranking" onChange={this.handeInput} value={this.state.ranking} type="range" min="1.0" max="5.0" step="0.1" />
              <span>{this.state.ranking}</span>
            </div>
          </div>
          
          <div className="fieldContainer">
            <label htmlFor="name">Name</label>
            <input name="name" value={this.state.name} onChange={this.handeInput} />
          </div>

          <div className="fieldContainerGenres">
          <label htmlFor="musicGenreFilter">Music Genres</label>
            {
              genres
              ? Object.keys(genres).map((genreKey) => (
                <div key={genreKey}>
                  <input type='checkbox' checked={genres[genreKey]} onChange={() => this.onHandleGenre(genreKey, !genres[genreKey])}  />
                  <span>{genreKey}</span>
                </div>
              ))
              : null
            }
          </div>
        </form>
      </div>
    )
  }
}

export default Filterbar;