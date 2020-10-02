import React from "react";

function ImagePopup(props) {
  return (
    <section className="modal modal_assign_album">
      <div className="modal__large-photo">
        <img className="modal__image" />
        <button
          className="modal__esc-button"
          type="button"
          aria-label="Закрыть"
        />
        <p className="modal__caption" />
      </div>
    </section>
  );
}

export default ImagePopup;
