import React, { useState } from "react";

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
  const classSelector = `modal modal_assign_form-add ${
    isOpen ? "modal_opened" : ""
  }`;
  return (
    <section className={classSelector}>
      <form
        className="modal__form"
        name="form-add"
        noValidate
        onSubmit={handleSubmit}
      >
        <h3 className="modal__title">Новое место</h3>
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

export default AddPlacePopup;
