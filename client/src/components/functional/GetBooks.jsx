import React, { useState, useEffect } from "react";
import BooksContainer from "../static/BooksContainer";
import { API_URL } from "../../constants/global";

const GetBooks = (props) => {
  const [booksState, setBooksState] = useState([]);
  const selectedSubject = props.match.params.BookSubject;
  const ws = new WebSocket("ws://localhost:3501"); // try wss?

  useEffect(() => {
    ws.onopen = () => {
      console.log("Now connected");

      ws.send("alus");
    };

    // ws.onmessage = (event) => {
    //   const books = JSON.parse(event.data);
    //   books.forEach((book) => console.log(book));
    // };

    const getBookDataBySubject = async () => {
      const data = await fetch(
        API_URL + `/books/?subjects_like=${selectedSubject}`
      )
        .then((res) => res.json())
        .catch(console.log);

      console.log(data);

      setBooksState(data);
    };

    getBookDataBySubject();
  }, [selectedSubject]);

  const handleAddBook = (newBook) => {
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
    }).then((res) => {
      console.log(res);

      if (res.ok && res.status === 201) {
        const isSameSubjects = newBook.subjects.find(
          (currentlyAddibleGenre) => currentlyAddibleGenre === selectedSubject
        );

        if (isSameSubjects) {
          setBooksState([...booksState, newBook]);
        }
      }
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
