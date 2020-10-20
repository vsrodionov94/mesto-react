import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onDeleteClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `photo__delete-button ${
    isOwn
      ? "photo__delete-button_state_visible"
      : "photo__delete-button_state_hidden"
  }`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `photo__like-button ${
    isLiked ? "photo__like-button_active" : ""
  }`;
  return (
    <li className="photo__item">
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={() => onDeleteClick(card)}
      />
      <div
        className="photo__image"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={() => {
          onCardClick(card);
        }}
      />
      <div className="photo__caption">
        <h2 className="photo__text"> {card.name}</h2>
        <div>
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={() => {
              onCardLike(card);
            }}
          />
          <p className="photo__like-counter"> {card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
