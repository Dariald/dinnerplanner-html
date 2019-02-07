var DishItemCtrl = function(view,model,callback){
       
    view.container.delegate('.dish-item', 'click', function() {
		var id = $(this).attr('data-id');
        model.getDetail(id)
        callback();
    })
    
}