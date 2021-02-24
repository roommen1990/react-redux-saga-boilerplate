import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { HomeActionTypes } from './constant'

interface IhomeStateType {
  pending: boolean
  appStart: boolean
}

const initialState: IhomeStateType = {
  pending: false,
  appStart: false
}

type HomeActions = ActionType<typeof actions>

export const home = (state = initialState, action: HomeActions) => {
  switch (action.type) {
    // case HomeActionTypes.LOAD:
    //   return { ...state, appStart: true, pending: true }
    default:
      return state
  }
}
