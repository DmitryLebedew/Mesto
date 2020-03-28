class PopupPlace extends Popup {
    constructor(container, cardList) {
      super(container);
      this.cardList = cardList;
      this.inputName = container.querySelector('.popup__input_type_name');
      this.inputLink = container.querySelector('.popup__input_type_info');
      this.nameError = container.querySelector('.popup__error_name');
      this.linkError = container.querySelector('.popup__error_info'); 
      this.button = container.querySelector('.popup__button');      
    }
  
    open(event) {
      if (event.target.classList.contains('user-info__button')) {
        this.container.classList.add('popup_is-opened');        
        this.button.setAttribute('disabled', true);
      }
    }
  
    close(event) {
      if (event.target.classList.contains('popup__close')) {
        this.container.classList.remove('popup_is-opened');
        this.nameError.textContent = null;
        this.linkError.textContent = null;
        this.inputName.value = null;
        this.inputLink.value = null;
      }
    }
  
    submit(event) {
      event.preventDefault();
      this.cardList.addCard(this.inputName.value, this.inputLink.value);
      this.container.classList.remove('popup_is-opened');
      this.inputName.value = null;
      this.inputLink.value = null;
    }
  }