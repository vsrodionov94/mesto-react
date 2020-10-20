import React, { useRef } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  const classSelector = `modal modal_assign_form-avatar ${
    isOpen ? "modal_opened" : ""
  }`;
  return (
    <section className={classSelector}>
      <form
        className="modal__form"
        name="form-avatar"
        noValidate
        onSubmit={handleSubmit}
      >
        <h3 className="modal__title">Обновить аватар</h3>
        <input
          ref={inputRef}
          type="url"
          className="modal__field modal__field_assign_link"
          placeholder="Ссылка на картинку"
          name="avatar"
          id="field-link"
          required
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

export default EditAvatarPopup;
