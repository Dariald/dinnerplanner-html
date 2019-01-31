var DinnerInfoView = function (container, model) {

    this.printRecipeButton = container.find("#printRecipe");
    
    var loadDinner = function(){
        var dishes = model.selectedDishes;
        var tpl = '';
        var totalPrice = 0;
        for (var i = 0; i < dishes.length; i++) {
                var price = model.getTotalMenuPrice(dishes[i]);
                tpl += '\
                    <div class="dish-item col-md-3">\
                    <img class="dish-img" src="/images/'+dishes[i].image+'"></br>\
                    <div class="dish-name">'+dishes[i].name+'</div>\
                    <div class="dish-price">'+price+'SEK</div>\
                 </div>\
        ';
        totalPrice += Number(price);
    }
   
        tpl += '\
        <div class="dish-item total-item col-md-3">\
            <div class="dish-name">Total:</div>\
            <div class="dish-price">'+totalPrice.toFixed(2)+'&nbsp;SEK</div>\
        </div>\
        ';
        container.find(".dish-list").empty().append(tpl);
    }

    this.update=function(){
           loadDinner();
    }

    /**
     * this.update=function(){
        if(model.viewState.isDinnerInfoViewShow) {
            container.show();
            loadDinner();
		} else {
			container.hide();
		}

    } 
    */

	model.addObserver(this.update);


    }
    
 
