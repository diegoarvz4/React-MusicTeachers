import React from 'react';
import './Filterbar.css';

class Filterbar extends React.Component {
  constructor() {
    super()
    this.state = {
      genres: {},
    }
    this.onHandleGenre = this.onHandleGenre.bind(this);
  }

   componentDidMount() {
    this.setState({
      genres: this.props.genres,
    })
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
        <form>
          <label htmlFor="years_exp">Years of Experience</label>
          <input name="years_exp" type="number" />


          <label htmlFor="ranking">Min Ranking</label>
          <input name="ranking" type="float" />


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

          <label htmlFor="name">Name</label>
          <input name="name" />
        </form>
      </div>
    )
  }
}

export default Filterbar;