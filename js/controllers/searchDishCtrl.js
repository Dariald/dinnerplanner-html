var SearchDishCtrl = function(view,model){

    view.searchBtn.click(function(){
        var type = view.filterType.val();
        var filter = view.inputKey.val();
		model.getSelectedDish(type, filter);
    })

    view.filterType.change(function(){
        var type = view.filterType.val();
        var filter = view.inputKey.val();
		model.getSelectedDish(type, filter);
    })
    
    view.inputKey.keypress(function(e){
        if(e.which == 13){
            var type = view.filterType.val();
            var filter = view.inputKey.val();
		    model.getSelectedDish(type, filter);
        }
        
	})
   
}