var DinnerInfoCtrl = function(view,model,callback){

    view.printRecipeButton.click(function(){
        callback();
		// model.setViewState(
        //     {
        //         isDinnerInfoViewShow : false,
        //         isDinnerRecipeViewShow : true
        //     }
        // );
	})
   
}