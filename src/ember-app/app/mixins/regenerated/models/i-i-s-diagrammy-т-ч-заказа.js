import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  товар: DS.belongsTo('i-i-s-diagrammy-товар', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-diagrammy-заказ', { inverse: 'тЧЗаказа', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-diagrammy-т-ч-заказа.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-diagrammy-т-ч-заказа.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-diagrammy-т-ч-заказа.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧЗаказаE', 'i-i-s-diagrammy-т-ч-заказа', {
    количество: attr('Количество', { index: 0 }),
    товар: belongsTo('i-i-s-diagrammy-товар', 'Товар', {
      материал: attr('Материал', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'материал' })
  });
};
