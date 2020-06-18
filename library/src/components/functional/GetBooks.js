import React, { useState, useEffect } from "react";
import BooksContainer from "../static/BooksContainer";
import { API_URL } from "../../constants/global";

function GetBooks(props) {
  const [booksDb, setBooksDb] = useState([]);
  const genre = props.match.params.genreId;

  console.log(props)

  useEffect(() => {
    const getBookData = async () => {
      const data = await fetch(
        API_URL + `/books/?subjects_like=${genre}`
      )
        .then((res) => res.json())
        .catch(console.log);

      setBooksDb(data);
    };

    getBookData();
  }, [genre]);


  // optimistic user interface
  // using here due to update list of books
  const handleAddBook = (book) => {
    setBooksDb([...booksDb, book]);

    fetch(API_URL + "/books", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: book.title,
        subjects: [book.subjects],
      }),
    });
  };

  return (
    <BooksContainer booksDb={booksDb} handleAddBook={handleAddBook} booksType={props.booksType} addNewGenre={props.addNewGenre} />
  )
}

export default GetBooks;
