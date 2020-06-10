import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import { API_URL } from "../constants/global";

class App extends Component {
  state = {
    booksdb: [],
    booksType: [],
  };

  // hooks'ai - klasiu alterantyva, funkcin. komponentuose.
  componentDidMount() {
    fetch(API_URL + "/books")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ booksdb: data });
        console.log("settinu nauja state is db :)");
      })
      .catch(console.log);
  }

  // optimistic user interface
  handleAddBook = (book) => {
    console.log("vaziuojam dzesika", book);

    // surenderinam knyga optimistiksia
    this.setState((prevState) => {
      console.log("kuriam nauja state", book);
      return {
        booksdb: [
          ...prevState.booksdb,
          {
            title: book.title,
            languages: book.languages,
          },
        ],
      };
    });

    // post i API / prettier
    fetch(API_URL + "/books", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: book.title,
        secondParam: book.languages,
      }),
    });
  };

  render() {
    return (
      (<Header />),
      (<Body booksdb={this.state.booksdb} handleAddBook={this.handleAddBook} />)
    );
  }
}

export default App;
