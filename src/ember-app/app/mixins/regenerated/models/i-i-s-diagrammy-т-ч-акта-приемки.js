import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  складскоеМесто: DS.belongsTo('i-i-s-diagrammy-складское-место', { inverse: null, async: false }),
  товар: DS.belongsTo('i-i-s-diagrammy-товар', { inverse: null, async: false }),
  актПриемки: DS.belongsTo('i-i-s-diagrammy-акт-приемки', { inverse: 'тЧАктаПриемки', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-diagrammy-т-ч-акта-приемки.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  складскоеМесто: {
    descriptionKey: 'models.i-i-s-diagrammy-т-ч-акта-приемки.validations.складскоеМесто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-diagrammy-т-ч-акта-приемки.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  актПриемки: {
    descriptionKey: 'models.i-i-s-diagrammy-т-ч-акта-приемки.validations.актПриемки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧАктаПриемкиE', 'i-i-s-diagrammy-т-ч-акта-приемки', {
    товар: belongsTo('i-i-s-diagrammy-товар', 'Товар', {
      материал: attr('Материал', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'материал' }),
    количество: attr('Количество', { index: 2 }),
    складскоеМесто: belongsTo('i-i-s-diagrammy-складское-место', 'Складское место', {
      номерМеста: attr('Номер места', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'номерМеста' })
  });
};
