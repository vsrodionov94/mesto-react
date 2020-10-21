import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="form-avatar"
      title="Обновить аватар"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
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
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
