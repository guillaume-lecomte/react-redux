export const ADD_BOOK = "ADD_BOOK";
export function addBook(newBook) {
  return { type: ADD_BOOK, payload: newBook };
}

export const REMOVE_BOOK = "REMOVE_BOOK";
export function removeBook(id) {
  return { type: REMOVE_BOOK, payload: { id } };
}
