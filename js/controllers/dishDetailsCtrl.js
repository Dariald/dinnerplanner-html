var DishDetailsCtrl = function(view, model, callback) {
    view.backToSearch.click(function() {
      callback();
    });
  
    view.addToMenu.click(function() {
      model.addDishToMenu(model.dishDetail);
    });
  };
  