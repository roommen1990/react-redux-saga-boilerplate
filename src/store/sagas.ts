import { all } from '@redux-saga/core/effects'
import { homeSagas } from '../containers/Home/store/sagas'

export default function* rootSaga() {
  yield all([homeSagas()])
}
