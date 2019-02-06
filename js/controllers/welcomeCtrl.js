// var WelcomeCtrl = function(view,model){

//     view.createButton.click(function(){

//         model.setViewState(
//             {
//                 isWelcomeViewShow : false,
//                 isSideBarViewShow : true,
//                 isSearchDishViewShow : true,
//             }
//         );
        
//     })
// }

var WelcomeCtrl = function(view,model,callback){

    view.createButton.click(function(){
        model.getSelectedDish('', '');
        callback();
        
    })
}


