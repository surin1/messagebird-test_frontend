import { takeLatest, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { matchRoutes } from 'react-router-config';
import _ from 'lodash';
import { routes } from '../routes/app';

function* navigationSaga (action) {
  const { pathname } = action.payload;
  const branches = matchRoutes(routes, pathname);

  const branch = _.find(branches, 'match.isExact') || branches[0];

  const saga = _.get(branch, 'route.saga');
  const page = _.get(branch, 'route.page');

  const urlParams = _.get(branch, 'match.params', {});
  const args = { urlParams, page };

  if (saga) {
    yield fork(saga, args);
  }
}

export default function* watchNavigation () {
  yield takeLatest(LOCATION_CHANGE, navigationSaga);
}
