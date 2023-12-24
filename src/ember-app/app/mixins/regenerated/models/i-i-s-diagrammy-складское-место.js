import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерМеста: DS.attr('number')
});

export let ValidationRules = {
  номерМеста: {
    descriptionKey: 'models.i-i-s-diagrammy-складское-место.validations.номерМеста.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СкладскоеМестоE', 'i-i-s-diagrammy-складское-место', {
    номерМеста: attr('Номер места', { index: 0 })
  });

  modelClass.defineProjection('СкладскоеМестоL', 'i-i-s-diagrammy-складское-место', {
    номерМеста: attr('Номер места', { index: 0 })
  });
};
