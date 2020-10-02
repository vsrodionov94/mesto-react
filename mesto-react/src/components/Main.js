import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import Card from "./Card.js";
import api from "./Api.js";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getUserData().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  }, []);
  React.useEffect(() => {
    api.getInitialCards().then((dataCards) => {
      setCards(dataCards);
    });
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img
            alt="Аватар"
            className="profile__avatar-image"
            src={userAvatar}
          />
          <button
            className="profile__avatar-edit-button"
            type="button"
            aria-label="Изменить"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__name-text"> {userName} </h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Изменить"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__profession"> {userDescription} </p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        />
      </section>
      <section className="photo">
        <ul className="photo__cards">
          {cards.map((item) => {
            return <Card card={item} />;
          })}
        </ul>
      </section>
      <PopupWithForm
        name="form-edit"
        title="Редактировать профиль"
        isOpen={props.isEditProfilePopupOpen}
      >
        <input
          type="text"
          className="modal__field modal__field_assign_name"
          placeholder="Введите имя"
          name="name"
          id="field-name"
          required
          minLength="2"
          maxLength="40"
        />
        <p className="modal__field-error" id="field-name-error" />
        <input
          type="text"
          className="modal__field modal__field_assign_profession"
          placeholder="Введите профессию"
          name="about"
          id="field-profession"
          required
          minLength="2"
          maxLength="200"
        />
        <p className="modal__field-error" id="field-profession-error" />
      </PopupWithForm>
      <PopupWithForm
        name="form-add"
        title="Новое место"
        isOpen={props.isAddPlacePopupOpen}
      >
        <input
          type="text"
          className="modal__field modal__field_assign_title"
          placeholder="Название"
          name="name"
          id="field-title"
          required
          minLength="1"
          maxLength="30"
        />
        <p className="modal__field-error" id="field-title-error" />
        <input
          type="url"
          className="modal__field modal__field_assign_link"
          placeholder="Ссылка на картинку"
          name="link"
          id="field-link"
          required
        />
        <p className="modal__field-error" id="field-link-error" />
      </PopupWithForm>
      <PopupWithForm
        name="form-avatar"
        title="Обновить аватар"
        isOpen={props.isEditAvatarPopupOpen}
      >
        <input
          type="url"
          className="modal__field modal__field_assign_link"
          placeholder="Ссылка на картинку"
          name="avatar"
          id="field-link"
          required
        />
        <p className="modal__field-error" id="field-link-error" />
      </PopupWithForm>
      <PopupWithForm name="confirm-delete" title="Вы уверены?" />
      <ImagePopup />
    </main>
  );
}

export default Main;
