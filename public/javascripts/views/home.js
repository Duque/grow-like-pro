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
	})	
	
	np=$('#newGrowName');
		np.attr('placeholder',np.attr('placeholder')+' '+today);
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
      case 'outdoor':
        $('#homeOutdoorZone, #indoorZone').addClass('hide');
      	$('#outdoorZone').removeClass('hide');
        break;
  }
});

//See growing details
homeEvents.bind('indoorSingleSpecies', function(el){
	$('#indoorManySpecies').addClass('hide');
	$('#indoorSingleSpecies').removeClass('hide');
});
homeEvents.bind('outdoorSingleSpecies', function(el){
	$('#indoorSingleSpecies').addClass('hide');
	$('#indoorManySpecies').removeClass('hide');
});

//Adding the inputs genetic names for many species in a group
var contGeneticName = 0;
homeEvents.bind('indoorHowManySpecies', function(el){
	contGeneticName++;
	template = ' <div class="form-group"><div class="row"><div class="col-xs-8"><input class="form-control" id="jsGeneticName' + contGeneticName + '" type="text" placeholder="Genetic name"></div><div class="col-xs-4"><input class="form-control" id="jsGeneticQuantity' + contGeneticName + '" type="text" placeholder="# Quantity"></div></div></div> '
	$('#indoorManySpeciesGeneticList').append(template);	
});

//Collect the form and call to create new grow
homeEvents.bind('createNewGrow', function(el){
	var newGrowName = $('#newGrowName').val();
	var newGrowDate = $('#newGrowSelectDate').val();
	var newGrowFromSeeds = $('#newGrowFromSeeds')
	var newGrowFromCutting = $('#newGrowFromCutting');
	
	//From seeds or cutting?
	var newGrowFrom = '';
	if(newGrowFromSeeds.hasClass('active')) {
		alert('seed');
		newGrowFrom = 'seeds';
	} else {
		alert('cutting');
		newGrowFrom = 'cutting';
	}
	
	var newGrowType = $('#newGrowType').val();
	
	//Single or Many species in a group
	var idEl = el.attr('id');
	var newGrowGeneticNames = '';
	var newGrowGeneticQuantity = '';
	
	//Single species in a grow
	if(idEl=='newSingleGrow') {
		//Actions when create a single species group
		newGrowGeneticNames = $('#indoorSingleSpeciesName').val();
		newGrowGeneticQuantity = $('#indoorSingleSpeciesQuantity').val();
	} else if (idEl=='newManyGrow'){ 
		//Many species in a grow
		var li = $('[id*=jsGeneticName]');
		//alert(li.length);
		for (i=1;i<=li.length;i++){
			gN = $('#jsGeneticName' + i).val();
			gQ = $('#jsGeneticQuantity' + i).val();
			//alert(gN + ' - vuelta ' + i);
			newGrowGeneticNames = newGrowGeneticNames + ', ' + gN;
			newGrowGeneticQuantity = newGrowGeneticQuantity + ', ' + gQ;
		}
	}
	
	//Del "," in results
	newGrowGeneticNames = newGrowGeneticNames.substring(1);
	newGrowGeneticQuantity = newGrowGeneticQuantity.substring(1);

	alert('Name: ' + newGrowName + ', Date: ' + newGrowDate + ', From: ' + newGrowFrom + ', Type: ' + newGrowType + ', Genetics: ' +  newGrowGeneticNames + ', Quantity: ' + newGrowGeneticQuantity);
	
	//activeGrow.render();
	//$('#newGrowModal').modal("hide");  
});