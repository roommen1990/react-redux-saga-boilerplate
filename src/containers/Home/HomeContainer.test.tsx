import React from 'react'
import { fireEvent, render, act } from '@testing-library/react'
import Home from '../Home'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store';

describe('HomeComponent', () => {
  const mockStore = configureMockStore()
  const store = mockStore({})

  const wrapper = render(
    <Provider store={store}>
      <Home />
    </Provider>
  )

  it('renders without crashing', () => {
    expect(wrapper.container.querySelector('#button').textContent).toBe('Click to dispatch')
  })
})
