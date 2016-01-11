Home = Backbone.View.extend({
	template: _.template($('#home').html()),
	initialize: function(){
		this.render();
		console.log('View Home iniciada');
	},

	render: function(nombreEvento)
	{
		$('#content').html(this.template());
		return this;
	},

})

//Eventos
var homeEvents = {};
HomeEvents=_.extend(homeEvents, Backbone.Events);

//See growing details
homeEvents.bind('verCultivo', function(el){
	alert('Vamos a ver el cultivo '+el.attr('id'));
});