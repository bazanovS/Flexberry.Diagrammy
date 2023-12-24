import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодПоставщика: DS.attr('number'),
  наименование: DS.attr('string'),
  номерТС: DS.attr('string')
});

export let ValidationRules = {
  кодПоставщика: {
    descriptionKey: 'models.i-i-s-diagrammy-поставщики.validations.кодПоставщика.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-diagrammy-поставщики.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТС: {
    descriptionKey: 'models.i-i-s-diagrammy-поставщики.validations.номерТС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПоставщикиE', 'i-i-s-diagrammy-поставщики', {
    кодПоставщика: attr('Код поставщика', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    номерТС: attr('Номер ТС', { index: 2 })
  });

  modelClass.defineProjection('ПоставщикиL', 'i-i-s-diagrammy-поставщики', {
    кодПоставщика: attr('Код поставщика', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    номерТС: attr('Номер ТС', { index: 2 })
  });
};
