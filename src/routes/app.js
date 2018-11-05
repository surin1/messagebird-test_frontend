import MessagesList from '../modules/Pages/MessagesList';
import ReceivedMessages from '../modules/Pages/ReceivedMessages';
import SentMessages from '../modules/Pages/SentMessages';

import listPageSaga from '../sagas/page';

export const routes = [
  {
    path: '/',
    page: 'list',
    exact: true,
    component: MessagesList,
    saga: listPageSaga
  },
  {
    path: '/received',
    page: 'received',
    component: ReceivedMessages,
    saga: listPageSaga
  },
  {
    path: '/sent',
    page: 'sent',
    component: SentMessages,
    saga: listPageSaga
  }
]
