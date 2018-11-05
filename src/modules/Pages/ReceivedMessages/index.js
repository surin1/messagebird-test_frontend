import React from 'react';
import MessagesTable from '../../Components/MessagesTable';
import { connect } from 'react-redux';
import { getReceivedMessages } from '../../../selectors';

const ReceivedMessages = ({ receivedMessages }) => <MessagesTable messages={receivedMessages}/>

const mapStateToProps = (state) => ({
  receivedMessages: getReceivedMessages(state)
});

export default connect(mapStateToProps)(ReceivedMessages);
