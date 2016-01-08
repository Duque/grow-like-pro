var Cultivo = Backbone.Model.extend({

    idAttribute: -1,
    nombre: 'Cultivo de testeo',
    especie: 'Especie de testeo',
    fechaInicio: null,
    fechaFin: null,
    numPlantas: 99,
    imagenes: null,
    planCultivo: null,
    notas: null,

    //Al iniciar...
    initialize: function(){
    	console.log('Cultivo model iniciado');
    }

});

//Al cambiar...
Cultivo.bind('change', function(){
	console.log('Cultivo lanzó evento Change');
});
