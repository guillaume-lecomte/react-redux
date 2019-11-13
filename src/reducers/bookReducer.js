import { ADD_BOOK, GET_ALL_BOOKS } from '../actions/bookActions'

const initialState = {
  list: []
}

function bookReducer(state = initialState, {type, payload}) {
    switch (type) {
      case GET_ALL_BOOKS:
        return state;
      case ADD_BOOK:
        const { description, author } = payload;
          return [
            ...state,
            {
              text: description,
              author: author
            }
          ]
      default:
        return state
    }
  }

export default bookReducer;