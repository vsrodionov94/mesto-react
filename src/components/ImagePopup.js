import React from "react";

function ImagePopup({ isOpen, card, onClose }) {
  return (
    <section
      className={`modal modal_assign_album ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="modal__large-photo">
        <img className="modal__image" src={card.link} alt={card.name} />
        <button
          className="modal__esc-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <p className="modal__caption"> {card.name} </p>
      </div>
    </section>
  );
}

export default ImagePopup;
