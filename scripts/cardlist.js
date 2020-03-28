class CardList{
  constructor(container, template, api){
    this.container = container;  
    this.template = template;
    this.api = api;
    this.container.addEventListener('click', this.placesListAktion.bind(this));
  }
  addCard(name, link){
    const card = this.template.createCard(name, link);
    this.container.insertAdjacentHTML('beforeend', card);
  }
  render(){
    this.api.getCardList()     
      .then(cards => {
        cards.forEach((item) => {
          this.addCard(item.name, item.link);
        })
      })
      .catch(err => alert(err));                   
  }
  placesListAktion(event) {
    if(event.target.classList.contains('place-card__like-icon')){
      this.template.likeCard(event);    
    } if(event.target.classList.contains('place-card__delete-icon')){
      this.template.removeCard(event);
    }
  }
}
