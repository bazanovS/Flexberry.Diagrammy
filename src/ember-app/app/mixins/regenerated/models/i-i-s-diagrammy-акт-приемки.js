import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПриемки: DS.attr('date'),
  номерАкта: DS.attr('number'),
  поставщики: DS.belongsTo('i-i-s-diagrammy-поставщики', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-diagrammy-сотрудники', { inverse: null, async: false }),
  тЧАктаПриемки: DS.hasMany('i-i-s-diagrammy-т-ч-акта-приемки', { inverse: 'актПриемки', async: false })
});

export let ValidationRules = {
  датаПриемки: {
    descriptionKey: 'models.i-i-s-diagrammy-акт-приемки.validations.датаПриемки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерАкта: {
    descriptionKey: 'models.i-i-s-diagrammy-акт-приемки.validations.номерАкта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  поставщики: {
    descriptionKey: 'models.i-i-s-diagrammy-акт-приемки.validations.поставщики.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-diagrammy-акт-приемки.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧАктаПриемки: {
    descriptionKey: 'models.i-i-s-diagrammy-акт-приемки.validations.тЧАктаПриемки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АктПриемкиE', 'i-i-s-diagrammy-акт-приемки', {
    номерАкта: attr('Номер акта', { index: 0 }),
    датаПриемки: attr('Дата приемки', { index: 1 }),
    сотрудники: belongsTo('i-i-s-diagrammy-сотрудники', 'Сотрудники', {
      фИОСотрудника: attr('Принял', { index: 3, hidden: true }),
      должность: attr('Должность', { index: 4 })
    }, { index: 2, displayMemberPath: 'фИОСотрудника' }),
    поставщики: belongsTo('i-i-s-diagrammy-поставщики', 'Поставщики', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' }),
    тЧАктаПриемки: hasMany('i-i-s-diagrammy-т-ч-акта-приемки', 'Т ч акта приемки', {
      товар: belongsTo('i-i-s-diagrammy-товар', 'Товар', {
        материал: attr('Материал', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'материал' }),
      количество: attr('Количество', { index: 2 }),
      складскоеМесто: belongsTo('i-i-s-diagrammy-складское-место', 'Складское место', {
        номерМеста: attr('Номер места', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'номерМеста' })
    })
  });

  modelClass.defineProjection('АктПриемкиL', 'i-i-s-diagrammy-акт-приемки', {
    номерАкта: attr('Номер акта', { index: 0 }),
    датаПриемки: attr('Дата приемки', { index: 1 }),
    сотрудники: belongsTo('i-i-s-diagrammy-сотрудники', 'Принял', {
      фИОСотрудника: attr('Принял', { index: 2 })
    }, { index: -1, hidden: true }),
    поставщики: belongsTo('i-i-s-diagrammy-поставщики', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
