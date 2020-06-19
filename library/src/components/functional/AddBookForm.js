import React from "react";
import { BOOK_SCHEMA } from '../../constants/global'

function AddBookForm({ handleAddBook, booksType, addNewGenre }) {

  const handleSubmit = (event) => {
    const formSelector = (selector) => {
      return event.target.querySelector(`[name=${selector}]`).value
    }

    const book = {
      title: formSelector(BOOK_SCHEMA.title),
      subjects: formSelector(BOOK_SCHEMA.subjects),
    };

    event.preventDefault();  //disabling default submit function
    handleAddBook(book);
    event.currentTarget.reset();  // clearing form
  };

  const handleButtonClick = (e) => {
    const newGenreForm = e.currentTarget.parentNode;
    const newGenreValue = newGenreForm.getElementsByClassName('input')[0].value;

    addNewGenre(newGenreValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Add New Book Title </label><br />
      <input name={BOOK_SCHEMA.title} type="text" />

      <br />
      <br />

      <label> Add Book Subjects</label>

      {/* later let's add functionality for adding more subjects*/}
      <div className="checkbox-buttons">
        <fieldset>
          {booksType.map((type, index) => {
            return (

              <label htmlFor={type + index} key={type + index} >{type}
                <input
                  type="checkbox"
                  name={type}
                  id={type + index}
                  value={type}
                  className="mx-2"
                />
              </label>
            )
          })}
        </fieldset>

        {/* adding a new Genre */}
        <div className="addNewGenre">
          <label>Add new Genre</label><br />
          <input type="text" className="input"></input>
          <button type="button" onClick={(e) => { handleButtonClick(e) }}>+</button>
        </div>

      </div>

      <br />
      <br />

      <input type="submit"></input>
    </form>
  );
}

export default AddBookForm;
