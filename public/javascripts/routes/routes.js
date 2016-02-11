Routes = Backbone.Router.extend({
	routes: {
		""																							:"index",
		"/"																							:"index",
		"activeCrop"																		:"activeCrop",
		"newGrow"																		  	:"newGrow",
	},

	index: function(){
		$('.modal').modal("hide");
		home.render();
	},
	
	activeCrop: function(){
		$('.modal').modal("hide");
		activeCropView.render();
	},

	newGrow: function(){
		$('.modal').modal("hide");
		newGrow.render();
	},

});

var routes = new Routes();
Backbone.history.start();


