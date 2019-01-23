var TopBarView = function (container, model) {

    this.backToEditButton = container.find("#backToEditBtn");

    container.find('.numOfPeople .num').html(model.numberOfGuests);
}
 
