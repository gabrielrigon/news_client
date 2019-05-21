import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import NewsApp from '../reducers'

export const store = createStore(NewsApp, applyMiddleware(thunk))