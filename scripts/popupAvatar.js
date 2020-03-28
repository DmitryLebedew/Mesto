class PopupAvatar extends Popup {
    constructor(container, userInfoDom){
        super(container);
        this.userInfoDom = userInfoDom;
    }

    open(event) {
        if (event.target.classList.contains('user-info__photo')) {
          this.container.classList.add('popup_is-opened');          
        }
      }
}