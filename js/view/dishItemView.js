var DishItemView = function (container, model) {

    this.container = container;


    var loadMenu = function(){
        if(model.isError){
            alert("Something wrong with the Internet, please try again later.");
        };

        if(model.isLoading) {
            container
            .find('.dish-list')
            .empty()
            .append('loading...');
        } else {
            var dishes = model.allDishes.results;
            var dishesTpl = '';
            for(var i = 0; i < dishes.length; i++) {
                dishesTpl += ''
                +'<div class="dish-item col-md-3 masonry-item" data-id="'+dishes[i].id+'">'
                +    '<img class="dish-img" src="'+model.allDishes.baseUri+dishes[i].image+'"></br>'
                +    '<div class="dish-name">'+dishes[i].title+'</div>'
                +'</div>';
            }
            container
            .find('.dish-list')
            .empty()
            .append(dishesTpl)
            .imagesLoaded(()=>{
                container
                .find('.masonry')
                //.masonry('reloadItems')
                .masonry({
                    itemSelector: '.masonry-item'
                });
                
            })

        }  
       
    }

       

    this.update=function(){
        loadMenu();
	}

    model.addObserver(this.update);


}
