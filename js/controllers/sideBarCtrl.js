var SideBarCtrl = function(view, model, callback){

    view.confirmButton.click(function(){
		callback();
	})

	//update the number
	view.selectItem.change(function(){
		model.setNumberOfGuests($(this).val())
	})


}