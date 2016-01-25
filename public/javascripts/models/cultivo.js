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

    newGrowIndoor: function(){
        $('#homeOutdoorZone, #outdoorZone').addClass('hide');
        $('#indoorZone').removeClass('hide');
    },
    newGrowHomeOutdoor: function(){
        $('#indoorZone, #outdoorZone').addClass('hide');
        $('#homeOutdoorZone').removeClass('hide');
    },
    newGrowOutdoor: function(){
        $('#homeOutdoorZone, #indoorZone').addClass('hide');
        $('#outdoorZone').removeClass('hide');
    },

});

//Events
var cultivoEvents = {};
CultivoEvents=_.extend(cultivoEvents, Backbone.Events);

//See growing details
cultivoEvents.bind('growTypeChanges', function(el){
    switch(el) {
        case 1:
            alert();
            break;
        case 'indoor':
            nuevoCultivo.newGrowIndoor();
            break;
        case 'homeOutdoor':
            nuevoCultivo.newGrowHomeOutdoor();
            break;
        case 'outdoor':
            nuevoCultivo.newGrowOutdoor();
            break;
    }
});


//Other component events