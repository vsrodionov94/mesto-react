import React, { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      name="form-edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <p className="modal__field-error" id="field-profession-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
