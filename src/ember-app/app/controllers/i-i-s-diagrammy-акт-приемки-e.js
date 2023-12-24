import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-diagrammy-акт-приемки-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-diagrammy-т-ч-акта-приемки+товар':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'материал',
            required: true,
            relationName: 'товар',
            projection: 'ТоварL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-diagrammy-т-ч-акта-приемки+складскоеМесто':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номерМеста',
            required: true,
            relationName: 'складскоеМесто',
            projection: 'СкладскоеМестоL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
