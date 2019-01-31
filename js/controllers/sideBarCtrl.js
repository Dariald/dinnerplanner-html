var SideBarCtrl = function(view, model, callback){

    view.confirmButton.click(function(){
		callback();
		// model.setViewState(
        //     {
		// 		isSideBarViewShow : false,
		// 		isSearchDishViewShow : false,
		// 		isDishDetailsViewShow : false,
		// 		isTopBarViewShow : true,
		// 		isDinnerInfoViewShow : true
        //     }
        // );
	})

	//update the number
	view.selectItem.change(function(){
		model.setNumberOfGuests($(this).val())
	})


}