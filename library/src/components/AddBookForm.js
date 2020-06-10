import React, { Component } from "react";

class AddBookForm extends Component {
  bookInput = React.createRef;

  handleSubmit = (event) => {
    console.log(event);
    console.log(this.props);
    console.log(event.target);
    event.preventDefault(); //disabling default submit function

    console.log(event.target.querySelector('[name="addBook"]').value);
    console.log(event.target.querySelector('[name="addLanguages"]').value);

    const book = {
      title: event.target.querySelector('[name="addBook"]').value,
      year: event.target.querySelector('[name="addLanguages"]').value,
    };

    console.log(book);

    this.props.handleAddBook(book);

    // clearing form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Add New Book Title </label>
        <input name="addBook" type="text" />

        <label> Add Book languages</label>
        <input name="addLanguages" type="text" />
        <br />

        <input type="submit"></input>
      </form>
    );
  }
}

export default AddBookForm;
