Interaction Programing - Lab assignment - HTML
=================================================

This project contains the startup code for HTML version of the Interaction Programing course lab assignment. For more details on how to complete the assignment follow the instructions on the [course website](https://www.kth.se/social/course/DH2642).

What's in the project
-----

* [index.html](https://github.com/kth-csc-iprog/dinnerplanner-html/blob/master/index.html) - the only HTML page you will have in this project (though while testing you can create more to make it easier). You will need to implement the skeleton of the layout there and then through code (JavaScript) create the rest
* [js/model/dinnerModel.js](https://github.com/kth-csc-iprog/dinnerplanner-html/blob/master/js/model/dinnerModel.js) - is JavaScript file that contains the model code. The file contains the model (dish, ingredient and general dinner model) as well as methods and comments that you need to fully implement to support the dinner functionalities (guests, selected dishes, etc.)
* [js/view/](https://github.com/kth-csc-iprog/dinnerplanner-html/tree/master/js/view) - here you can find a JavaScript code of an example view. The view sets up some initial components and their values.
* [js/app.js](https://github.com/kth-csc-iprog/dinnerplanner-html/blob/master/js/app.js) - this is the overall code of the application. It is responsible for initial setup of the app (when the page loads for the first time). 
* [images/](https://github.com/kth-csc-iprog/dinnerplanner-html/tree/master/images) - folder contains some pictures you can use for your dishes



Updates for lab3
=================================================
* [index.html] Update searchDishView, import masonry.pkgd.min.js and imagesloaded.pkgd.min.js;
* [dinnerModel.js] Update getAllDishes(), getDish(), getSelectedDish(), getDetail() - Update data, add error message;
* [view.js] Update dishItemView.js, dishDetailsView.js, sideBarView.js, dishRecipeView.js, dinnerInfoView.js - Update data, add loading;
* [controller.js] Update SearchDishCtrl.js - Improve searching experience

Updates for lab2
=================================================
* [index.html] import new controller files;
* [dinnerModel.js] Implement the observer parts, add notifyObserver() call methods to motify model;
* [app.js] General controller, initialize the views and controllers, control the view hide or show;
* [view.js] add addObserver() to attach the view itself as model observer;
* [controller.js] listen to events, modify the model, trigger view to update;
