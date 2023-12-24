import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  естьВНаличии: DS.attr('i-i-s-diagrammy-наличие'),
  кодМатериала: DS.attr('number'),
  количество: DS.attr('number'),
  материал: DS.attr('string'),
  цена: DS.attr('decimal'),
  складскоеМесто: DS.belongsTo('i-i-s-diagrammy-складское-место', { inverse: null, async: false })
});

export let ValidationRules = {
  естьВНаличии: {
    descriptionKey: 'models.i-i-s-diagrammy-товар.validations.естьВНаличии.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодМатериала: {
    descriptionKey: 'models.i-i-s-diagrammy-товар.validations.кодМатериала.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-diagrammy-товар.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-diagrammy-товар.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-diagrammy-товар.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  складскоеМесто: {
    descriptionKey: 'models.i-i-s-diagrammy-товар.validations.складскоеМесто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-diagrammy-товар', {
    кодМатериала: attr('Код материала', { index: 0 }),
    материал: attr('Материал', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    естьВНаличии: attr('Есть в наличии', { index: 3 }),
    количество: attr('Количество', { index: 4 }),
    складскоеМесто: belongsTo('i-i-s-diagrammy-складское-место', 'Складское место', {
      номерМеста: attr('Номер места', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'номерМеста' })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-diagrammy-товар', {
    кодМатериала: attr('Код материала', { index: 0 }),
    материал: attr('Материал', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    естьВНаличии: attr('Есть в наличии', { index: 3 }),
    количество: attr('Количество', { index: 4 }),
    складскоеМесто: belongsTo('i-i-s-diagrammy-складское-место', 'Номер места', {
      номерМеста: attr('Номер места', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
