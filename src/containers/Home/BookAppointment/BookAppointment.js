import React from 'react';
import { connect } from 'react-redux';
import { appointmentCreate, appointmentEdit } from '../../../store/actions/appointments';
import ThemeBar from '../../../components/ThemeBar/ThemeBar';
import './BookAppointment.css';

class BookAppointment extends React.Component {
  constructor(props) {
    super(props);
    const { userId } = this.props;
    this.state = {
      name: '',
      date: '',
      time: '',
      music_teacher_id: 1,
      user_id: userId,
      appointment_id: null,
      edit: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.setTeacherName = this.setTeacherName.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    if (history.location.hash !== '') {
      // eslint-disable-next-line radix
      const appoId = parseInt(history.location.hash.match(/\d+/)[0]);
      this.setState({
        appointment_id: appoId,
        edit: true,
        name: this.setTeacherName(appoId)[1],
        music_teacher_id: this.setTeacherName(appoId)[0],
      });
    } else {
      const { musicTeachers, location } = this.props;
      const query = new URLSearchParams(location.search);
      // eslint-disable-next-line no-restricted-syntax
      for (const param of query.entries()) {
        // eslint-disable-next-line prefer-destructuring
        const name = musicTeachers.filter(mT => mT.id === parseInt(param[1]))[0].name;
        this.setState({
          [param[0]]: param[1],
          name,
        });
      }
    }
  }

  setTeacherName(appoId) {
    const { musicTeachers, appointments } = this.props;
    for (let i = 0; i < appointments.length; i += 1) {
      if (appointments[i].id === appoId) {
        for (let j = 0; j < musicTeachers.length; j += 1) {
          if (appointments[i].music_teacher_id === musicTeachers[j].id) {
            return [musicTeachers[j].id, musicTeachers[j].name];
          }
        }
      }
    }
    return null;
  }


  handleSubmit(event) {
    event.preventDefault();
    const { edit, appointment_id } = this.state;
    if (edit) {
      const {
        date,
        user_id,
        music_teacher_id,
        time,
      } = this.state;
      const appointment = {
        date: `${date} ${time}`,
        user_id,
        music_teacher_id,
      };
      const { onAppointmentEdit, token } = this.props;
      onAppointmentEdit(appointment_id, appointment, token);
    } else {
      const { onAppointmentCreate, token } = this.props;
      const {
        date,
        user_id,
        music_teacher_id,
        time,
      } = this.state;
      const appointment = {
        date: `${date} ${time}`,
        user_id,
        music_teacher_id,
      };
      onAppointmentCreate(token, appointment);
    }
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { edit, name, date } = this.state;
    const bookOperation = edit ? 'Edit:' : '';
    return (
      <div>
        <ThemeBar section={`${bookOperation} Book a class with ${name}`} />
        <div className="BookAppointmentContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="DateAppointment">
              <label htmlFor="date">Date</label>
              <input type="date" name="date" value={date} onChange={this.handleOnChange} />
            </div>

            <div className="TimeAppointment">
              <label htmlFor="time">Time</label>
              <input type="time" name="time" onChange={this.handleOnChange} />
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

const mapStateToProps = state => (
  {
    userId: state.authReducer.id,
    token: state.authReducer.token,
    musicTeachers: state.musTeachers,
    appointments: state.appointments,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onAppointmentCreate: (token, appointment) => dispatch(appointmentCreate(token, appointment)),
    onAppointmentEdit: (id, token) => dispatch(appointmentEdit(id, token)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);
