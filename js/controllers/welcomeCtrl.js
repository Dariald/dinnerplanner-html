var WelcomeCtrl = function(view,model,callback){

    view.createButton.click(function(){
        model.getSelectedDish('', '');
        callback();
        
    })
}


