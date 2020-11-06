import React, { Fragment } from "react";
import BookDetails from "../containers/BookDetailsContainer";
import AddBook from "../containers/AddBookContainer";

const BookList = ({ list }) => (
  <Fragment>
    <AddBook />

    {list && list.length > 0 ? (
      <table className="styled-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((book) => (
            <tr key={book.id}>
              <BookDetails bookItem={book} />
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <div style={{ marginTop: 20 }}>
        <span>No books to read :(</span>
      </div>
    )}
  </Fragment>
);

export default BookList;
