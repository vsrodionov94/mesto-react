import React from "react";
import Card from "./Card.js";
import api from "../utils/Api.js";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((dataCards) => {
        setCards(dataCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <div
            className="profile__avatar-image"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <button
            className="profile__avatar-edit-button"
            type="button"
            aria-label="Изменить"
            onClick={() => {
              props.onEditAvatar(true);
            }}
          />
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__name-text"> {userName} </h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Изменить"
              onClick={() => {
                props.onEditProfile(true);
              }}
            />
          </div>
          <p className="profile__profession"> {userDescription} </p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={() => {
            props.onAddPlace(true);
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
                onCardClick={props.onCardClick}
                onDeleteClick={props.onDeleteClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
