const errorMesages = {
	valueMissing: 'Это обязательное поле',
	tooShort: 'Должно быть от 2 до 30 символов',
  typeMismatch: 'Введите URL'
};

const api = new Api({
  url: 'https://praktikum.tk/cohort8', 
  headers: {
    authorization: 'e6c5181c-50cf-45ea-bfe8-5bf84453521e',
    'Content-Type': 'application/json'    
  }
});

const root = document.querySelector('.root');
const cardContainer = document.querySelector('.places-list');
const userInfoDom = document.querySelector('.user-info');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const popupEditAvatar = document.querySelector('.popup_edit-avatar')
const card = new Card();
const cardList = new CardList(cardContainer, card, api);
const userInfo = new UserInfo(userInfoDom, popupEditProfile, api);
const popupProfile = new PopupEdit(popupEditProfile, userInfo);
const imageOpen = new PopupImage(document.querySelector('.popup-image'));
const popupPlace = new PopupPlace(popupAddCard, cardList);
const popupAvatar = new PopupAvatar(popupEditAvatar, userInfo);
const userFormValidator = new FormValidator(popupEditProfile, errorMesages);
const cardFormValidator = new FormValidator(popupAddCard, errorMesages);

//записывает данные о пользователе
userInfo.getUserInfo();

//создает карточки, загруженные с сервер
cardList.render();

//открывает/закрывает изображение карточки
root.addEventListener('click', event => {
  imageOpen.open(event);
  imageOpen.close(event);
})

//открывает popup добавления карточки и изменения информации о пользователе
userInfoDom.addEventListener('click', event => {
    popupProfile.open(event);
    popupPlace.open(event);
    popupAvatar.open(event);
  });

//закрывает popup добавления карточки
popupAddCard.addEventListener('click', event =>{
  popupPlace.close(event)
});

//закрывает popup изменения информации о пользователе
popupEditProfile.addEventListener('click', event =>{
  popupProfile.close(event);
})
  
//добавляет введенную информацию о пользователе  
popupProfile.form.addEventListener('submit', event => {
    popupProfile.submit(event);    
  });
 
//добавляет данные для новой карточки
popupPlace.container.addEventListener('submit', event => {
    popupPlace.submit(event);
  });





