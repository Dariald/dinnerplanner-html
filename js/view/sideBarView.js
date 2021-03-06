var SideBarView = function (container, model) {
     
    this.confirmButton = container.find("#btn-confirmDin");
    this.selectItem = container.find("#guests-num");

    model.getNumberOfGuests(this.selectItem.val());

    
    var loadMenu = function(){
    
        var dishes = model.selectedDishes;
        if(dishes.length > 0 ) {
            var trTpl = '';
            var totalPrice = 0;
            for (var i = 0; i < dishes.length; i++) {
                var price = (dishes[i].pricePerServing*model.numberOfGuests).toFixed(2);
                trTpl += '\
                    <tr>\
                        <td>'+dishes[i].title+'</td>\
                        <td class="text-right">'+price+'</td>\
                    </tr>\
                ';
                totalPrice += Number(price);
            }
    
            container.find(".table tbody").empty().append(trTpl);
            container.find(".price .num").html(totalPrice.toFixed(2));
            
            container.find("#btn-confirmDin").attr("disabled",false);
        }

    }

	this.update=function(){
        loadMenu();
	}

	model.addObserver(this.update);

}
 
