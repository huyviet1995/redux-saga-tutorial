import * as types from '../types/users'

export function getUsers(users) {
  return {
    type: types.GET_USERS_REQUESTED,
    payload: users,
  }
}