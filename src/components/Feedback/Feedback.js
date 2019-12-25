import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { msgFeedbackFinish } from '../../store/actions/feedback';
import './Feedback.scss';

const Feedback = ({ msg, onMsgFeedbackFinish }) => (
  (
    <div className="feedbackContainer">
      <div className="feedbackContainerMsg">
        <h2>{msg.title}</h2>
        <p>{msg.content}</p>
        {
          msg.url
            ? (
              <Link to={{
                pathname: `${msg.url}`,
              }}
              >
                <button onClick={onMsgFeedbackFinish}>Ok</button>
              </Link>
            )
            : <button onClick={onMsgFeedbackFinish}>Ok</button>
        }
      </div>
    </div>
  )
);

const mapStateToProps = state => (
  {
    msg: state.feedback.msg,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onMsgFeedbackFinish: () => dispatch(msgFeedbackFinish()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
