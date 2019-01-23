var SideBarView = function (container, model) {
    
    this.confirmButton = container.find("#btn-confirmDin");
    this.selectItem = container.find("#guests-num");

    //model.getNumberOfGuests(this.selectItem.val());

    var dishes = model.selectedDishes;
    

    if(dishes.length > 0 ) {
        var trTpl = '';
        var totalPrice = 0;
        for (var i = 0; i < dishes.length; i++) {
            var price = model.getTotalMenuPrice(dishes[i]);
            trTpl += '\
                <tr>\
                    <td>'+dishes[i].name+'</td>\
                    <td class="text-right">'+price+'</td>\
                </tr>\
            ';
            totalPrice += Number(price);
        }

        container.find(".table tbody").empty().append(trTpl);
        container.find(".price .num").html(totalPrice.toFixed(2));
        
        container.find("#btn-confirmDin").attr("disabled",false);
    }

    container.find(".peopleNum .numOfPeople").html(model.numberOfGuests);

}
 
