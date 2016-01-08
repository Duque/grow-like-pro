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

