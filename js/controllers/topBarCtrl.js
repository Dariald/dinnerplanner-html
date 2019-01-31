var TopBarCtrl = function(view,model,callback){

    view.backToEditButton.click(function(){
        callback();
		// model.setViewState(
        //     {
		// 		isSideBarViewShow : true,
		//         isSearchDishViewShow : true,
		//         isDishDetailsViewShow : false,
		//         isTopBarViewShow : false,
        //         isDinnerInfoViewShow : false,
        //         isDinnerRecipeViewShow: false
        //     }
        // );
	})
   
}