import { combineReducers } from 'redux';
import bookReducer from './bookReducer';

const bookApp = combineReducers({
    book : bookReducer
})

export default bookApp;