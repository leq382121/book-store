import React, { useState } from "react";
import { API_URL } from "../../constants/global";

const Card = ({ book }) => {
  const [isEditButtonActive, setIsEditButtonActive] = useState(false);
  const [isTitle, setIsTitle] = useState(book.title);
  const [isSubject, setSubjects] = useState(book.subjects);

  const onEditButtonClick = (event, id) => {
    const title = isTitle;

    setIsEditButtonActive(!isEditButtonActive);

    if (isEditButtonActive) {
      submitCardTitleUpdate(event, id);
    }
  };

  const submitCardTitleUpdate = (event, id) => {
    const title = event.currentTarget.parentNode.querySelector(
      ".card-title-edit"
    ).value;

    setIsTitle(title);

    fetch(API_URL + "/books/" + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        subjects: book.subjects,
      }),
    });
  };

  console.log(book);

  return (
    <li className="card">
      <div className="card-body">

        {!isEditButtonActive ? (
          <h5 className="card-title">{isTitle}</h5>
        ) : (
            <input
              type="text"
              className="card-title-edit"
              defaultValue={isTitle}
            ></input>
          )}

        <h6 className="card-subtitle mb-2 text-muted">Download count: {book.download_count}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Media type: {book.media_type}</h6>
        <h6 className="card-subtitle mb-4 text-muted">ID: {book.id}</h6>

        <h5 className="card-subtitle mb-2">Languages</h5>
        <ul>
          {book.languages.map((language, index) => {
            return ([
              <li key={language + index}>
                <p className="card-subtitle mb-2 text-muted">{language}</p>
              </li>
            ]);
          })}
        </ul>

        <h5 className="card-subtitle mb-2">Authors</h5>

        <ul>
          {book.authors.map((oneBook, index) => {
            return ([
              <li key={oneBook.name + index}>
                <p className="card-subtitle mb-2 text-muted"><i>{oneBook.name}</i></p>
                <p className="card-subtitle mb-2 text-muted">Year of Birth: {oneBook.birth_year}</p>
                <p className="card-subtitle mb-2 text-muted">Year of Death:{oneBook.death_year}</p>
              </li>
            ]);
          })}
        </ul>

        <h5 className="card-subtitle mb-2">Download As: </h5>
        <ul>
          {
            Object.entries(book.formats, 0).map(([key, val]) =>
              <li key={key}>
                <a className="card-subtitle mb-2" href={val}>{key}</a>
              </li>
            )
          }
        </ul>

        {/* submit button */}
        <button
          className="card-update"
          type="button"
          onClick={(event) => onEditButtonClick(event, book.id)}
        >
          {isEditButtonActive ? "Submit" : "Edit"}
        </button>
      </div>
    </li>
  );
};

export default Card;
