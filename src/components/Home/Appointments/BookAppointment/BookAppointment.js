import React from 'react'

class BookAppointment extends React.Component {
  constructor() {
    super();
    this.state = {
      date: null,
      time: null,
      teacher_id: null,
      student_id: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleOnChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Teacher</label>
        <input type="text" name="name" onChange={this.handleOnChange}/>

        <label htmlFor="date">Date</label>
        <input type="date" name="date" onChange={this.handleOnChange}/>

        <label htmlFor="time">Time</label>
        <input type="time" name="time" onChange={this.handleOnChange}/>

        <button type="submit">Book</button>
      </form>
    ); 
  }
}

export default BookAppointment;