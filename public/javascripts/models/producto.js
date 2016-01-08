var Producto = Backbone.Model.extend({
	idAttribute: -1,
	nombre: 'producto de testeo',
	marca: 'marca de testeo',
	descripcion: 'descripcion de producto de testeo',
	imagen: null,
	imagenTabla: null,
	nitrogeno: -1,
	fosforo: -1,
	potasion: -1,
	azufre: -1,
	calcio: -1,
	magnesio: -1,
	hierro: -1,
	manganeso: -1,
	boro: -1,
	cobre: -1,
	zinc: -1,
	molibdeno: -1,
	guia: null,
	fechaInicio: null,
	fechaFin: null,
	dosisLitro: null,
	frecuencia: null,

	initialize: function(){
		console.log('Producto model iniciado');
	}
});

var producto = new Producto();