class Card {    
    createCard(nameValue, linkValue) {       
       return `<div class="place-card">
    <div class="place-card__image" style="background-image: url('${linkValue}')">
      <button class="place-card__delete-icon"></button>
    </div>
    <div class="place-card__description">
      <h3 class="place-card__name">${nameValue}</h3>
      <button class="place-card__like-icon"></button>
    </div>`
    }

    likeCard(event) {
        event.target.classList.toggle('place-card__like-icon_liked');
    }

    removeCard(event) {
        event.currentTarget.removeChild(event.target.closest('.place-card'));
    }
}

