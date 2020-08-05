import React from "react";
import { BOOK_SCHEMA } from "../../constants/global";

function AddBookForm({ handleAddBook, booksType }) {
  const handleSubmit = (event) => {
    const addBookSubmitData = new FormData(event.target);
    const newBook = {};

    event.preventDefault();

    for (const formItemKey of addBookSubmitData.keys()) {
      newBook[formItemKey] = addBookSubmitData.getAll(formItemKey) || null;
    }

    handleAddBook(newBook);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label> Add New Book Title </label>
      <br />

      <input name={BOOK_SCHEMA.title} type="text" />
      <br />

      <label> Add Book Genre</label>
      <div className="checkbox-buttons">
        <select name={BOOK_SCHEMA.subjects} multiple size="5">
          {booksType.map((type, index) => {
            return (
              <option key={type + index} value={type}>
                {type}
              </option>
            );
          })}
        </select>
      </div>
      <br />
      <br />

      <input type="submit"></input>
    </form>
  );
}

export default AddBookForm;
