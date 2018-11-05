import * as A from '../actions';

export const initialState = {
  isCreateModalOpen: false,
  messageCreateErrorText: null
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case A.CREATE_MODAL_TOGGLE:
      return Object.assign(
        {},
        state,
        { messageCreateErrorText: null },
        { isCreateModalOpen: !state.isCreateModalOpen }
      )
    
    case A.MESSAGE_CREATE_SUCCESS:
      return Object.assign(
        {},
        state,
        { isCreateModalOpen: false }
      )
    
    case A.MESSAGE_CREATE_ERROR:
      return Object.assign(
        {},
        state,
        { messageCreateErrorText: action.error.toString() }
      )


    default: return state;
  }
}
