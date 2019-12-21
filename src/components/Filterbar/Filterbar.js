import React from 'react';
import './Filterbar.css';
import closeIcon from '../Sidebar/close-icon.svg';

class Filterbar extends React.Component {
  constructor() {
    super();
    this.state = {
      years_exp: 60,
      ranking: 5.0,
      name: '',
      genres: {},
    };
    this.onHandleGenre = this.onHandleGenre.bind(this);
    this.handeInput = this.handeInput.bind(this);
  }

  componentDidMount() {
    const {
      years_exp,
      ranking,
      name,
      genres,
    } = this.props;
    this.setState({
      years_exp,
      ranking,
      name,
      genres,
    });
  }

  onHandleGenre(property, value) {
    const { handleGenre } = this.props;
    this.setState((prevState) => (
      { genres: { ...prevState.genres, [property]: value } }
    ));
    handleGenre(property, value);
  }

  handeInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // eslint-disable-next-line react/destructuring-assignment
    this.props.handleInput(event);
  }

  render() {
    const { hideFilterBar } = this.props;
    const {
      genres,
      years_exp,
      ranking,
      name,
    } = this.state;
    return (
      <div className="filterBar">
        <div className="filterBar-CloseContainer">
          <h2>Options</h2>
          <img src={closeIcon} alt="close" onClick={hideFilterBar} />
        </div>
        <form className="filterBar-form">
          <div className="fieldContainer">
            <label htmlFor="years_exp">Min. Years of Experience</label>
            <div className="fieldContainer-range">
              <input name="years_exp" onChange={this.handeInput} value={years_exp} type="range" min="0" max="60" />
              <span>{years_exp}</span>
            </div>
          </div>

          <div className="fieldContainer">
            <label htmlFor="ranking">Min Ranking</label>
            <div className="fieldContainer-range">
              <input name="ranking" onChange={this.handeInput} value={ranking} type="range" min="1.0" max="5.0" step="0.1" />
              <span>{ranking}</span>
            </div>
          </div>
          <div className="fieldContainer">
            <label htmlFor="name">Name</label>
            <input name="name" value={name} onChange={this.handeInput} />
          </div>

          <div className="fieldContainerGenres">
            <label htmlFor="musicGenreFilter">Music Genres</label>
            {
              genres
                ? Object.keys(genres).map((genreKey) => (
                  <div className="checkboxesContainer" key={genreKey}>
                    <input className="inputCheckbox" type="checkbox" checked={genres[genreKey]} onChange={() => this.onHandleGenre(genreKey, !genres[genreKey])} />
                    <span>{genreKey}</span>
                  </div>
                ))
                : null
            }
          </div>
        </form>
      </div>
    );
  }
}

export default Filterbar;
