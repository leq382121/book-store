import React, { useState, useEffect } from "react";
import BooksContainer from "./BooksContainer";
import { API_URL } from "../constants/global";

function GetBooks(props) {
  const [booksDb, setBooksDb] = useState([]);

  console.log(props.match.params.genreId);
  // match.params.genreId
  // hooks'ai - klasiu alterantyva, funkcin. komponentuose.
  useEffect(() => {
    const getBookData = async () => {
      const data = await fetch(
        API_URL + `/books/?subjects_like=${props.match.params.genreId}`
      )
        // const data = await fetch(API_URL + `/books`)
        .then((res) => res.json())
        .catch(console.log);

      console.log(data);
      setBooksDb(data);
    };

    getBookData();
    console.log(booksDb);
  }, [props.match.params.genreId]);

  // optimistic user interface
  const handleAddBook = (book) => {
    setBooksDb([...booksDb, book]);

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

  return <BooksContainer booksDb={booksDb} handleAddBook={handleAddBook} />;
}

export default GetBooks;
