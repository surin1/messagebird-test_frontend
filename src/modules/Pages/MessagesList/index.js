import React from 'react';
import { connect } from 'react-redux';
import { getAllMessages } from '../../../selectors';
import MessagesTable from '../../Components/MessagesTable';

const MessagesList = ({ allMessages }) => <MessagesTable messages={allMessages} />

const mapStateToProps = (state) => ({
  allMessages: getAllMessages(state)
});

export default connect(mapStateToProps)(MessagesList);
