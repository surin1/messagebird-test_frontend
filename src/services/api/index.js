import makeRequest from './request';

function getMessagesList () {
  return makeRequest('GET', '/messages/list');
}

function sendMessage (data) {
  return makeRequest('POST', '/messages/send', data);
}

export default {
  getMessagesList,
  sendMessage
}
