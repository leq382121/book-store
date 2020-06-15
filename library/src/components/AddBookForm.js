import React from "react";

function AddBookForm({ handleAddBook }) {
  // bookInput = React.createRef;

  const handleSubmit = (event) => {
    console.log(event);
    console.log(event.target);
    event.preventDefault(); //disabling default submit function

    console.log(event.target.querySelector('[name="addBook"]').value);
    console.log(event.target.querySelector('[name="addLanguages"]').value);

    const book = {
      title: event.target.querySelector('[name="addBook"]').value,
      year: event.target.querySelector('[name="addLanguages"]').value,
    };

    handleAddBook(book);

    // clearing form
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label> Add New Book Title </label>
      <input name="addBook" type="text" />

      <label> Add Book languages</label>
      <input name="addLanguages" type="text" />
      <br />

      <input type="submit"></input>
    </form>
  );
}

export default AddBookForm;
