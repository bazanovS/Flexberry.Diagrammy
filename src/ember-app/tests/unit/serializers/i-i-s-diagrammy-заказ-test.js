import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-diagrammy-заказ', 'Unit | Serializer | i-i-s-diagrammy-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-diagrammy-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-diagrammy-доставка',
    'transform:i-i-s-diagrammy-наличие',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
