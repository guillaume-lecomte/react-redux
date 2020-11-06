import { combineReducers } from "redux";
import bookReducer from "./bookReducer";

const bookApp = combineReducers({
  books: bookReducer,
});

export default bookApp;
