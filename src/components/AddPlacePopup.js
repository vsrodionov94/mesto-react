import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="form-add "
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="modal__field-error" id="field-title-error" />
      <input
        type="url"
        className="modal__field modal__field_assign_link"
        placeholder="Ссылка на картинку"
        name="link"
        id="field-link"
        required
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <p className="modal__field-error" id="field-link-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
