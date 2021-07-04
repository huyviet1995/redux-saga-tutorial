import * as types from '../types/users'

const initialStates = {
  users: [],
  loading: false,
  error: null,
}

export default function users(state = initialStates, action) {
  switch (action.type) {
    case types.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      }
    case types.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

