import React from "react";

function ImagePopup(props) {
  return (
    <section
      className={`modal modal_assign_album ${
        props.isOpen ? "modal_opened" : ""
      }`}
    >
      <div className="modal__large-photo">
        <img
          className="modal__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <button
          className="modal__esc-button"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        />
        <p className="modal__caption"> {props.card.name} </p>
      </div>
    </section>
  );
}

export default ImagePopup;
