class PopupImage {
    constructor(container) {
      this.imgPopup = container;
    }
  
    open(event) {
      if (event.target.classList.contains('place-card__image')) {
        this.imgPopup.classList.add('popup-image_is-opened');
        this.imgPopup
          .querySelector('.popup-image__img')
          .setAttribute(
            `src`,
            `${event.target.style.backgroundImage.slice(5, -2)}`
          );
      }
    }
  
    close(event) {
      if (event.target.classList.contains('popup-image__close')) {
        this.imgPopup.classList.toggle('popup-image_is-opened');
      }
    }
  };

  export{PopupImage};