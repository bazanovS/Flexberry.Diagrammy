import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  табель: DS.attr('number'),
  фИОСотрудника: DS.attr('string')
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-diagrammy-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  табель: {
    descriptionKey: 'models.i-i-s-diagrammy-сотрудники.validations.табель.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИОСотрудника: {
    descriptionKey: 'models.i-i-s-diagrammy-сотрудники.validations.фИОСотрудника.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-diagrammy-сотрудники', {
    фИОСотрудника: attr('Ф и о сотрудника', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    табель: attr('Табель', { index: 2 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-diagrammy-сотрудники', {
    фИОСотрудника: attr('Ф и о сотрудника', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    табель: attr('Табель', { index: 2 })
  });
};
