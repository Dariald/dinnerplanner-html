var TopBarView = function (container, model) {

    this.backToEditButton = container.find("#backToEditBtn");

    this.update=function(){
        container.find('.numOfPeople .num').html(model.numberOfGuests);
        // if(model.viewState.isTopBarViewShow) {
        //     container.show();
        //     container.find('.numOfPeople .num').html(model.numberOfGuests);
		// } else {
		// 	container.hide();
		// }

	}

	model.addObserver(this.update);


   
}
 
