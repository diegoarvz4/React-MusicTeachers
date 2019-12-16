import React from 'react';
import { connect } from 'react-redux';
import Appointment from '../../../components/Appointment/Appointment';

class Appointments extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    }
  }
  
  render() {
    return (
      <div>
        {
          this.props.appointments.map(appo => (
            <Appointment 
              key={appo.id}
              date={appo.date}
              musicTeacherId={appo.music_teacher_id} />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    appointments: state.appointments,
  }
}

export default connect(mapStateToProps)(Appointments);