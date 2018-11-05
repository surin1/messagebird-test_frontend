import { fork, put } from 'redux-saga/effects';
import {
  fetchMessagesStart,
  fetchMessages
} from '../actions';
import watchMessagesList from './messages';

export default function* messagesListPageSaga (args) {
  yield fork(watchMessagesList);

  yield put(fetchMessages());
}
