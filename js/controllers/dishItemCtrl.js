var DishItemCtrl = function(view,model,callback){
       
    view.container.delegate('.dish-item', 'click', function() {
        // model.setViewState({
        //     isSearchDishViewShow : false,
		//     isDishDetailsViewShow : true,
        // });
		var id = $(this).attr('data-id');
        model.getDetail(id)
        callback();
    })
    
}