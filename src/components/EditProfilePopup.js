import React, { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const classSelector = `modal modal_assign_form-edit ${
    isOpen ? "modal_opened" : ""
  }`;
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
    <section className={classSelector}>
      <form
        className="modal__form"
        name="form-edit "
        noValidate
        onSubmit={handleSubmit}
      >
        <h3 className="modal__title">Редактировать профиль</h3>
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
        <button type="submit" className="modal__submit-button">
          Сохранить
        </button>
        <button
          className="modal__esc-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
      </form>
    </section>
  );
}

export default EditProfilePopup;
