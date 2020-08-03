import React from "react";
import { BOOK_SCHEMA } from "../../constants/global";

function AddBookForm({ handleAddBook, booksType, addNewGenre }) {
  const handleSubmit = (event) => {
    const addBookSubmitData = new FormData(event.target);
    const newBook = {};

    event.preventDefault();

    for (const formItemKey of addBookSubmitData.keys()) {
      addBookSubmitData.getAll(formItemKey).length > 1
        ? newBook[formItemKey] = addBookSubmitData.getAll(formItemKey) || null
        : newBook[formItemKey] = addBookSubmitData.get(formItemKey) || null
    }
    console.log(newBook)

    handleAddBook(newBook);
    event.currentTarget.reset(); // clearing form
  };

  // We don't need possiblity to enter genre by hand. 
  // const handleButtonClick = (e) => {
  //   const newGenreForm = e.currentTarget.parentNode;
  //   const newGenreValue = newGenreForm.getElementsByClassName("input")[0].value;

  //   addNewGenre(newGenreValue);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label> Add New Book Title </label>
      <br />
      <input name={BOOK_SCHEMA.title} type="text" />
      <br />
      <label> Add Book Genre</label>

      <div className="checkbox-buttons">
        {/* Multiple select */}
        <select name={BOOK_SCHEMA.subjects} multiple size="5">
          {booksType.map((type, index) => {
            return (
              <option key={type + index} value={type}>
                {type}
              </option>
            );
          })}
        </select>

        {/* adding a new Genre */}
        {/* <div className="addNewGenre">
          <label>Add new Genre</label>
          <br />
          <input type="text" className="input"></input>
          <button
            type="button"
            onClick={(e) => {
              handleButtonClick(e);
            }}
          >
            +
          </button>
        </div> */}
      </div>

      <br />
      <br />

      <input type="submit"></input>
    </form>
  );
}

export default AddBookForm;
