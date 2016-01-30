Routes = Backbone.Router.extend({
	routes: {
		""																							:"index",
		"activeGrow"																		:"activeGrow",
	},

	index: function(){
		$('.modal').modal("hide");
		home.render();
	},
	
	activeGrow: function(){
		$('.modal').modal("hide");
		activeGrow.render();
	},

});

var routes = new Routes();
Backbone.history.start();


