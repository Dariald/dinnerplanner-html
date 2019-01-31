$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//Instantiate the view
	var $welcomView = $("#welcomeView");
	var $sideBarView = $("#sideBarView");
	var $searchDishView = $("#searchDishView");
	var $dishItemView = $("#dishItemView");
	var $dishDetailsView = $("#dishDetailsView");
	var $topBarView = $("#topBarView");
	var $dinnerInfoView = $("#dinnerInfoView");
	var $dinnerRecipeView = $("#dinnerRecipeView");
	
	//And create the instance of ExampleView
	//var exampleView = new ExampleView($("#exampleView"), model);
	var welcomeView = new WelcomeView($welcomView, model); 
	var sideBarView = new SideBarView($sideBarView, model);
	var searchDishView = new SearchDishView($searchDishView, model);
	var dishItemView = new DishItemView($dishItemView, model);
	var dishDetailsView = new DishDetailsView($dishDetailsView, model);
	var topBarView = new TopBarView($topBarView, model);
	var dinnerInfoView = new DinnerInfoView($dinnerInfoView, model);
	var dinnerRecipeView = new DinnerRecipeView($dinnerRecipeView, model);

	//Instantiate controller
	var welcomeCtrl = new WelcomeCtrl(welcomeView,model,showMenu); 
	var sideBarCtrl = new SideBarCtrl(sideBarView,model,confirmDinner); 
	var searchDishCtrl = new SearchDishCtrl(searchDishView, model);
	var dishItemCtrl = new DishItemCtrl(dishItemView, model,showDishDetail);
	var dishDetailsCtrl = new DishDetailsCtrl(dishDetailsView, model,backToSearch);
	var topBarCtrl = new TopBarCtrl(topBarView, model,backToEditDinner);
	var dinnerInfoCtrl = new DinnerInfoCtrl(dinnerInfoView, model, showDinnerRecipe);
	var dinnerRecipeCtrl = new DinnerRecipeCtrl(dinnerRecipeView, model);


	//Add show/hide() function for view
	function showMenu() {
		$welcomView.hide();
		$sideBarView.show();
		$searchDishView.show();
	}

	function showDishDetail() {
		$searchDishView.hide();
		$dishDetailsView.show();
	}

	function confirmDinner() {
		$sideBarView.hide();
		$searchDishView.hide();
		$dishDetailsView.hide();
		$topBarView.show();
		$dinnerInfoView.show();
	}

	function backToSearch() {
		$searchDishView.show();
		$dishDetailsView.hide();
	}

	function backToEditDinner() {
		$topBarView.hide();
		$dinnerInfoView.hide();
		$dinnerRecipeView.hide();
		$sideBarView.show();
		$searchDishView.show();
	}

	function showDinnerRecipe() {
		$dinnerInfoView.hide();
		$dinnerRecipeView.show();
	}




	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

	
	/**
	 welcomeView.createButton.click(function(){
		$welcomView.hide();
		$sideBarView.show();
		$searchDishView.show();
	})

	
	var detail;
	$dishItemView.delegate('.dish-item', 'click', function() {
		$searchDishView.hide();
		$dishDetailsView.show();
		var id = $(this).attr('data-id');
		detail = model.getDish(id)
		var dishDetailsView = new DishDetailsView($dishDetailsView, model, detail);
	})

	dishDetailsView.backToSearch.click(function(){
		$searchDishView.show();
		$dishDetailsView.hide();
	})

	dishDetailsView.addToMenu.click(function() {
		model.addDishToMenu(detail);
		var sideBarView = new SideBarView($sideBarView, model);
		var dinnerInfoView = new DinnerInfoView($dinnerInfoView, model);
		var dinnerRecipeView = new DinnerRecipeView($dinnerRecipeView, model);
	})
	
	sideBarView.confirmButton.click(function(){
		$sideBarView.hide();
		$searchDishView.hide();
		$dishDetailsView.hide();
		$topBarView.show();
		$dinnerInfoView.show();
	})


	sideBarView.selectItem.change(function(){	
		model.setNumberOfGuests($(this).val())
		var dishDetailsView = new DishDetailsView($dishDetailsView, model, detail);
		var sideBarView = new SideBarView($sideBarView, model);
		var topBarView = new TopBarView($topBarView, model);
		var dinnerInfoView = new DinnerInfoView($dinnerInfoView, model);
	})

	dinnerInfoView.printRecipeButton.click(function(){
		$dinnerInfoView.hide();
		$dinnerRecipeView.show();
	})

	topBarView.backToEditButton.click(function(){
		$topBarView.hide();
		$dinnerInfoView.hide();
		$dinnerRecipeView.hide();
		$sideBarView.show();
		$searchDishView.show();
	})

	searchDishView.searchBtn.click(function(){
        var type = searchDishView.filterType.val();
        var filter = searchDishView.inputKey.val();
		var dishes = model.getAllDishes(type, filter);
		dishItemView = new DishItemView($dishItemView, model, dishes);
	})
	*/
});
