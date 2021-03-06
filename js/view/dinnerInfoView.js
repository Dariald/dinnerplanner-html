var DinnerInfoView = function (container, model) {

    this.printRecipeButton = container.find("#printRecipe");
    
    var loadDinner = function(){
        var dishes = model.selectedDishes;
        var tpl = '';
        var totalPrice = 0;
        for (var i = 0; i < dishes.length; i++) {
            var price = (dishes[i].pricePerServing*model.numberOfGuests).toFixed(2);
            tpl += '\
                <div class="dish-item col-md-3">\
                <img class="dish-img" src="'+dishes[i].image+'"></br>\
                <div class="dish-name">'+dishes[i].title+'</div>\
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


	model.addObserver(this.update);


    }
    
 
