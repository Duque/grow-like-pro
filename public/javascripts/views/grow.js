Grow = Backbone.View.extend({
	template: _.template($('#activeGrow').html()),

	initialize: function(){
		//this.render();
		console.log('View Grow ready');
	},

	render: function(nombreEvento){
		$('#content').html(this.template());
		return this;
	},

});

//Events
var growEvents = {};
GrowEvent = _.extend(growEvents, Backbone.Events);

growEvents.bind('nombreEvento', function(){

});

//Mira la línea 22 de home.js (view)