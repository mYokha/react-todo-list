import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import { createLogger } from 'redux-logger'

// Middleware
let finalCreateStore  = compose(
  applyMiddleware(createLogger())
)(createStore)

export default function configeStore(initialState = { todos: [] }) {
  return finalCreateStore(reducer, initialState)
}
