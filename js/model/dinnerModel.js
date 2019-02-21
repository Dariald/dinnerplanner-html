//DinnerModel Object constructor
var DinnerModel = function() {
  // the dishes variable contains an array of all the
  // dishes in the database. each dish has id, name, type,
  // image (name of the image file), description and
  // array of ingredients. Each ingredient has name,
  // quantity (a number), price (a number) and unit (string
  // defining the unit i.e. "g", "slices", "ml". Unit
  // can sometimes be empty like in the example of eggs where
  // you just say "5 eggs" and not "5 pieces of eggs" or anything else.


/*****************************************  
	      Observable implementation    
*****************************************/

  var observers = [];

  this.addObserver = function(observer) {
    observers.push(observer);
  };

  this.notifyObservers = function(arg) {
    for (var i = 0; i < observers.length; i++) {
      observers[i](this, arg);
    }
  };

 
  //TODO Lab 1 implement the data structure that will hold number of guest
  //and selected dishes for the dinner menu

  this.allDishes = {}; 
  this.numberOfGuests = 0;
  this.selectedDishes = [];
  this.dishDetail = null;
  this.isLoading = false;
  this.isError = false;

  this.setNumberOfGuests = function(num) {
    //TODO Lab 1
    this.numberOfGuests = num;
    this.notifyObservers();
  };

  this.getNumberOfGuests = function(num) {
    //TODO Lab 1
    this.numberOfGuests = num;
    this.notifyObservers();
  };

  

  //Returns the dish that is on the menu for selected type
  this.getSelectedDish = function(type, filter) {
    this.getAllDishes(type, filter).then(data => {
		/* do something with new dishes */ 
    this.allDishes = data;
    console.log(this.allDishes,'allDishes')
		this.isLoading = false;
		this.notifyObservers();
   }).catch( error => {
    /* do something with the error */
    this.isError = true;
    this.notifyObservers();
    console.log(error);
   });
  };

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  ////which means the newest dish of each type would be kept in the end
  this.addDishToMenu = function(data) {
    //TODO Lab 1
    var selectedDishes = this.selectedDishes;
    for (var i = 0; i < selectedDishes.length; i++) {
		  if (selectedDishes[i].dishTypes == data.dishTypes) {
			  this.removeDishFromMenu(i);
		    break;}
    }
    this.selectedDishes.push(data);
    this.notifyObservers();
  };

  //Removes dish from menu
  this.removeDishFromMenu = function(index) {
    //TODO Lab 1
    this.selectedDishes.splice(index, 1);
    this.notifyObservers();
  };

  //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
  //you can use the filter argument to filter out the dish by name or ingredient (use for search)
  //if you don't pass any filter all the dishes will be returned
  this.getAllDishes = function(type, filter) {
	this.isLoading = true;
	this.notifyObservers();
    return fetch(
      `http://sunset.nada.kth.se:8080/iprog/group/66/recipes/search?number=20&type=${type}&query=${filter}`,
     // `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=20&type=${type}&query=${filter}`,
      {
        headers: {
          "X-Mashape-Key": API_KEY
        },
        method: "GET"
      }
    ).then(response => response.json());

  };

  //function that returns a dish of specific ID
  this.getDish = function(id) {
	this.isLoading = true;
	this.notifyObservers();
    return fetch(
      `http://sunset.nada.kth.se:8080/iprog/group/66/recipes/${id}/information`,
      //`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`,
      {
        headers: {
          "X-Mashape-Key": API_KEY
        },
        method: "GET"
      }
    ).then(response => response.json());
  };

  //function that gets details of selected dish
  this.getDetail = function(id) {
    this.dishDetail = this.getDish(id).then(detail => {
        /* do something with new dishes */
		    this.dishDetail = detail;
	  	  this.isLoading = false;
        console.log(this.dishDetail,'detail');
        this.notifyObservers();
      })
      .catch(error => {
        /* do something with the error */
        this.isError = true;
        this.notifyObservers();
        console.log(error);
      });
  };

  


};
