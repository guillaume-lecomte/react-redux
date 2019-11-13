export const ADD_BOOK = 'ADD_BOOK';
export function addBook(book) {
  return { type: ADD_BOOK, book }
}

export const GET_ALL_BOOKS = 'GET_ALL_BOOKS';
export function getAllBooks() {
  return { type: GET_ALL_BOOKS }
}
