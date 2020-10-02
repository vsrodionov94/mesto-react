import React from "react";

function Card(props) {
  return (
    <li className="photo__item">
      <button className="photo__delete-button" type="button" />
      <img className="photo__image" src={props.card.link} />
      <div className="photo__caption">
        <h2 className="photo__text"> {props.card.name}</h2>
        <div>
          <button className="photo__like-button" type="button" />
          <p className="photo__like-counter"> {props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
