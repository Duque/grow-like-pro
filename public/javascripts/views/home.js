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
homeEvents.bind('verCultivo', function(){
	//alert('Vamos a ver el cultivo '+el.attr('id'));
});

//Open modal new Grow
homeEvents.bind('newGrowModal', function(){
	$('#newGrowModal').modal();
	$('#newGrowModal').on('shown.bs.modal', function () {
	  $('#newGrowName').focus();
	  nuevoCultivo = new Cultivo;
	})	
});

//See growing details
homeEvents.bind('growTypeChanges', function(el){
  switch(el) {
      case 'na':
          alert();
          break;
      case 'indoor':
        $('#homeOutdoorZone, #outdoorZone').addClass('hide');
      	$('#indoorZone').removeClass('hide');
        break;
      case 'homeOutdoor':
        $('#indoorZone, #outdoorZone').addClass('hide');
      	$('#homeOutdoorZone').removeClass('hide');
        break;
      case 'outdoor':
        $('#homeOutdoorZone, #indoorZone').addClass('hide');
      	$('#outdoorZone').removeClass('hide');
        break;
  }

  //See growing details
	homeEvents.bind('indoorSingleSpecies', function(el){
		$('#indoorManySpecies').addClass('hide');
		$('#indoorSingleSpecies').removeClass('hide');
	});
	homeEvents.bind('outdoorSingleSpecies', function(el){
		$('#indoorSingleSpecies').addClass('hide');
		$('#indoorManySpecies').removeClass('hide');
	});
});