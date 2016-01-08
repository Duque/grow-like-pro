Cultivos = Backbone.Collection.extend({
	model: Cultivo,

	initialize: function(){
		console.log('Collección cultivos iniciada');
	}
})

var cultivos = new Cultivos();
cultivos.add([
	{
		idAttribute: 0,
		nombre: 'Cultivo de testeo de collección',
		especie: 'Especie de testeo de collección',
	    fechaInicio: 26/04/1984,
	    fechaFin: 26/04/1985,
	    numPlantas: 20,
	    imagenes: 2,
	    planCultivo: 0,
	    notas: 'Notas de testeo de collección',
	},

	{
		idAttribute: 1,
		nombre: 'Cultivo de testeo de collección II',
		especie: 'Especie de testeo de collección II',
	    fechaInicio: 26/04/1986,
	    fechaFin: 26/04/1987,
	    numPlantas: 40,
	    imagenes: 4,
	    planCultivo: 1,
	    notas: 'Notas de testeo de collección II',
	},

]);

