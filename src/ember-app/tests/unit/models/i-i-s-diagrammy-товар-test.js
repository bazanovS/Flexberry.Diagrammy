import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-diagrammy-товар', 'Unit | Model | i-i-s-diagrammy-товар', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-diagrammy-акт-приемки',
    'model:i-i-s-diagrammy-заказ',
    'model:i-i-s-diagrammy-отпуск-материала',
    'model:i-i-s-diagrammy-поставщики',
    'model:i-i-s-diagrammy-складское-место',
    'model:i-i-s-diagrammy-сотрудники',
    'model:i-i-s-diagrammy-т-ч-акта-приемки',
    'model:i-i-s-diagrammy-т-ч-заказа',
    'model:i-i-s-diagrammy-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
