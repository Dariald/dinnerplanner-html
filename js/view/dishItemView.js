var DishItemView = function (container, model) {

    this.container = container;

    var loadMenu = function(dishes){
        var dishesTpl = '';
        for(var i = 0; i < dishes.length; i++) {
            dishesTpl += ''
            +'<div class="dish-item col-md-3" data-id="'+dishes[i].id+'">'
            +    '<img class="dish-img" src="/images/'+dishes[i].image+'"></br>'
            +    '<div class="dish-name">'+dishes[i].name+'</div>'
            +'</div>';
        }
        container.find('.dish-list').empty().append(dishesTpl);
    }

    loadMenu(model.searchDishes);

    this.update=function(){
        loadMenu(model.searchDishes);

        // if(model.viewState.isDishItemViewShow) {
        //     container.show();
        //     loadMenu(model.searchDishes);
		// } else {
		// 	container.hide();
		// }

	}

	model.addObserver(this.update);

}
