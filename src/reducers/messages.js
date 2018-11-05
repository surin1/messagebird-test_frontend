import * as A from '../actions';

export const initialState = {
  list: [],
  error: null,
  isLoaded: false
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case A.MESSAGES_FETCH_END:
      return Object.assign(
        {},
        state,
        { isLoaded: true }
      )

    case A.MESSAGES_FETCH_END:
      return Object.assign(
        {},
        initialState
      )

    case A.MESSAGES_FETCH_SUCCESS:
      return Object.assign(
        {},
        initialState,
        { list: action.messages }
      )

    case A.MESSAGES_FETCH_ERROR:
      return Object.assign(
        {},
        initialState,
        { error: action.error.toString() }
      )

    default: return state;
  }
}
