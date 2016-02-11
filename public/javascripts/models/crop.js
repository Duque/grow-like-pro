CropModel = Backbone.Model.extend({

    name: 'Cultivo de testeo',
    geneticsName: 'Especie de testeo',
    initDate: null,
    endDate: null,
    numPlants: 99,
    images: null,

    //Al iniciar...
    initialize: function(){
    	console.log('Crop model init');
    },

});

//Events
var cropModelEvents = {};
CropModelEvents=_.extend(cropModelEvents, Backbone.Events);

//Other component events