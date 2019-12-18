import React from 'react';
import { connect } from 'react-redux';
import { appointmentCreate, appointmentEdit } from '../../../store/actions/appointments';
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
      user_id: this.props.userId,
      appointment_id: null,
      edit: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.setTeacherName = this.setTeacherName.bind(this);
  }

  setTeacherName(appo_id) {
    const { musicTeachers, appointments} = this.props;

    for(let i = 0; i < appointments.length; i+=1){
      if(appointments[i].id === appo_id){
        for(let j = 0; j < musicTeachers.length; j+=1){
          if(appointments[i].music_teacher_id === musicTeachers[j].id){
            return [musicTeachers[j].id,musicTeachers[j].name];
          }
        }
      }
    }
  }

  componentDidMount() {
    
    if(this.props.history.location.hash !== ""){
      const appo_id = parseInt(this.props.history.location.hash.match(/\d+/)[0])
      this.setState({
        appointment_id: appo_id,
        edit: true,
        name: this.setTeacherName(appo_id)[1],
        music_teacher_id: this.setTeacherName(appo_id)[0],
      })
    } else {
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
  }


  handleSubmit(event) {
    event.preventDefault();
    if(this.state.edit) {
      const { date, user_id, music_teacher_id, time } = this.state;
      const appointment = {
        date: date+" "+time,
        user_id,
        music_teacher_id
      }
      console.log(appointment)
      this.props.onAppointmentEdit(this.state.appointment_id, appointment, this.props.token)
    } else {
      const { date, user_id, music_teacher_id, time } = this.state;
      const appointment = {
        date: date+" "+time,
        user_id,
        music_teacher_id
      }
      this.props.onAppointmentCreate(this.props.token, appointment);
    }
    
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const bookOperation = this.state.edit ? 'Edit:' : '';
    return (
      <div>
        <ThemeBar section={`${bookOperation} Book a class with ${this.state.name}`}/>
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
              <button type="submit">Confirm</button>
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
    appointments: state.appointments,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAppointmentCreate: (token, appointment) => dispatch(appointmentCreate(token, appointment)),
    onAppointmentEdit: (id, token) => dispatch(appointmentEdit(id, token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);