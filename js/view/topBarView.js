var TopBarView = function (container, model) {

    this.backToEditButton = container.find("#backToEditBtn");

    this.update=function(){
        container.find('.numOfPeople .num').html(model.numberOfGuests);
	}

	model.addObserver(this.update);


   
}
 
