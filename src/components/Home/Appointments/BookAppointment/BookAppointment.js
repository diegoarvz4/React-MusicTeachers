import React from 'react';
import { connect } from 'react-redux';
import { appointmentCreate } from '../../../../store/actions/appointments';


class BookAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      music_teacher_id: 2,
      user_id: this.props.userId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { date, user_id, music_teacher_id, time } = this.state;
    const appointment = {
      date: date+" "+time,
      user_id,
      music_teacher_id
    }
    console.log(appointment)
    this.props.onAppointmentCreate(this.props.token, appointment);
    
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="music_teacher_id">Teacher</label>
        <input type="number" name="music_teacher_id" value={this.state.music_teacher_id} onChange={this.handleOnChange}/>

        <label htmlFor="date">Date</label>
        <input type="date" name="date" value={this.state.date} onChange={this.handleOnChange}/>

        <label htmlFor="time">Time</label>
        <input type="time" name="time" onChange={this.handleOnChange}/>

        <button type="submit">Book</button>
      </form>
    ); 
  }
}

const mapStateToProps = state => {
  return {
    userId: state.authReducer.id,
    token: state.authReducer.token,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAppointmentCreate: (token, appointment) => dispatch(appointmentCreate(token, appointment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);