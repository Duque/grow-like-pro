NewGrow = Backbone.View.extend({
	template: _.template($('#newGrow').html()),

	initialize: function(){
		console.log('View newGrow init');
	},

	render: function(){
		$('#content').html(this.template());
		return this;
	},
});

var newGrowEvents = {};
NewGrowEvents = _.extend(newGrowEvents, Backbone.Events);

//Events
//Selecting type crop
newGrowEvents.bind('growTypeChanges', function(el){
  switch(el) {
      case 'na':
        alert();
        break;
      case 'indoor':
      $('#outdoorZone').addClass('hide');
        console.log('indoor');
        break;
      case 'outdoor':
      	$('#outdoorZone').removeClass('hide');
      	console.log('indoor');
        break;
  }
});

//Adding the inputs genetic names for many species in a group
var contGeneticsName = 1;
newGrowEvents.bind('indoorHowManySpecies', function(el){
	contGeneticsName++;
	template = '<div class="form-group"><div class="row"><div class="col-xs-8"><input class="form-control" id="jsGeneticsName' + contGeneticsName + '" name="jsGeneticsName' + contGeneticsName + '" type="text" placeholder="Genetics name"></div><div class="col-xs-4"><div class="row"><div class="col-xs-6"><input class="form-control" name="jsGeneticsQuantity' + contGeneticsName + '" id="jsGeneticsQuantity' + contGeneticsName + '" type="text" placeholder="# Quantity"></div><div class="col-xs-6"><button class="form-control btn btn-default" id="deleteGeneticsNewGrow" onclick="newGrowEvents.trigger(&quot;deleteGeneticsRow&quot;, $(this))"><span class="glyphicon glyphicon-trash"></span></button></div></div></div></div>'
	$('#speciesGeneticsList').append(template);	
});

//Collect the form and call to create new grow
newGrowEvents.bind('createNewGrow', function(form){
	console.log(JSON.stringify(form.serializeObject()));
	
	var jsonResult = form.serializeObject();
	var geneticsName ='';
	var jsGeneticsQuantity = '';
	var contGenetics = 1;
	
	//Couting genetics
	while(jsonResult.hasOwnProperty('jsGeneticsName'+contGenetics))
	{
		geneticsName = geneticsName + ','+ jsonResult['jsGeneticsName'+contGenetics];
		jsGeneticsQuantity = jsGeneticsQuantity + ','+ jsonResult['jsGeneticsQuantity'+contGenetics];
		contGenetics++;
	}

	//Normalizing
	contGenetics--;
	geneticsName = geneticsName.substring(1);
	jsGeneticsQuantity = jsGeneticsQuantity.substring(1);

	console.log('genetics: ' + geneticsName);
	console.log('quantity: ' + jsGeneticsQuantity);

	//Creating new crop model
	activeCropModel.set({
		name: jsonResult.newGrowName,
    geneticsName: geneticsName ,
    geneticsQuantity: jsGeneticsQuantity,
    initDate: jsonResult.newGrowSelectDate,
    cropType: jsonResult.newGrowType,
    from: jsonResult.newGrowFrom,
	});

	//Go to new active crop;
	window.location.href = "#activeCrop";
	activeCropViewEvents.trigger('actualizeSubmit',activeCropModel);
});

//Delete genetics row
newGrowEvents.bind('deleteGeneticsRow', function(el){
	el.parent().parent().parent().parent().parent().hide();
});

//External events