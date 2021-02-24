import React from 'react'
import { Provider, useSelector } from 'react-redux'
import styled from 'styled-components'
import { routes } from './routes/routes'
import store, { history } from './store'
import { ConnectedRouter } from 'connected-react-router'

let App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <ConnectedRouter history={history}>{routes}</ConnectedRouter>
      </Container>
    </Provider>
  )
}

const Container = styled.div``

export default App
