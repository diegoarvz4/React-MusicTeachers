import React from 'react';
import { connect } from 'react-redux';
import { appointmentCreate } from '../../../store/actions/appointments';
import ThemeBar from '../../../components/ThemeBar/ThemeBar';
import './BookAppointment.css';

class BookAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      music_teacher_id: 1,
      user_id: this.props.userId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    const { musicTeachers } = this.props;
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
        const name = musicTeachers.filter( mT => mT.id === parseInt(param[1]))[0].name;
        this.setState({
          [param[0]]: param[1],
          name: name,
        })
    }
  }


  handleSubmit(event) {
    event.preventDefault();
    const { date, user_id, music_teacher_id, time } = this.state;
    const appointment = {
      date: date+" "+time,
      user_id,
      music_teacher_id
    }
    this.props.onAppointmentCreate(this.props.token, appointment);
    
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <ThemeBar section={`Book a class with ${this.state.name}`}/>
        <div className="BookAppointmentContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="DateAppointment">
              <label htmlFor="date">Date</label>
              <input type="date" name="date" value={this.state.date} onChange={this.handleOnChange}/>
            </div>

            <div className="TimeAppointment">
              <label htmlFor="time">Time</label>
              <input type="time" name="time" onChange={this.handleOnChange}/>
            </div>
            <div className="Submit">
              <button type="submit">Book</button>
            </div>
          </form>
        </div>
      </div>
    ); 
  }
}

const mapStateToProps = state => {
  return {
    userId: state.authReducer.id,
    token: state.authReducer.token,
    musicTeachers: state.musTeachers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAppointmentCreate: (token, appointment) => dispatch(appointmentCreate(token, appointment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);