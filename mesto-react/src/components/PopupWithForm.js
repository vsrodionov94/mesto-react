import React from "react";

function PopupWithForm(props) {
  return (
    <section
      className={`modal modal_assign_${props.name} ${
        props.isOpen ? "modal_opened" : ""
      }`}
    >
      <form className="modal__form" name={props.name} noValidate>
        <h3 className="modal__title">{props.title}</h3>
        {props.children ? props.children.map((child) => child) : undefined}
        <button type="submit" className="modal__submit-button">
          Сохранить
        </button>
        <button
          className="modal__esc-button"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        />
      </form>
    </section>
  );
}

export default PopupWithForm;
