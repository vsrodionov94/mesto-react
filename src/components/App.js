import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isImagePopupOpen, setIsImagePoupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState("clear");

  const onClose = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePoupOpen(false);
    setSelectedCard("");
  };

  const handleCardClick = (card) => {
    setIsImagePoupOpen(true);
    setSelectedCard(card);
  };
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onEditAvatar={setIsEditAvatarPopupOpen}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        isImagePopupOpen={isImagePopupOpen}
        onClose={onClose}
        selectedCard={selectedCard}
        onCardClick={handleCardClick}
      />
      <Footer />
    </div>
  );
}

export default App;
