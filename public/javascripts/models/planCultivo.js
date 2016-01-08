var PlanCultivo = Backbone.Model.extend({

	idAttribute: -1,
	nombre: 'Plan de cultivo de testeo',
	origen: 'Origen de testeo',
	fechaInicio: null,
	fechaPrimerTrasplante: null,
	fechaUltimoTrasplante: null,
	fechaFloracion: null,
	fertilizanteCrecimiento: 'fertilizante crecimiento de testeo',
	fertilizanteFloracion: 'fertilizante floración de testeo',
	complementoFloracion: 'complemento floración de testeo',
	productosPlanificados: null,
	objetivos: 'Texto testeo objetivos',
	guia: 'Texto testeo guía',

	initialize: function(){
		console.log('PlanCultivo model iniciado');
	}
});

var planCultivo = new PlanCultivo();