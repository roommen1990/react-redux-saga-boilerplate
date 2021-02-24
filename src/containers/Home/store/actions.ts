import { action } from 'typesafe-actions'
import { HomeActionTypes } from './constant'

export const loadHomeComponent = () => {
  return action(HomeActionTypes.LOAD)
}

