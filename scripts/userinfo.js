class UserInfo {
  constructor(userInfoDom, popupUserInfo, api) {
    this.nameContainer = userInfoDom.querySelector('.user-info__name');
    this.jobContainer = userInfoDom.querySelector('.user-info__job');
    this.avatarContainer = userInfoDom.querySelector('.user-info__photo')
    this.inputName = popupUserInfo.querySelector('.popup__input_type_name');
    this.inputJob = popupUserInfo.querySelector('.popup__input_type_info');
    this.api = api;
    this.userName = '';
    this.userJob = '';
  }
  getUserInfo() {
    this.api.getUserInfo()
      .then(user => {
        this.nameContainer.textContent = user.name;
        this.jobContainer.textContent = user.about;
        this.avatarContainer.style.backgroundImage = `url(${user.avatar})`;
        this.userName = user.name;
        this.userJob = user.about;
      })
      .catch(err => alert(err));
  }

  updateUserInfo() {
    return this.api.editUserProfile({
      name: this.inputName.value,
      about: this.inputJob.value
    })
      .then(user => {
        this.nameContainer.textContent = user.name;
        this.jobContainer.textContent = user.about;
        this.userName = user.name;
        this.userJob = user.about;
      }
      )
  }

  setUserInfo() {
    this.inputName.value = this.userName;
    this.inputJob.value = this.userJob;
  }
}