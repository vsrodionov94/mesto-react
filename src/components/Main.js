import React, { useContext } from "react";
import Card from "./Card.js";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardDelete,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <div
            className="profile__avatar-image"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          />
          <button
            className="profile__avatar-edit-button"
            type="button"
            aria-label="Изменить"
            onClick={() => {
              onEditAvatar(true);
            }}
          />
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__name-text"> {currentUser.name} </h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Изменить"
              onClick={() => {
                onEditProfile(true);
              }}
            />
          </div>
          <p className="profile__profession"> {currentUser.about} </p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={() => {
            onAddPlace(true);
          }}
        />
      </section>
      <section className="photo">
        <ul className="photo__cards">
          {cards.map((item) => {
            return (
              <Card
                key={item._id}
                card={item}
                onCardClick={onCardClick}
                onDeleteClick={onCardDelete}
                onCardLike={onCardLike}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
