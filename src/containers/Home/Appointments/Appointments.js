import React from 'react';
import { connect } from 'react-redux';
import Appointment from '../../../components/Appointment/Appointment';
import ThemeBar from '../../../components/ThemeBar/ThemeBar';
import './Appointments.css'

class Appointments extends React.Component {

  constructor(props) {
    super(props);
    this.getTeacherName = this.getTeacherName.bind(this);
  }

  getTeacherName(id) {
    const { musicTeachers } = this.props;
    for(let i=0; i < musicTeachers.length; i+=1) {
      if( musicTeachers[i].id === id) {
        return musicTeachers[i].name
      }
    }
  }
   
  render() {
    return (
      <div>
        <ThemeBar section={"My Class Appointments"} />
        <div className="AppointmentsContainer">
          {
            this.props.appointments.map((appo,idx) => 
              {
                const music_teacher_name = this.getTeacherName(appo.music_teacher_id);
                return (
                  <div key={'Appo'+idx}>
                    <Appointment 
                      date={appo.date}
                      musicTeacherId={appo.music_teacher_id}
                      musicTeacherName={music_teacher_name}
                    />
                  </div>
                )
              }
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    appointments: state.appointments,
    musicTeachers: state.musTeachers
  }
}

export default connect(mapStateToProps)(Appointments);