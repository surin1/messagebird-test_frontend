import _ from 'lodash';

// creation
export const getIsCreateModalOpen = (state) => _.get(state, 'messageCreation.isCreateModalOpen');
export const getCreationError = (state) => _.get(state, 'messageCreation.messageCreateErrorText');

// list
export const getErrorData = (state) => _.get(state, 'messages.error');
export const getAllMessages = (state) => {
  const list = _.get(state, 'messages.list');

  return _.orderBy(list, (item) => item.createdDatetime, ['desc'])
};
export const getReceivedMessages = (state) => {
  const list = _.get(state, 'messages.list');
  const sorted = _.orderBy(list, (item) => item.createdDatetime, ['desc'])

  return sorted.filter((item) => item.direction === 'mo')
}
export const getSentMessages = (state) => {
  const list = _.get(state, 'messages.list');
  const sorted = _.orderBy(list, (item) => item.createdDatetime, ['desc'])

  return sorted.filter((item) => item.direction === 'mt')
}
export const getIsMessagesLoaded = (state) => _.get(state, 'messages.isLoaded');
