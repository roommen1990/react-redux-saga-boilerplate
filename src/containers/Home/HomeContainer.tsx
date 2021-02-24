import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadHomeComponent } from './store/actions'

const HomeContainer = () => {
  const dispatch = useDispatch()

  const homeState = useSelector((state: RootState) => state.home)

  return (
    <div>
      <p>Home</p>
      <button id={'button'} onClick={() => dispatch(loadHomeComponent())}>
        Click to dispatch
      </button>
    </div>
  )
}

export default HomeContainer
