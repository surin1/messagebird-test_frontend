export const MESSAGES_FETCH = 'messages/MESSAGES_FETCH';
export const MESSAGES_FETCH_END = 'messages/MESSAGES_FETCH_END';
export const MESSAGES_FETCH_SUCCESS = 'messages/MESSAGES_FETCH_SUCCESS';
export const MESSAGES_FETCH_ERROR = 'messages/MESSAGES_FETCH_ERROR';

export const MESSAGE_CREATE = 'messages/MESSAGE_CREATE';
export const MESSAGE_CREATE_SUCCESS = 'messages/MESSAGE_CREATE_SUCCESS';
export const MESSAGE_CREATE_ERROR = 'messages/MESSAGE_CREATE_ERROR';
export const CREATE_MODAL_TOGGLE = 'messages/CREATE_MODAL_TOGGLE';

export const fetchMessages = () => ({ type: MESSAGES_FETCH });
export const fetchMessagesEnd = () => ({ type: MESSAGES_FETCH_END });
export const messagesSuccess = (messages) => ({ type: MESSAGES_FETCH_SUCCESS, messages });
export const messagesError = (error) => ({ type: MESSAGES_FETCH_ERROR, error });

export const createMessage = ({ data }) => ({ type: MESSAGE_CREATE, data });
export const createMessageSuccess = (item) => ({ type: MESSAGE_CREATE_SUCCESS, item });
export const createMessageError = (error) => ({ type: MESSAGE_CREATE_ERROR, error });
export const toggleCreateModal = () => ({ type: CREATE_MODAL_TOGGLE });
