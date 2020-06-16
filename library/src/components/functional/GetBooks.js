import React, { useState, useEffect } from "react";
import BooksContainer from "../static/BooksContainer";
import { API_URL } from "../../constants/global";

function GetBooks(props) {
  const [booksDb, setBooksDb] = useState([]);

  useEffect(() => {
    const getBookData = async () => {
      const data = await fetch(
        API_URL + `/books/?subjects_like=${props.match.params.genreId}`
      )
        .then((res) => res.json())
        .catch(console.log);

      setBooksDb(data);
    };

    getBookData();
  }, [props.match.params.genreId]);

  // optimistic user interface
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
        secondParam: book.languages,
      }),
    });
  };

  return <BooksContainer booksDb={booksDb} handleAddBook={handleAddBook} />;
}

export default GetBooks;
