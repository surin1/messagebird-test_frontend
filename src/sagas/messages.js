import { call, takeLatest, put, fork, delay, take, takeEvery, select } from 'redux-saga/effects';
import {
  fetchMessagesStart,
  MESSAGES_FETCH,
  messagesSuccess,
  MESSAGE_CREATE,
  createMessageSuccess,
  messagesError,
  MESSAGE_CREATE_SUCCESS,
  createMessageError,
  fetchMessagesEnd
} from '../actions';
import api from '../services/api';
import _ from 'lodash';
import sagasHelpers from '../helpers/sagas';

function* handleMessageResponse (channel) {
  try {
    const response = yield call(api.getMessagesList);
    const messages = _.get(response, 'data.items');
    const statusCode = _.get(response, 'data.statusCode');

    if (statusCode && statusCode !== 200) {
      const errors = _.get(response, 'data.errors');
      const errorText = errors.map(({ description }) => description).join(', ');

      yield put(messagesError(errorText));
      return;
    }

    yield put(messagesSuccess(messages));
  } catch (e) {
    yield put(messagesError(e));

    if (channel) {
      channel.close();
    }
  } finally {
    yield put(fetchMessagesEnd())
  }
}

function* handleFetchMessages () {
  yield fork(handleMessageResponse);

  const channel = yield call(sagasHelpers.counter);
  yield takeEvery(channel, handleMessageResponse, channel);
}

function* handleMessageCreation ({ data }) {
  try {
    const response = yield call(api.sendMessage, data)
    const message = _.get(response, 'data');
    const statusCode = _.get(response, 'data.statusCode');

    if (statusCode && statusCode !== 200) {
      const errors = _.get(response, 'data.errors');
      const errorText = errors.map(({ description }) => description).join(', ');

      yield put(createMessageError(errorText));
      return;
    }

    yield put(createMessageSuccess(message))
  } catch (e) {
    yield put(createMessageError(e));
  }
}

export default function* watchMessagesList () {
  yield takeLatest(MESSAGES_FETCH, handleFetchMessages);
  yield takeLatest(MESSAGE_CREATE, handleMessageCreation);
  yield takeLatest(MESSAGE_CREATE_SUCCESS, handleFetchMessages);
}
