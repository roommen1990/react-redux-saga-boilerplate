import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'
import { home } from '../containers/Home/store/reducers'

const createRootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    home
  })

export default createRootReducer
