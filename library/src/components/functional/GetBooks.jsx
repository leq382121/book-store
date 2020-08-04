import React, { useState, useEffect } from "react";
import BooksContainer from "../static/BooksContainer";
import { API_URL } from "../../constants/global";

const GetBooks = (props) => {
  const [booksState, setBooksState] = useState([]);
  const selectedSubject = props.match.params.BookSubject;

  useEffect(() => {
    const getBookDataBySubject = async () => {
      const data = await fetch(
        API_URL + `/books/?subjects_like=${selectedSubject}`
      )
        .then((res) => res.json())
        .catch(console.log);

      setBooksState(data);
    };

    getBookDataBySubject();
  }, [selectedSubject]);

  const handleAddBook = (newBook) => {
    // optimistic user interface
    // using here due to update list of books
    if (
      newBook.subjects.find(
        (currentlyAddibleGenre) => currentlyAddibleGenre === selectedSubject
      )
    ) {
      setBooksState([...booksState, newBook]);
    }

    fetch(API_URL + "/books", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newBook.title[0],
        subjects: newBook.subjects,
      }),
    });
  };

  return (
    <BooksContainer
      booksState={booksState}
      handleAddBook={handleAddBook}
      booksType={props.booksType}
    />
  );
};

export default GetBooks;
