import React from 'react';

const BookInfoListItem = (props) => {
  return (
    <div className="card-info-item">
      <h5 className="card-subtitle mb-2">{props.categoryName}</h5>
      <ul>
        {props.arrayOfValues.map((item, index) => {
          return ([
            <li key={item + index}>
              <p className="card-subtitle mb-2 text-muted">{item}</p>
            </li>
          ]);
        })}
      </ul>
    </div>
  )
}

export default BookInfoListItem;
