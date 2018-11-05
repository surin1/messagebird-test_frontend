import React from 'react';
import MessagesTable from '../../Components/MessagesTable';
import { connect } from 'react-redux';
import { getSentMessages } from '../../../selectors';

const SentMessages = ({ sentMessages }) => <MessagesTable messages={sentMessages}/>

const mapStateToProps = (state) => ({
  sentMessages: getSentMessages(state)
});

export default connect(mapStateToProps)(SentMessages);
