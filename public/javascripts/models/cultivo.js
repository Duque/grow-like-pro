var Cultivo = Backbone.Model.extend({

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
    },

    

});

//Events
var cultivoEvents = {};
CultivoEvents=_.extend(cultivoEvents, Backbone.Events);

//Other component events