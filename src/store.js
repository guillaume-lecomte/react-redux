import { createStore } from 'redux'
import bookApp from './reducers'

const store = createStore(bookApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;