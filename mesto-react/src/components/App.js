import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";

let isEditProfilePopupOpen = false;
let isAddPlacePopupOpen = false;
let isEditAvatarPopupOpen = false;

function handleEditAvatarClick() {
  isEditProfilePopupOpen = true;
}

function handleEditProfileClick() {
  isEditAvatarPopupOpen = true;
}

function handleAddPlaceClick() {
  isAddPlacePopupOpen = true;
}

function App() {
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
      />
      <Footer />
    </div>
  );
}

export default App;
