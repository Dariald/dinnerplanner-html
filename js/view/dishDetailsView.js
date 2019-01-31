var DishDetailsView = function (container, model) {

    this.backToSearch = container.find("#backToSerBtn");
    this.addToMenu = container.find("#addToMenuBtn");

    var loadDetail = function(detail){
        if (detail) {
            var $dishInfo = container.find("#dishInfo");
            $dishInfo.find('h2').html(detail.name);
            $dishInfo.find('img').attr('src', '/images/'+detail.image);
            $dishInfo.find('.p-info').html(detail.description);
            var ingredients = model.getAllIngredients(detail);
            var trTpl = '';
            for (var i = 0; i < ingredients.length; i++) {
                trTpl += '\
                    <tr>\
                        <td>'+ingredients[i].quantity*model.numberOfGuests+ingredients[i].unit+'</td>\
                        <td>'+ingredients[i].name+'</td>\
                        <td>SEK</td>\
                        <td>'+(model.numberOfGuests*ingredients[i].price).toFixed(2)+'</td>\
                    </tr>\
                ';
            }
            container.find('#dishIngrendients .num').html(model.numberOfGuests);
            container.find('#dishIngrendients .table tbody').empty().append(trTpl);
            container.find('#dishIngrendients .table tfoot .total-price').html(model.getTotalMenuPrice(detail));       
        }
    }

    this.update=function(){
        loadDetail(model.dishDetail);
        // if(model.viewState.isDishDetailsViewShow) {
        //     container.show();
        //     loadDetail(model.dishDetail);
		// } else {
		// 	container.hide();
		// }

    }
    
	model.addObserver(this.update);


    
}
 
