var DishDetailsCtrl = function(view, model, callback) {
    view.backToSearch.click(function() {
      callback();
      // model.setViewState({
      //   isSearchDishViewShow: true,
      //   isDishDetailsViewShow: false
      // });
    });
  
    view.addToMenu.click(function() {
      model.addDishToMenu(model.dishDetail);
    });
  };
  