import appointmentReducer from '../appointments';

describe ('Testing the appointments reducer', () => {
  it('It has initial state when no state is passed', () => {
    expect(appointmentReducer(undefined, { type: 'Somehintg'})).toBeDefined();
  })
  it('adds and appointment', () => {

    const initialState =  [];
    const appointment = {
      id: 1,
      user_id: 2,
      music_teacher: 1,
      date: '2018-19-20'
    }
    const expectedState = [
        {
          id: 1,
          user_id: 2,
          music_teacher: 1,
          date: '2018-19-20'
        }
    ]
    expect(appointmentReducer(initialState, {
      type: 'APPOINTMENT_SUCCESS', appointment
    })).toEqual(expectedState)
  })

  it('overrides appointments', () => {
    const initialState =  [{
      1: 1
    }];
    const appointments = [{
      id: 1,
      user_id: 2,
      music_teacher: 1,
      date: '2018-19-20'
    }]
    const expectedState = [
        {
          id: 1,
          user_id: 2,
          music_teacher: 1,
          date: '2018-19-20'
        }
    ]
    expect(appointmentReducer(initialState, {
      type: 'APPOINTMENTS_GET', appointments: appointments
    })).toEqual(expectedState)
  })
})