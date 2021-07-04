import { call, put, takeEvery } from 'redux-saga/effects'
import * as types from '../types/users'

const apiUrl = 'https://jsonplaceholder.typicode.com/users'

function getApi() {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    }
  }).then(response => {
    return response.json()
  }) 
  .catch(error => {
    throw error
  }) 
}

function* fetchUsers(action) {
  try {
    const users = yield call(getApi)
    yield put({ type: types.GET_USERS_SUCCESS, payload: users })
  } catch (e) {
    yield put({ type: types.GET_USERS_FAILED, payload: e.message})
  }
}

function* userSaga() {
  yield takeEvery(types.GET_USERS_REQUESTED, fetchUsers)
}

export default userSaga;

