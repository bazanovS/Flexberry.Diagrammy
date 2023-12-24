import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПроводки: DS.attr('date'),
  заказ: DS.belongsTo('i-i-s-diagrammy-заказ', { inverse: null, async: false }),
  складскоеМесто: DS.belongsTo('i-i-s-diagrammy-складское-место', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-diagrammy-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПроводки: {
    descriptionKey: 'models.i-i-s-diagrammy-отпуск-материала.validations.датаПроводки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-diagrammy-отпуск-материала.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  складскоеМесто: {
    descriptionKey: 'models.i-i-s-diagrammy-отпуск-материала.validations.складскоеМесто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-diagrammy-отпуск-материала.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтпускМатериалаE', 'i-i-s-diagrammy-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    складскоеМесто: belongsTo('i-i-s-diagrammy-складское-место', 'Складское место', {
      номерМеста: attr('Номер места', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номерМеста' }),
    сотрудники: belongsTo('i-i-s-diagrammy-сотрудники', 'Сотрудники', {
      фИОСотрудника: attr('Ф и о сотрудника', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИОСотрудника' }),
    заказ: belongsTo('i-i-s-diagrammy-заказ', 'Заказ', {
      фИОЗаказчика: attr('Ф и о заказчика', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИОЗаказчика' })
  });

  modelClass.defineProjection('ОтпускМатериалаL', 'i-i-s-diagrammy-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    складскоеМесто: belongsTo('i-i-s-diagrammy-складское-место', 'Номер места', {
      номерМеста: attr('Номер места', { index: 1 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-diagrammy-сотрудники', 'Ф и о сотрудника', {
      фИОСотрудника: attr('Ф и о сотрудника', { index: 2 })
    }, { index: -1, hidden: true }),
    заказ: belongsTo('i-i-s-diagrammy-заказ', 'Ф и о заказчика', {
      фИОЗаказчика: attr('Ф и о заказчика', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
