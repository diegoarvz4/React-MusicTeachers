import React from 'react';
import { connect } from 'react-redux';
import Appointment from '../../../components/Appointment/Appointment';
import ThemeBar from '../../../components/ThemeBar/ThemeBar';
import './Appointments.css';
import { appointmentDelete } from '../../../store/actions/appointments';

class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.getTeacherName = this.getTeacherName.bind(this);
  }

  getTeacherName(id) {
    const { musicTeachers } = this.props;
    for (let i = 0; i < musicTeachers.length; i += 1) {
      if (musicTeachers[i].id === id) {
        return musicTeachers[i].name;
      }
    }
    return null;
  }

  render() {
    const { appointments, onDeleteAppointment, token } = this.props;

    return (
      <div>
        <ThemeBar section="My Class Appointments" />
        <div className="AppointmentsContainer">
          <ul>
            {
              appointments.map((appo, idx) => {
                const musicTeacherName = this.getTeacherName(appo.music_teacher_id);
                return (
                  <li key={`Appo${idx + 1}`}>
                    <Appointment
                      date={appo.date}
                      id={appo.id}
                      musicTeacherId={appo.music_teacher_id}
                      musicTeacherName={musicTeacherName}
                      appointmentDelete={() => onDeleteAppointment(appo.id, token)}
                    />
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    appointments: state.appointments,
    musicTeachers: state.musTeachers,
    token: state.authReducer.token,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onDeleteAppointment: (id, token) => dispatch(appointmentDelete(id, token)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
