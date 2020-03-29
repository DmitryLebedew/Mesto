class FormValidator {
    constructor(popup, message) {
        this.form = popup.querySelector('.popup__form');
        this.button = this.form.querySelector('.button');
        this.popUpErrorName = this.form.querySelector('.popup__error_name');
        this.popUpErrorInfo = this.form.querySelector('.popup__error_info');
        this.message = message;

        this.form.addEventListener('input', this.setEventListeners.bind(this));
    }
    checkInputValidity(form) {        
        const { name, info } = form.elements;
        if (name.validity.valueMissing) {
            this.popUpErrorName.textContent = this.message.valueMissing;
        } else if (name.validity.tooShort) {
            this.popUpErrorName.textContent = this.message.tooShort;
        } else {
            this.popUpErrorName.textContent = null;
        }

        if (info.validity.valueMissing) {
            this.popUpErrorInfo.textContent = this.message.valueMissing;
        } else if (info.validity.tooShort) {
            this.popUpErrorInfo.textContent = this.message.tooShort;
        } else if (info.validity.typeMismatch) {
            this.popUpErrorInfo.textContent = this.message.typeMismatch;
        } else {
            this.popUpErrorInfo.textContent = null;
        }
    }
    setSubmitButtonState(form) {
        const { name, info, submit } = form.elements;
        if (name.validity.valid && info.validity.valid) {
            submit.removeAttribute('disabled');
        } else {
            submit.setAttribute('disabled', true);
        }
    }
    setEventListeners() {
        this.checkInputValidity(this.form);
        this.setSubmitButtonState(this.form)
    }
};

export{FormValidator};
