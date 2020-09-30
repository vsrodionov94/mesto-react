import React from "react";
function Main() {
  function handleEditAvatarClick() {
    document
      .querySelector(".modal_assign_form-avatar")
      .classList.add("modal_opened");
  }
  function handleEditProfileClick() {
    document
      .querySelector(".modal_assign_form-edit")
      .classList.add("modal_opened");
  }

  function handleAddPlaceClick() {
    document
      .querySelector(".modal_assign_form-add")
      .classList.add("modal_opened");
  }
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img alt="Аватар" className="profile__avatar-image" />
          <button
            className="profile__avatar-edit-button"
            type="button"
            aria-label="Изменить"
            onClick={handleEditAvatarClick}
          />
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__name-text"></h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Изменить"
              onClick={handleEditProfileClick}
            />
          </div>
          <p className="profile__profession" />
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={handleAddPlaceClick}
        />
      </section>
      <section className="photo">
        <ul className="photo__cards" />
      </section>
    </main>
  );
}

export default Main;
