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

//Adding the inputs genetic names for many species in a group
var contGeneticsName = 1;
homeEvents.bind('indoorHowManySpecies', function(el){
	contGeneticsName++;
	template = ' <div class="form-group"><div class="row"><div class="col-xs-8"><input class="form-control" id="jsGeneticsName' + contGeneticsName + '" type="text" placeholder="Genetics name"></div><div class="col-xs-4"><input class="form-control" id="jsGeneticsQuantity' + contGeneticsName + '" type="text" placeholder="# Quantity"></div></div></div> '
	$('#speciesGeneticsList').append(template);	
});

//Collect the form and call to create new grow
homeEvents.bind('createNewGrow', function(form){
	var newGrowName = $('#newGrowName').val();
	var newGrowDate = $('#newGrowSelectDate').val();
	var newGrowFromSeeds = $('#newGrowFromSeeds')
	var newGrowFromCutting = $('#newGrowFromCutting');
	
	//From seeds or cutting?
	var newGrowFrom = '';
	if(newGrowFromSeeds.hasClass('active')) {
		newGrowFrom = 'seeds';
	} else {
		newGrowFrom = 'cutting';
	}
	
	var newGrowType = $('#newGrowType').val();
		
	//Counting genetics
	var li = $('[id*=jsGeneticsName]');
	var newGrowGeneticsNames = '';
	var newGrowGeneticsQuantity = '';
	//alert(li.length);
	for (i=1;i<=li.length;i++){
		gN = $('#jsGeneticsName' + i).val();
		gQ = $('#jsGeneticsQuantity' + i).val();
		//alert(gN + ' - vuelta ' + i);
		newGrowGeneticsNames = newGrowGeneticsNames + ', ' + gN;
		newGrowGeneticsQuantity = newGrowGeneticsQuantity + ', ' + gQ;
	}

	//Del "," in results
	newGrowGeneticsNames = newGrowGeneticsNames.substring(1);
	newGrowGeneticsQuantity = newGrowGeneticsQuantity.substring(1);

	//alert('Name: ' + newGrowName + ', Date: ' + newGrowDate + ', From: ' + newGrowFrom + ', Type: ' + newGrowType + ', Genetics: ' +  newGrowGeneticsNames + ', Quantity: ' + newGrowGeneticsQuantity);
	
	activeGrow.render();
	$('#newGrowModal').modal("hide");  
});