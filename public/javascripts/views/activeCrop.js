ActiveCropView = Backbone.View.extend({

	template: _.template($('#activeCrop').html(), 
		{'activeCropTitle': this.name}
	),

	initialize: function(){
		console.log('View activeCrop ready');
	},

	render: function(){
		$('#content').html(this.template());
		return this;
	},

});

//Events
var activeCropViewEvents = {};
ActiveCropViewEvent = _.extend(activeCropViewEvents, Backbone.Events);

activeCropViewEvents.bind('actualizeSubmit', function(activeCropModel){
	$('#activeCropTitle').html(activeCropModel.name);
	console.log(activeCropModel.name);
});

activeCropViewEvents.bind('nombreEvento', function(){

});

//Mira la línea 22 de home.js (view)