import React, { useState } from "react";
import { API_URL } from "../../constants/global";

const Card = ({ book }) => {
  const [isEditButtonActive, setIsEditButtonActive] = useState(false);
  const [isTitle, setIsTitle] = useState(book.title);

  const onEditButtonClick = (event, id) => {
    // const title = event.currentTarget.parentNode.querySelector(
    //   ".card-title-edit"
    // ).value;

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
      }),
    });
  };

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

        <h6 className="card-subtitle mb-2 text-muted">{book.id}</h6>
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
