Usuarios = Backbone.Collection.extend({
	model: Usuario,
	url: '/usuarios/',

	initialize: function(){
		console.log('Collection usuarios iniciada');
	}
});

var usuarios = new Usuarios();