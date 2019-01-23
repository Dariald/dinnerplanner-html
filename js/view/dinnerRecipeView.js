var DinnerRecipeView = function (container, model) {
	var dishes = model.selectedDishes;
    var tpl = '';
    for (var i = 0; i < dishes.length; i++) {
        tpl += '\
        <div class="recipe-item row">\
            <div class="dishImg col-md-2">\
                <img src="/images/'+dishes[i].image+'" class="img-rounded">\
            </div>\
            <div class="dishIntro col-md-5">\
                <h3>'+dishes[i].name+'</h3>\
                <p>'+dishes[i].description+'</p>\
            </div>\
            <div class="dishPrepara col-md-5">\
                <h4>Preparation</h4>\
                <p>'+dishes[i].description+'</p>\
            </div>\
        </div>\
        ';
    }
    container.empty().append(tpl);
}
 
