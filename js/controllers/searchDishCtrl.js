var SearchDishCtrl = function(view,model){

    view.searchBtn.click(function(){
        var type = view.filterType.val();
        var filter = view.inputKey.val();
		model.getSelectedDish(type, filter);
	})
   
}