import{Popup} from './popup.js';

class PopupEdit extends Popup {
  constructor(container, userInfoDom) {
    super(container);
    this.userInfoDom = userInfoDom;
    this.inputName = container.querySelector('.popup__input_type_name');
    this.inputJob = container.querySelector('.popup__input_type_info');
    this.nameError = container.querySelector('.popup__error_name');
    this.jobError = container.querySelector('.popup__error_info');    
  }

  open(event) {
    if (event.target.classList.contains('user-info__edit')) {
      this.container.classList.add('popup_is-opened');
      this.userInfoDom.setUserInfo();
    }
  }

  close(event) {
    if (event.target.classList.contains('popup__close')) {
      this.container.classList.remove('popup_is-opened');
      this.nameError.textContent = null
      this.jobError.textContent = null;
      this.button.removeAttribute('disabled');
    }
  }

  submit(event) {
    event.preventDefault();
    this.userInfoDom.updateUserInfo()
      .then(user => {
        this.container.classList.remove('popup_is-opened');
      })
      .catch(err => alert(err));
  }
};

export{PopupEdit};