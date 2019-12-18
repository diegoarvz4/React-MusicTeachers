import React from 'react';
import { connect } from 'react-redux';
import { msgFeedbackFinish } from '../../store/actions/feedback';
import { Link } from 'react-router-dom';
import './Feedback.css';

const Feedback = ({ msg, onMsgFeedbackFinish }) => {

  return (
    <div className="feedbackContainerMsg">
      <h1>{msg.title}</h1>
      <p>{msg.content}</p>
      {
        msg.url
        ? <Link to={{
              pathname: `${msg.url}`
            }}>
            <button onClick={onMsgFeedbackFinish}>Ok</button>
          </Link> 
        : <button onClick={onMsgFeedbackFinish}>Ok</button>
      }
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    msg: state.feedback.msg,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMsgFeedbackFinish: () => dispatch(msgFeedbackFinish()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback)
