var DishDetailsView = function (container, model) {

    this.backToSearch = container.find("#backToSerBtn");
    this.addToMenu = container.find("#addToMenuBtn");

    var loadDetail = function(detail){
        if(model.isError){
            alert("Something wrong with the Internet, please try again later.");
        };
        
        if (model.isLoading) {
            container.find('.loading').show();
            container.find('.row').hide();
        } else {
            container.find('.loading').hide();
            if (detail) {
                container.find('.row').show();
                var $dishInfo = container.find("#dishInfo");
                $dishInfo.find('h2').html(detail.title);
                $dishInfo.find('img').attr('src', detail.image);
                $dishInfo.find('.p-info').html(detail.instructions);
                var ingredients = detail.extendedIngredients;
                var trTpl = '';
                for (var i = 0; i < ingredients.length; i++) {
                    trTpl += '\
                        <tr>\
                            <td>'+ingredients[i].amount*model.numberOfGuests+"&nbsp;"+ingredients[i].unit+'</td>\
                            <td>'+ingredients[i].name+'</td>\
                            <td>SEK</td>\
                            <td>'+(1.0*model.numberOfGuests).toFixed(2)+'</td>\
                        </tr>\
                    ';
                }
                container.find('#dishIngrendients .num').html(model.numberOfGuests);
                container.find('#dishIngrendients .table tbody').empty().append(trTpl);
                container.find('#dishIngrendients .table tfoot .total-price').html((detail.pricePerServing*model.numberOfGuests).toFixed(2));       
            }
        }
        
    }

    this.update=function(){
        loadDetail(model.dishDetail);
    }
    
	model.addObserver(this.update);


    
}
 
