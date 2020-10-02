import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="photo__item" key={props.card._id}>
      <button className="photo__delete-button" type="button" />
      <div
        className="photo__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleClick}
      />
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
