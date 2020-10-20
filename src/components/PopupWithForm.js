import React from "react";

function PopupWithForm({ isOpen, title, name, children, onClose }) {
  const classSelector = `modal modal_assign_${name} ${
    isOpen ? "modal_opened" : ""
  }`;
  return (
    <section className={classSelector}>
      <form className="modal__form" name={name} noValidate>
        <h3 className="modal__title">{title}</h3>
        {children}
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

export default PopupWithForm;
