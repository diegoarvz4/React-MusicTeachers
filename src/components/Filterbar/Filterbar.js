import React from 'react';
import './Filterbar.css';

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
        <span onClick={this.props.hideFilterBar}>Close</span>
        <form>
          <div>
            <label htmlFor="years_exp">Min. Years of Experience</label>
            <input name="years_exp" onChange={this.handeInput} value={this.state.years_exp} type="range" min="0" max="60" />
            <span>{this.state.years_exp}</span>
          </div>

          <div>
            <label htmlFor="ranking">Min Ranking</label>
            <input name="ranking" onChange={this.handeInput} value={this.state.ranking} type="range" min="1.0" max="5.0" step="0.1" />
            <span>{this.state.ranking}</span>
          </div>
          
          <div>
            <label htmlFor="name">Name</label>
            <input name="name" value={this.state.name} onChange={this.handeInput} />
          </div>

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
        </form>
      </div>
    )
  }
}

export default Filterbar;