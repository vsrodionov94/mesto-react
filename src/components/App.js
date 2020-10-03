import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const onClose = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard({});
  };

  const handleCardClick = (card) => {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  };
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onEditAvatar={setIsEditAvatarPopupOpen}
        onDeleteClick={setIsDeletePopupOpen}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        name="form-edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={onClose}
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
        isOpen={isAddPlacePopupOpen}
        onClose={onClose}
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
        isOpen={isEditAvatarPopupOpen}
        onClose={onClose}
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
      <PopupWithForm
        name="confirm-delete"
        title="Вы уверены?"
        isOpen={isDeletePopupOpen}
        onClose={onClose}
      />
      <ImagePopup
        isOpen={isImagePopupOpen}
        card={selectedCard}
        onClose={onClose}
      />
      <Footer />
    </div>
  );
}

export default App;
