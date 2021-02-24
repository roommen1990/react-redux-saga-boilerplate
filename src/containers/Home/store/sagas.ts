import axios from 'axios'
import { call, put, takeLatest, select, take, all, takeEvery } from 'redux-saga/effects'
import { logger } from '../../../utils/logger'
import { HomeActionTypes } from './constant'
import { push } from 'connected-react-router'



const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
  params: {} // do not remove this, its added to add params later in the config
})

/* // Add a request interceptor
instance.interceptors.request.use(
  async config => {
    const token = 'someplace to get token';

    if (token) {
      config.headers.common['Authorization'] = 'Bearer ' + token
      config.headers.common['Access-Control-Allow-Origin'] = '*'
    } else {
      config.headers.common['Access-Control-Allow-Origin'] = '*'
    }

    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

//instance.get(url, data) */


export function* init() {
  while (true) {
    const action = yield take(HomeActionTypes.LOAD)
    logger('recieved request at logger');
    try {
      yield put(push('/password/forgot'));
    } catch (error) {
    }
  }
}

export function* homeSagas() {
  yield takeEvery(HomeActionTypes.LOAD, init)
}
