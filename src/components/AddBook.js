import React, { useState, Fragment } from "react";

const AddBook = ({ add }) => {
  const initialState = {
    title: "",
    author: "",
  };
  const [currentBook, setCurrentBook] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentBook({ ...currentBook, [name]: value });
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    const newBook = {
      title: currentBook.title,
      author: currentBook.author,
    };
    add(newBook);
    setCurrentBook(initialState);
  };

  return (
    <Fragment>
      <form className="form-inline" onSubmit={handleSubmit}>
        <label>Title :</label>
        <input
          name="title"
          type="text"
          value={currentBook.title}
          placeholder="Enter book's title"
          onChange={(event) => handleInputChange(event)}
          required
        />
        <label>Author :</label>
        <input
          name="author"
          type="text"
          value={currentBook.author}
          placeholder="Enter book's author"
          onChange={(event) => handleInputChange(event)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </Fragment>
  );
};

export default AddBook;
