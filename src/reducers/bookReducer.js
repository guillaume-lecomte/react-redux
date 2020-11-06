import { ADD_BOOK, REMOVE_BOOK } from "../actions/bookActions";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    title: "Eloquent JavaScript, Second Edition",
    author: "Marijn Haverbeke",
  },
  {
    id: uuidv4(),
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
  },
  {
    id: uuidv4(),
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
  },
  {
    id: uuidv4(),
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
  },
];

function bookReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_BOOK:
      const { title, author } = payload;
      return [
        ...state,
        {
          id: uuidv4(),
          title,
          author,
        },
      ];
    case REMOVE_BOOK:
      const { id } = payload;
      return state.filter((book) => book.id !== id);
    default:
      return state;
  }
}

export default bookReducer;
